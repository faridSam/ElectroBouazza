"use client";
import { useEffect, useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header id="accueil">
      <div className="announcement">
        BOUAZZA · Service de réparation · Montréal et environs
      </div>
      <div className="nav">
        <a href="#accueil" className="brand" aria-label="BOUAZZA, accueil">
          <span className="brand-wordmark">
            BOUAZZA<i>.</i>
          </span>
          <small className="brand-caption">Réparation · Montréal</small>
        </a>
        <nav
          className={menuOpen ? "navlinks open" : "navlinks"}
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a"))
              setMenuOpen(false);
          }}
          id="navlinks"
          aria-label="Navigation principale"
        >
          <a href="#services">Services</a>
          <a href="#approche">Notre méthode</a>
          <a href="#avis">Avis clients</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          id="menu"
          className="menu"
          aria-controls="navlinks"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
