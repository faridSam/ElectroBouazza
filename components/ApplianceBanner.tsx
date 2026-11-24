import { Fragment } from "react";

export function ApplianceBanner() {
  const appliances = [
    "Réfrigérateurs",
    "Laveuses",
    "Sécheuses",
    "Fours",
    "Lave-vaisselle",
  ];
  return (
    <div
      className="marquee"
      aria-label="Électroménagers réparés : Réfrigérateurs, Laveuses, Sécheuses, Fours et Lave-vaisselle"
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((index) => (
          <div className="marquee-set" key={index}>
            {appliances.map((name) => (
              <Fragment key={name}>
                <span>{name}</span>
                <b>✳</b>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
