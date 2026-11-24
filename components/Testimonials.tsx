"use client";
import { useState } from "react";
const quotes = [
  "« J'ai pu expliquer la panne facilement et comprendre les prochaines étapes. »",
  "« Le formulaire est simple, et les informations demandées sont pertinentes. »",
  "« Pouvoir appeler directement est rassurant lorsqu'un appareil important est en panne. »",
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const step = (direction: number) =>
    setIndex((i) => (i + direction + quotes.length) % quotes.length);
  return (
    <section className="testimonials" id="avis">
      <div className="wrap quotesgrid">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "#c2ddba" }}>
            Témoignages
          </span>
          <h2>La confiance commence par un échange simple.</h2>
          <p>
            Exemples de présentation : ces avis sont fictifs et devront être
            remplacés par des témoignages autorisés.
          </p>
        </div>
        <div className="quotebox reveal">
          <blockquote id="qtext" aria-live="polite">
            {quotes[index]}
          </blockquote>
          <div className="qfoot">
            <small>Exemple fictif · Démonstration uniquement</small>
            <div>
              <button
                type="button"
                id="prev"
                onClick={() => step(-1)}
                aria-label="Témoignage précédent"
              >
                ‹
              </button>{" "}
              <button
                type="button"
                id="next"
                onClick={() => step(1)}
                aria-label="Témoignage suivant"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
