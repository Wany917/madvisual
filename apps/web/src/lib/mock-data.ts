export type SessionType = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
};

export const SESSION_TYPES: SessionType[] = [
  {
    id: "portrait",
    name: "Portrait",
    description:
      "Séance portrait en studio ou en extérieur. Lumière travaillée, direction artistique soignée.",
    duration: "1h",
    price: "150€",
    image: "/photos/seances/portrait.jpg",
  },
  {
    id: "interieur",
    name: "Intérieur",
    description:
      "Shooting en intérieur — appartement, studio, lieu atypique. Ambiance intimiste et maîtrisée.",
    duration: "1h30",
    price: "200€",
    image: "/photos/seances/interieur.jpg",
  },
  {
    id: "exterieur",
    name: "Extérieur",
    description:
      "Séance en extérieur — rue, parc, architecture. Lumière naturelle et cadres urbains.",
    duration: "1h30",
    price: "200€",
    image: "/photos/seances/exterieur.jpg",
  },
  {
    id: "mariage",
    name: "Mariage",
    description:
      "Couverture complète de votre journée. Préparatifs, cérémonie, réception — chaque moment capturé.",
    duration: "8h",
    price: "1 500€",
    image: "/photos/seances/mariage.jpg",
  },
  {
    id: "evenementiel",
    name: "Événementiel",
    description:
      "Couverture événementielle — soirées, lancements, conférences. Reportage discret et efficace.",
    duration: "4h",
    price: "600€",
    image: "/photos/seances/evenementiel.jpg",
  },
  {
    id: "urban",
    name: "Urban",
    description:
      "Shooting urbain — streetwear, architecture, lifestyle. L'énergie de la ville en images.",
    duration: "2h",
    price: "250€",
    image: "/photos/seances/urban.jpg",
  },
  {
    id: "fashion",
    name: "Fashion",
    description:
      "Séance mode — lookbook, éditorial, campagne. Direction artistique et post-production incluses.",
    duration: "3h",
    price: "400€",
    image: "/photos/seances/fashion.jpg",
  },
];

export type PortfolioItem = {
  src: string;
  alt: string;
  category: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { src: "/photos/portfolio/maty-01.jpg", alt: "Maty — Fashion Editorial", category: "Fashion" },
  { src: "/photos/portfolio/aby-01.jpg", alt: "Aby — Portrait Studio", category: "Portrait" },
  { src: "/photos/portfolio/mariage-01.jpg", alt: "Ayman & Clara — Mariage", category: "Mariage" },
  { src: "/photos/portfolio/assy-01.jpg", alt: "Assy — Portrait Élégant", category: "Portrait" },
  { src: "/photos/portfolio/maty-02.jpg", alt: "Maty — Close-up", category: "Fashion" },
  { src: "/photos/portfolio/aby-02.jpg", alt: "Aby — Seated Portrait", category: "Portrait" },
  { src: "/photos/portfolio/mariage-02.jpg", alt: "Ayman & Clara — Réception", category: "Mariage" },
  { src: "/photos/portfolio/assy-02.jpg", alt: "Assy — Joy", category: "Portrait" },
];

// Generate mock available slots for the next 30 days
function generateSlots() {
  const slots: { date: string; times: string[] }[] = [];
  const now = new Date();

  for (let i = 1; i <= 30; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);

    // Skip Sundays
    if (d.getDay() === 0) continue;

    const dateStr = d.toISOString().split("T")[0]!;

    // Fewer slots on Saturdays
    const times =
      d.getDay() === 6
        ? ["10:00", "14:00"]
        : ["09:00", "10:30", "14:00", "15:30", "17:00"];

    slots.push({ date: dateStr, times });
  }

  return slots;
}

export const AVAILABLE_SLOTS = generateSlots();
