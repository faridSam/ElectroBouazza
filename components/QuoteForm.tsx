"use client";
import { appliances } from "./appliances";
import { useDemoForm } from "./useDemoForm";

export function QuoteForm({
  appliance,
  setAppliance,
  close,
}: {
  appliance: string;
  setAppliance: (value: string) => void;
  close: () => void;
}) {
  const { status, submit } = useDemoForm(
    "✓ Demande validée en démonstration. Aucune donnée envoyée.",
  );
  return (
    <section className="dialog">
      <button className="x" onClick={close} aria-label="Fermer" type="button">
        ×
      </button>
      <span className="eyebrow">Élio · Montréal</span>
      <h2 id="quoteTitle">Demander un devis</h2>
      <p>
        Décrivez votre appareil et ses symptômes pour préparer une estimation.
        Le coût sera déterminé après évaluation.
      </p>
      <form onSubmit={submit} id="quoteForm">
        <div className="fields">
          <div className="field">
            <label htmlFor="qname">Nom *</label>
            <input id="qname" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="qtel">Téléphone *</label>
            <input id="qtel" type="tel" autoComplete="tel" required />
          </div>
          <div className="field">
            <label htmlFor="qmail">Courriel *</label>
            <input id="qmail" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="qarea">Secteur *</label>
            <input id="qarea" required placeholder="Ex. Rosemont, Laval" />
          </div>
          <div className="field">
            <label htmlFor="qapp">Appareil *</label>
            <select
              id="qapp"
              required
              value={appliance}
              onChange={(event) => setAppliance(event.target.value)}
            >
              <option value="">Choisir</option>
              {appliances.map(({ appliance }) => (
                <option key={appliance}>{appliance}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="qbrand">Marque et modèle</label>
            <input id="qbrand" placeholder="Facultatif" />
          </div>
          <div className="field wide">
            <label htmlFor="qissue">Panne observée *</label>
            <textarea id="qissue" required></textarea>
          </div>
        </div>
        <button className="submit" type="submit">
          Envoyer ma demande ↗
        </button>
        <div className="status" id="quoteStatus" role="status">
          {status}
        </div>
      </form>
    </section>
  );
}
