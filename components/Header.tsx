"use client";
import { useState } from "react";
import { CallLink, QuoteButton } from "./SiteActions";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="accueil">
      <div className="announcement">
        Élio · Service de réparation · Montréal et environs
      </div>
      <div className="nav">
        <a href="#accueil" className="brand" aria-label="Élio, accueil">
          élio<i>.</i>
          <small className="brand-caption">RÉPARATION · MONTRÉAL</small>
        </a>
        <nav
          className={menuOpen ? "navlinks open" : "navlinks"}
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a"))
              setMenuOpen(false);
          }}
          id="navlinks"
          aria-label="Sections"
        >
          <a href="#services">Services</a>
          <a href="#approche">Notre méthode</a>
          <a href="#avis">Avis clients</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navright">
          <CallLink className="callpill">☎ (514) XXX-XXXX</CallLink>
          <QuoteButton type="button" className="navquote">
            Obtenir un devis ↗
          </QuoteButton>
          <button
            type="button"
            id="menu"
            className="menu"
            aria-controls="navlinks"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
