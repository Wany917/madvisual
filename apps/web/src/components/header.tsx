"use client";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link
          href="/"
          className="font-serif text-lg sm:text-xl tracking-tight hover:text-primary transition-colors"
        >
          madvisual
        </Link>
        <nav className="flex items-center gap-3 sm:gap-8">
          <Link
            href="/#works"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Works
          </Link>
          <Link
            href="/#seances"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Séances
          </Link>
          <Link
            href="/#about"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Contact
          </Link>
          <Link
            href="/booking"
            className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-foreground/30 px-3 sm:px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Réserver
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
