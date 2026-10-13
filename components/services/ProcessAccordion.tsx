"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const processPhases = [
  {
    id: 1,
    phase: "01. Phase",
    title: "Discovery",
    image: "/phase1.png",
    imageAlt: "A telescope representing the discovery phase",
    description:
      "We define your goals, get to know your audience, and understand the context. Through exploration, investigation, and research, we seek the insights that inform our decisions.",
  },
  {
    id: 2,
    phase: "02. Phase",
    title: "Storytelling",
    image: "/phase2.png",
    imageAlt: "A hand organizing ideas for the storytelling phase",
    description:
      "Based on your goals and our research, we build the foundation of the presentation: its structure, tone of voice, flow, and narrative. Every idea is shaped to win people’s minds.",
  },
  {
    id: 3,
    phase: "03. Phase",
    title: "Design",
    image: "/phase3.png",
    imageAlt: "A hand creating a design illustration",
    description:
      "We use design to direct attention and keep people engaged. Every visual choice helps the story feel clear, memorable, and persuasive.",
  },
  {
    id: 4,
    phase: "04. Phase",
    title: "Testing & Optimization",
    image: "/phase4.png",
    imageAlt: "An ear listening to feedback",
    description:
      "We review the presentation with you, gather feedback, and refine each detail so the final story is focused, clear, and ready to work.",
  },
  {
    id: 5,
    phase: "05. Phase",
    title: "Delivery",
    image: "/phase5.png",
    imageAlt: "A hand holding a completed presentation",
    description:
      "We carefully prepare and hand over all project files, making sure the presentation is ready to use and easy to update in the future.",
  },
];

export default function ProcessAccordion() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <div className="process-list">
      {processPhases.map((phase) => {
        const isOpen = activePhase === phase.id;
        const detailsId = `process-details-${phase.id}`;

        return (
          <article className="process-item" key={phase.id}>
            <div className="process-row">
              <span className="process-phase">{phase.phase}</span>
              <h3 className="process-name">{phase.title}</h3>
              <button
                type="button"
                className={`process-read${isOpen ? " is-open" : ""}`}
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => setActivePhase(isOpen ? null : phase.id)}
              >
                READ
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={detailsId}
                  className="process-detail"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: [0.4, 0, 0.2, 1], duration: 1.3 }}
                >
                  <div className="process-detail-content">
                    <Image
                      className="process-detail-image"
                      src={phase.image}
                      alt={phase.imageAlt}
                      width={256}
                      height={256}
                      sizes="(max-width: 640px) 112px, 136px"
                    />
                    <p>{phase.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
