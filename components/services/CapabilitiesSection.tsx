import Image from "next/image";

const capabilities = [
  {
    id: "raise-funds",
    title: "BUILD DIGITAL PRODUCTS:",
    image: "/capability-raise-funds.jpeg",
    items: ["CUSTOM SOFTWARE", "WEB & APP DEVELOPMENT"],
  },
  {
    id: "sell-products",
    title: "DESIGN & EXPERIENCE:",
    image: "/capability-sell-products.jpeg",
    items: [
      "UI/UX DESIGN",
      "GRAPHIC DESIGN",
      "MOTION GRAPHICS",
      "2D ANIMATION",
      "3D ANIMATION",
    ],
  },
  {
    id: "hire-people",
    title: "DATA & TECHNOLOGY:",
    image: "/capability-hire-people.jpeg",
    items: [
      "DATA SOLUTIONS",
      "DIGITAL CONSULTING",
      "BUSINESS CONSULTING",
      "CLOUD SOLUTIONS",
      "BUSINESS AUTOMATION",
    ],
  },
  {
    id: "additional",
    title: "CREATIVE & BUSINESS:",
    image: "/capability-additional.jpeg",
    items: ["Business Solutions", "Digital Consulting", "Product Strategy", "Redesign", "Technology Consulting"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="capabilities-hero">
        <h2 id="capabilities-title" className="capabilities-statement">
          <span className="capabilities-highlight">Let’s be honest.</span> There are really no excuses to have a bad presentation anymore. No one has time for poorly communicated ideas. Focus on what you do best — growing your business, while we do our best at <span className="capabilities-highlight">making your presentations awesome.</span>
        </h2>
      </div>

      <div className="capabilities-grid">
        <p className="capabilities-label">Our Capabilities:</p>
        {capabilities.map((group) => (
          <section
            className={`capability-group capability-group--${group.id}`}
            key={group.id}
          >
            <h3 className="capability-group-title">{group.title}</h3>
            <ul className="capability-list">
              {group.items.map((item) => (
                <li className="capability-pill" key={item}>
                  <button className="capability-pill-button" type="button">
                    <span className="capability-pill-label">{item}</span>
                  </button>
                  <span className="capability-pill-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {capabilities.map((group) => (
          <figure
            className={`capability-preview capability-preview--${group.id}`}
            key={`${group.id}-preview`}
            aria-hidden="true"
          >
            <Image src={group.image} alt="" fill sizes="280px" />
          </figure>
        ))}
      </div>
    </section>
  );
}
