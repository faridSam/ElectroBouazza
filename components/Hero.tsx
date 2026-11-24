import { CallLink, QuoteButton } from "./SiteActions";

export function Hero() {
  return (
    <section className="hero">
      <div className="herophoto" aria-hidden="true"></div>
      <div className="wrap herowrap">
        <span className="eyebrow">Réparation d'électroménagers · Montréal</span>
        <h1>
          En panne ?<br />
          <span>On s'en occupe.</span>
        </h1>
        <p>
          Réfrigérateur qui ne refroidit plus ? Laveuse qui refuse de démarrer ?
          Parlez directement à un réparateur ou décrivez votre panne en quelques
          clics.
        </p>
        <div className="actions">
          <CallLink className="btn btnprimary">☎ Appeler maintenant</CallLink>
          <QuoteButton className="btn btnoutline" type="button">
            Demander un devis ↗
          </QuoteButton>
        </div>
        <div className="herofoot">
          <span>RÉPARATION À MONTRÉAL ET ENVIRONS</span>
          <a href="#services">DÉCOUVRIR NOS SERVICES ↓</a>
        </div>
      </div>
    </section>
  );
}
