"use client";
import { useState } from "react";
import { CallLink, QuoteButton } from "./SiteActions";
import type { Appliance } from "./appliances";

export function ServiceCard({ item }: { item: Appliance }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={expanded ? "card reveal expanded" : "card reveal"}>
      <div className="cardphoto">
        <img loading="lazy" alt={item.alt} src={item.image} />
        <span className="cardno">{item.number}</span>
        <div className="visor">
          <span className="vlabel">Pannes courantes</span>
          <h4>{item.overlayTitle}</h4>
          <ul>
            {item.faults.map((fault) => (
              <li key={fault}>{fault}</li>
            ))}
          </ul>
          <QuoteButton type="button" appliance={item.appliance}>
            Demander un devis ↗
          </QuoteButton>
        </div>
      </div>
      <div className="cardbody">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button
          className="expand"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Masquer les pannes −" : "Voir les pannes +"}
        </button>
      </div>
    </article>
  );
}
