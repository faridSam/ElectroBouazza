export const appliances = [
  {
    appliance: "Réfrigérateur",
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=850&q=80",
    alt: "Réfrigérateur moderne dans une cuisine",
    number: "01 / FROID",
    overlayTitle: "Réfrigérateurs",
    title: "Réfrigérateurs",
    description: "Retrouvez la fraîcheur de vos aliments.",
    faults: [
      "Ne refroidit plus",
      "Fuite d'eau ou accumulation de givre",
      "Bruits inhabituels",
    ],
  },
  {
    appliance: "Laveuse / sécheuse",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=850&q=80",
    alt: "Laveuse moderne à chargement frontal",
    number: "02 / BUANDERIE",
    overlayTitle: "Laveuses et sécheuses",
    title: "Laveuses & sécheuses",
    description: "Pour une buanderie qui fonctionne.",
    faults: [
      "Ne démarre plus",
      "Ne vidange pas ou n'essore pas",
      "Ne chauffe ou ne sèche plus",
    ],
  },
  {
    appliance: "Cuisinière / four",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=850&q=80",
    alt: "Cuisine contemporaine équipée d'un four",
    number: "03 / CUISSON",
    overlayTitle: "Cuisinières et fours",
    title: "Cuisinières & fours",
    description: "Reprenez vos habitudes en cuisine.",
    faults: [
      "Four qui ne chauffe plus",
      "Température irrégulière",
      "Commande ou élément défectueux",
    ],
  },
  {
    appliance: "Lave-vaisselle",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=850&q=80",
    alt: "Cuisine moderne avec électroménagers intégrés",
    number: "04 / VAISSELLE",
    overlayTitle: "Lave-vaisselle",
    title: "Lave-vaisselle",
    description: "Une panne de moins à gérer.",
    faults: [
      "Eau qui reste au fond",
      "Vaisselle mal nettoyée",
      "Cycle qui s'arrête",
    ],
  },
];

export type Appliance = (typeof appliances)[number];
