"use client";
import { appliances } from "./appliances";
import { useSiteActions } from "./SiteActions";
import { useDemoForm } from "./useDemoForm";

export function Contact() {
  const { contactAppliance, setContactAppliance } = useSiteActions();
  const { status, submit } = useDemoForm(
    "✓ Formulaire valide : démonstration uniquement. Aucun message envoyé.",
  );
  return (
    <section className="contact wrap" id="contact">
      <div className="reveal">
        <span className="eyebrow">Parlons de votre réparation</span>
        <h2>Un appareil en panne ? Contactez-nous.</h2>
        <p>
          Pour une réponse directe, le téléphone reste le premier choix. Vous
          pouvez aussi nous laisser les détails de la panne.
        </p>
        <div className="contactnumber">☎ (514) XXX-XXXX</div>
        <p style={{ fontSize: "12px" }}>
          Numéro fictif — à remplacer avant publication.
        </p>
      </div>
      <div className="formbox reveal">
        <h3>Demande de réparation</h3>
        <p>Formulaire de démonstration : aucune donnée n'est transmise.</p>
        <form onSubmit={submit} id="contactForm">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nom *</label>
              <input
                id="name"
                required
                autoComplete="name"
                placeholder="Votre nom"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Téléphone *</label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="(514) 000-0000"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Courriel *</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="vous@exemple.com"
              />
            </div>
            <div className="field">
              <label htmlFor="appareil">Appareil *</label>
              <select
                id="appareil"
                required
                value={contactAppliance}
                onChange={(event) => setContactAppliance(event.target.value)}
              >
                <option value="">Choisir un appareil</option>
                {appliances.map(({ appliance }) => (
                  <option key={appliance}>{appliance}</option>
                ))}
              </select>
            </div>
            <div className="field wide">
              <label htmlFor="desc">Description de la panne *</label>
              <textarea
                id="desc"
                required
                placeholder="Que se passe-t-il avec l'appareil ?"
              ></textarea>
            </div>
          </div>
          <button className="submit" type="submit">
            Envoyer la demande ↗
          </button>
          <div className="status" id="contactStatus" role="status">
            {status}
          </div>
        </form>
      </div>
    </section>
  );
}
