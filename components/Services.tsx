import { appliances } from "./appliances";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="secthead reveal">
          <div>
            <span className="eyebrow">Ce que nous réparons</span>
            <h2>
              Vos appareils.
              <br />
              Notre savoir-faire.
            </h2>
          </div>
          <p>
            Survolez une photographie pour découvrir les pannes les plus
            fréquentes. Sur mobile, touchez « Voir les pannes ».
          </p>
        </div>
        <div className="cards">
          {appliances.map((item) => (
            <ServiceCard key={item.appliance} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
