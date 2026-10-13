"use client";

import { useState } from "react";

const advantages = [
  {
    title: "Story + Design",
    description:
      "Every brand we work with gets tailored messaging, investor-grade clarity, and brand-defining design.",
  },
  {
    title: "Award-winning agency",
    description:
      "You don't have to care about design awards, but know that we do. Besides successful fundraising, they back our excellence.",
  },
  {
    title: "Ahead of the Curve",
    description:
      "We helped AI, Web3, and deep tech pioneers tell their stories before the world even heard a whisper.",
  },
  {
    title: "A proven revenue engine",
    description:
      "Our work is more than beautiful: it drives funding, sales, and growth. That's what matters most.",
  },
  {
    title: "We pick, you pick",
    description:
      "We view our projects as partnerships and are discerning about the companies we work with.",
  },
  {
    title: "9.3 Happiness Score",
    description:
      "Our relationship with each client is a top priority. We invest in mutual respect, honesty, and clarity, and continuously measure client happiness.",
  },
];

export default function KeyAdvantages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="key-advantages-section" aria-labelledby="advantages-heading">
      <h2 id="advantages-heading" className="key-advantages-ticker" aria-label="Key advantages">
        <span className="key-advantages-ticker-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <span className="key-advantages-ticker-copy" key={copy}>
              <span>Key Advantages</span>
              <span>Key Advantages</span>
            </span>
          ))}
        </span>
      </h2>

      <div className="key-advantages-content">
        <p className="key-advantages-label">What to expect:</p>
        <div className="key-advantages-grid">
          {advantages.map((advantage, index) => {
            const isOpen = openIndex === index;
            const descriptionId = `advantage-description-${index + 1}`;

            return (
              <article className={`key-advantage-card${isOpen ? " is-open" : ""}`} key={advantage.title}>
                <span className="key-advantage-number">{String(index + 1).padStart(2, "0")}</span>
                <p
                  className={`key-advantage-description${isOpen ? " is-open" : ""}`}
                  id={descriptionId}
                  aria-hidden={!isOpen}
                >
                  {advantage.description}
                </p>
                <div className="key-advantage-footer">
                  <span className="key-advantage-title">{advantage.title}</span>
                  <button
                    type="button"
                    className="key-advantage-toggle"
                    aria-expanded={isOpen}
                    aria-controls={descriptionId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {isOpen ? "Hide" : "Read"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
