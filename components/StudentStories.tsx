"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import styles from "../styles/student-stories.module.css";

type TeamStory = {
  initial: string;
  name: string;
  image: string;
  description: string;
  linkedin?: string;
  tilt: string;
  accent: boolean;
};

const stories: TeamStory[] = [
  {
    initial: "S",
    name: "Srushti",
    image: "/srushti.webp",
    description: "I am a passionate Frontend Developer at MetaRuleX, focused on creating modern, responsive, and user-friendly web experiences.",
    linkedin: "https://www.linkedin.com/in/er-srushti-panjlor-72a329244",
    tilt: "-3deg",
    accent: false,
  },
  {
    initial: "A",
    name: "Ashwini",
    image: "/ashwini.webp",
    description: "A passionate Frontend Developer and Data Analyst who combines creative design with data-driven insights to build user-friendly, responsive, and efficient digital solutions.",
    linkedin: "https://www.linkedin.com/in/ashwini-dubhashi",
    tilt: "2deg",
    accent: false,
  },
  {
    initial: "S",
    name: "Sairaj",
    image: "/sairaj.webp",
    description: "Creates impactful visual experiences through graphic design, Adobe Photoshop, Premiere Pro, 3D modeling, animation, and motion design.",
    linkedin: "https://www.linkedin.com/in/sairaj-vidhate-b0b981322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    tilt: "-2deg",
    accent: true,
  },
  {
    initial: "P",
    name: "Pratik",
    image: "/prathik.webp",
    description: "Handles backend operations, APIs, databases, data management, and reliable server-side systems for websites and applications.",
    linkedin: "https://www.linkedin.com/in/er-pratik-mhaske-942ab1257",
    tilt: "-2deg",
    accent: false,
  },
  {
    initial: "S",
    name: "Shivam",
    image: "/shivam.webp",
    description: "Builds responsive, modern web interfaces and transforms ideas into smooth, engaging digital experiences.",
    linkedin: "https://www.linkedin.com/in/shivam-jha-67b95629a",
    tilt: "2deg",
    accent: false,
  },
  {
    initial: "Y",
    name: "Yash",
    image: "/yash.webp",
    description: "From Pixels to Products — building seamless digital experiences across web, apps, software, UI/UX, and backend, from idea to deployment.",
    linkedin: "https://www.linkedin.com/in/bepolite",
    tilt: "-3deg",
    accent: false,
  },
  {
    initial: "A",
    name: "Anushka",
    image: "/Anushka.webp",
    description: "Building AI/ML solutions, developing predictive models, and transforming complex data into meaningful insights and smarter digital experiences.",
    linkedin: "https://www.linkedin.com/in/anushka-chaturvedi-432a5625a",
    tilt: "2deg",
    accent: false,
  },
  {
    initial: "H",
    name: "Harshda",
    image: "/Harshda.webp",
    description: "Transforming raw data into actionable insights through data analysis, visualization, and strategic thinking to drive smarter business decisions.",
    linkedin: "https://www.linkedin.com/in/harshadamali",
    tilt: "-2deg",
    accent: false,
  },
  {
    initial: "K",
    name: "Kartiki",
    image: "/Kartiki.webp",
    description: "Exploring AI/ML models, analyzing complex datasets, and building intelligent solutions that drive innovation and smarter decisions.",
    linkedin: "https://www.linkedin.com/in/kartiki-nandeshwar",
    tilt: "3deg",
    accent: false,
  },
];

export default function StudentStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail) return;

    let maxTravel = 0;
    let frame = 0;
    let disposed = false;

    const updatePosition = () => {
      frame = 0;
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(
        1,
        Math.max(0, -section.getBoundingClientRect().top / scrollDistance),
      );
      rail.style.transform = "translate3d(" + -maxTravel * progress + "px, 0, 0)";
    };

    const queuePositionUpdate = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updatePosition);
    };

    const measure = () => {
      if (disposed) return;
      maxTravel = Math.max(0, rail.scrollWidth - window.innerWidth);
      section.style.height = window.innerHeight + maxTravel + "px";
      queuePositionUpdate();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(rail);
    window.addEventListener("scroll", queuePositionUpdate, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    document.fonts?.ready.then(measure);
    measure();

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      window.removeEventListener("scroll", queuePositionUpdate);
      window.removeEventListener("resize", measure);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="bg-[#f2f1ec] text-[#202023]">
      <section className="flex min-h-[48svh] flex-col items-center justify-center gap-8 px-5 py-14 text-center md:min-h-[54svh] md:gap-10">
        <div
          className="relative grid h-[5.25rem] w-[6.25rem] place-items-center"
          aria-label="Portfolio"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 113 99"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M70.2954 74.507C58.6471 80.9638 46.5573 83.9735 36.4414 83.6421C26.3137 83.3102 18.26 79.6406 14.4966 72.8512C10.7332 66.0619 11.889 57.2873 16.9744 48.5226C22.0539 39.7683 31.0129 31.1105 42.6612 24.6537C54.3096 18.1969 66.3993 15.1872 76.5152 15.5187C86.6429 15.8505 94.6967 19.5201 98.4601 26.3095C102.223 33.0989 101.068 41.8734 95.9822 50.6381C90.9027 59.3925 81.9437 68.0503 70.2954 74.507Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-xs uppercase tracking-[0.12em]">
            <span className={styles.actionFont}>Teams</span>
          </span>
        </div>

        <h2 className={"max-w-5xl text-[clamp(2.5rem,7.4vw,6.8rem)] uppercase leading-[0.88] tracking-[-0.045em] " + styles.displayFont}>
          Honest stories of
          <br className="hidden sm:block" /> our Teams
        </h2>
      </section>

      <section
        ref={sectionRef}
        aria-label="MetaruleX team profiles"
        className={styles.scrollSection}
      >
        <div className={styles.pinFrame}>
          <div ref={railRef} className={styles.rail}>
            {stories.map((story) => (
              <article
                key={story.name}
                aria-label={"Team member " + story.name}
                style={{ "--rest-tilt": story.tilt } as CSSProperties}
                onPointerMove={(event: ReactPointerEvent<HTMLElement>) => {
                  if (event.pointerType !== "mouse") return;
                  const bounds = event.currentTarget.getBoundingClientRect();
                  const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
                  const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
                  event.currentTarget.style.setProperty("--pointer-tilt-x", `${-vertical * 5}deg`);
                  event.currentTarget.style.setProperty("--pointer-tilt-y", `${horizontal * 7}deg`);
                }}
                onPointerLeave={(event: ReactPointerEvent<HTMLElement>) => {
                  event.currentTarget.style.setProperty("--pointer-tilt-x", "0deg");
                  event.currentTarget.style.setProperty("--pointer-tilt-y", "0deg");
                }}
                className={[
                  styles.card,
                  "flex shrink-0 flex-col justify-between p-6 text-left shadow-[0_22px_65px_-40px_rgba(24,24,22,0.35)] md:p-8 rounded-[1.5rem] md:rounded-[1.75rem]",
                  story.accent
                    ? "bg-[#e1ff01] text-[#202023]"
                    : "bg-white text-[#202023]",
                ].join(" ")}
              >
                <div className="flex min-h-0 flex-1 items-start justify-between gap-4">
                  <span className={"text-[clamp(3.5rem,8vw,6rem)] leading-[0.85] " + styles.displayFont}>
                    {story.initial}
                  </span>
                  <div className={styles.photoFrame}>
                    <Image
                      src={story.image}
                      alt={story.name + ", metaruleX team member"}
                      fill
                      sizes="(max-width: 768px) 45vw, 240px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 pt-5 md:gap-5 md:pt-7">
                  <h3 className={"text-3xl uppercase leading-none md:text-4xl " + styles.displayFont}>
                    {story.name}
                  </h3>
                  <p className={"text-[0.68rem] uppercase leading-[1.55] tracking-[0.045em] text-[rgba(32,32,35,0.65)] md:text-xs " + styles.copyFont}>
                    {story.description}
                  </p>
                  {story.linkedin && (
                    <a
                      href={story.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={story.linkedin === "https://www.linkedin.com/"
                        ? `Open LinkedIn for ${story.name}`
                        : `View ${story.name}'s LinkedIn profile`}
                      className={[
                        "rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.08em]",
                        styles.actionFont,
                        styles.linkedinLink,
                        story.accent
                          ? "border-[#202023] bg-[#202023] text-[#e1ff01]"
                          : "border-[rgba(130,119,119,0.45)] bg-[#e1ff01ce] text-[#202023]",
                      ].join(" ")}
                    >
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
