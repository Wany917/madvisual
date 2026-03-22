"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useMemo } from "react";
import { SESSION_TYPES, AVAILABLE_SLOTS } from "@/lib/mock-data";

const STEPS = ["Séance", "Date", "Informations", "Confirmation"] as const;

function BookingFlow() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("type");

  const [step, setStep] = useState(preselected ? 1 : 0);
  const [selectedType, setSelectedType] = useState(preselected ?? "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });

  const selectedSession = SESSION_TYPES.find((s) => s.id === selectedType);

  // Group slots by month for the calendar
  const slotsByDate = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const slot of AVAILABLE_SLOTS) {
      map.set(slot.date, slot.times);
    }
    return map;
  }, []);

  // Get next 30 days as calendar grid
  const calendarDays = useMemo(() => {
    const days: { date: string; dayNum: number; dayOfWeek: number; available: boolean }[] = [];
    const now = new Date();
    for (let i = 1; i <= 30; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().split("T")[0]!;
      days.push({
        date: dateStr,
        dayNum: d.getDate(),
        dayOfWeek: d.getDay(),
        available: slotsByDate.has(dateStr),
      });
    }
    return days;
  }, [slotsByDate]);

  const timesForDate = selectedDate ? slotsByDate.get(selectedDate) ?? [] : [];

  function handleSubmit() {
    setStep(3);
  }

  return (
    <main className="min-h-svh pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Retour
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-medium mt-6">
            Réserver une séance
          </h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-2 mb-12">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-colors ${
                    i < step
                      ? "bg-foreground text-background"
                      : i === step
                        ? "border-2 border-foreground text-foreground"
                        : "border border-border text-muted-foreground"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span
                  className={`text-xs uppercase tracking-[0.15em] hidden sm:block ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-px ${i < step ? "bg-foreground" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* ═══ Step 0 — Choix de la séance ═══ */}
        {step === 0 && (
          <div>
            <p className="text-muted-foreground mb-8">
              Choisissez le type de séance qui vous correspond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SESSION_TYPES.map((session) => (
                <button
                  key={session.id}
                  onClick={() => {
                    setSelectedType(session.id);
                    setStep(1);
                  }}
                  className={`group border text-left p-0 overflow-hidden transition-all duration-300 cursor-pointer ${
                    selectedType === session.id
                      ? "border-foreground"
                      : "border-border hover:border-foreground/50"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={session.image}
                      alt={session.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={75}
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-serif text-base font-medium">
                      {session.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {session.duration} &middot; à partir de {session.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ═══ Step 1 — Choix de date ═══ */}
        {step === 1 && (
          <div>
            {selectedSession && (
              <div className="flex items-center gap-4 mb-8 p-4 border border-border">
                <div className="relative w-16 h-16 shrink-0 overflow-hidden">
                  <Image
                    src={selectedSession.image}
                    alt={selectedSession.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-medium">{selectedSession.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {selectedSession.duration} &middot; à partir de{" "}
                    {selectedSession.price}
                  </p>
                </div>
                <button
                  onClick={() => setStep(0)}
                  className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Modifier
                </button>
              </div>
            )}

            <p className="text-muted-foreground mb-6">
              Sélectionnez une date et un créneau disponible.
            </p>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2 mb-8">
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
                <div
                  key={d}
                  className="text-center text-[10px] uppercase tracking-wider text-muted-foreground pb-2"
                >
                  {d}
                </div>
              ))}

              {/* Offset for first day alignment */}
              {calendarDays.length > 0 &&
                Array.from({
                  length: (calendarDays[0]!.dayOfWeek + 6) % 7,
                }).map((_, i) => <div key={`empty-${i}`} />)}

              {calendarDays.map((day) => (
                <button
                  key={day.date}
                  disabled={!day.available}
                  onClick={() => {
                    setSelectedDate(day.date);
                    setSelectedTime("");
                  }}
                  className={`aspect-square flex items-center justify-center text-sm transition-all cursor-pointer disabled:cursor-default ${
                    selectedDate === day.date
                      ? "bg-foreground text-background font-medium"
                      : day.available
                        ? "hover:bg-muted"
                        : "text-muted-foreground/30"
                  }`}
                >
                  {day.dayNum}
                </button>
              ))}
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div>
                <p className="text-sm font-medium mb-3">
                  Créneaux disponibles le{" "}
                  {new Date(selectedDate).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                <div className="flex flex-wrap gap-2">
                  {timesForDate.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 text-sm border transition-all cursor-pointer ${
                        selectedTime === time
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(0)}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                &larr; Retour
              </button>
              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
                className="border border-foreground/30 text-xs uppercase tracking-[0.2em] px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                Continuer &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ═══ Step 2 — Formulaire ═══ */}
        {step === 2 && (
          <div>
            <p className="text-muted-foreground mb-8">
              Renseignez vos coordonnées pour finaliser la demande.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="jean@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Notes / Message
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos envies..."
                />
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                &larr; Retour
              </button>
              <button
                disabled={!form.name || !form.email}
                onClick={handleSubmit}
                className="border border-foreground/30 text-xs uppercase tracking-[0.2em] px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                Envoyer la demande
              </button>
            </div>
          </div>
        )}

        {/* ═══ Step 3 — Confirmation ═══ */}
        {step === 3 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
              Demande envoyée !
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-2">
              Merci {form.name}. Votre demande de séance{" "}
              <span className="text-foreground font-medium">
                {selectedSession?.name}
              </span>{" "}
              le{" "}
              <span className="text-foreground font-medium">
                {selectedDate &&
                  new Date(selectedDate).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
              </span>{" "}
              à <span className="text-foreground font-medium">{selectedTime}</span>{" "}
              a bien été enregistrée.
            </p>
            <p className="text-sm text-muted-foreground mb-10">
              Vous recevrez une confirmation par email sous 24h.
            </p>
            <Link
              href="/"
              className="inline-block border border-foreground/30 text-xs uppercase tracking-[0.2em] px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-svh pt-24 pb-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 w-48 bg-muted animate-pulse mb-12" />
            <div className="h-64 bg-muted animate-pulse" />
          </div>
        </main>
      }
    >
      <BookingFlow />
    </Suspense>
  );
}
