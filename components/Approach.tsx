export function Approach() {
  return (
    <section className="approach wrap" id="approche">
      <div className="approachimg reveal">
        <img
          loading="lazy"
          alt="Cuisine lumineuse et fonctionnelle"
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=85"
        />
      </div>
      <div className="reveal">
        <span className="eyebrow">Comment ça marche</span>
        <h2>
          Un contact clair.
          <br />
          Une solution adaptée.
        </h2>
        <p>
          Le parcours a été conçu pour vous éviter les complications inutiles,
          dès le premier échange.
        </p>
        <div className="steps">
          <div className="step">
            <small>01</small>
            <div>
              <strong>Appelez ou décrivez votre panne</strong>
              <p>Choisissez le téléphone ou le formulaire de devis.</p>
            </div>
          </div>
          <div className="step">
            <small>02</small>
            <div>
              <strong>Présentez votre appareil</strong>
              <p>Marque, symptômes et secteur d'intervention.</p>
            </div>
          </div>
          <div className="step">
            <small>03</small>
            <div>
              <strong>Organisez la suite</strong>
              <p>
                Les modalités de diagnostic et d'intervention sont précisées
                après échange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
