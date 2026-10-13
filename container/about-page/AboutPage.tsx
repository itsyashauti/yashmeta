import Image from "next/image";
import { useState } from "react";
import Eyes from "./Eyes";

const projectSlides = [
  { title: ["Quality comes", "before quantity"], image: "/satyabanner.webp", alt: "SatyaFilm project banner" },
  { title: ["Creating real-world", "business results"], image: "/photobanner.webp", alt: "Photography project banner" },
  { title: ["Engineering", "clarity"], image: "/uibanner.webp", alt: "POS application project banner" },
  { title: ["When we commit,", "we go all-in"], image: "/krushnabanner.webp", alt: "Krushna Roadlines project banner" },
];

const brandPartners = [
  {
    logo: "/satyafilm-logo-black.png",
    name: "Satya Film Production",
  },
  {
    logo: "/krushna-transport-logo-black.png",
    name: "Krushna Transport",
  },
];

export default function AboutPage() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <main className="about-page overflow-hidden">
      <section id="top" className="border-b border-black/25">
        <div className="about-hero-inner mx-auto flex items-center px-5 pb-10 pt-[8vh] sm:px-8 md:px-12 lg:px-[3.25vw] xl:px-[3.25vw]">
          <h1 className="hero-title font-FoundersGrotesk text-[clamp(2.5rem,8.3vw,10rem)] font-semibold uppercase leading-[.72] tracking-[-.015em]">
            <span className="block">We create</span>
            <span className="about-title-second-line mt-[.04em] flex w-max max-w-full items-center gap-[.1em] whitespace-nowrap">
              <span className="hero-card-reveal"><Image src="/ochi-side.jpg" alt="" width={280} height={180} priority className="hero-card-image" /></span>
              <span>NEXT, REIMAGINED</span>
            </span>
            {/* <span className="mt-[.04em] block">Presentations</span> */}
          </h1>
        </div>
      </section>

      <section id="about">
        <div className="grid min-h-[320px] grid-cols-1 gap-8 px-5 py-8 sm:px-8 md:px-12 md:py-7 lg:grid-cols-[1.2fr_.9fr_220px] lg:gap-0 lg:px-[3.25vw] xl:grid-cols-[1.2fr_.9fr_220px] xl:gap-0 xl:px-[3.25vw]">
          <p className="text-[16px] leading-[1.4] md:text-[18px]">About us:</p>
          <div className="max-w-[390px] text-[16px] leading-[1.5] tracking-[-.02em] md:text-[19px] md:leading-[1.48]">
            <p>metaruleX is more than a name. We help ambitious teams make their ideas clear, memorable, and impossible to overlook.</p>
            <p className="mt-10">We believe the strongest ideas deserve to be seen. That’s why we turn complex messages into eye-opening presentations people can understand, remember, and act on.</p>
          </div>
          <a href="#partners" className="inline-flex h-fit w-fit items-center gap-2 justify-self-start rounded-full border border-black px-4 py-2 text-[14px] uppercase tracking-[-.02em] transition-colors hover:bg-black hover:text-white lg:justify-self-end xl:justify-self-end">
            Our works <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border border-black text-lg leading-none">↗</span>
          </a>
        </div>
      </section>

      <section aria-label="A closer look" className="relative h-[clamp(240px,calc(70px+21vw),470px)] overflow-hidden">
        <div className="absolute left-1/2 top-[clamp(38px,3.7vw,70px)] flex -translate-x-1/2 items-center">
          <Eyes className="gap-[clamp(12px,4vw,72px)]" />
        </div>
      </section>

      <section id="about-story" className="border-b border-black/15">
        <div className="px-5 pb-14 pt-16 sm:px-8 md:px-12 md:pb-16 md:pt-20 lg:px-[3.25vw] lg:pb-[62px] lg:pt-[78px]">
          <h2 className="max-w-[1100px] font-NeueMontreal text-[clamp(2.5rem,3.55vw,4.2rem)] leading-[1.04] tracking-[-.045em]">
            We save businesses from ugly and<br />ineffective presentations.
          </h2>
        </div>
        <div className="border-t border-black/15">
          <div className="grid min-h-[320px] grid-cols-1 gap-8 px-5 py-6 sm:px-8 md:px-12 md:py-7 lg:grid-cols-[1.2fr_.9fr_220px] lg:gap-0 lg:px-[3.25vw] xl:grid-cols-[1.2fr_.9fr_220px]">
            <p className="text-[16px] leading-[1.4] md:text-[18px]">We are metaruleX design:</p>
            <div className="max-w-[390px] text-[16px] leading-[1.5] tracking-[-.02em] md:text-[19px] md:leading-[1.48]">
<p>
  We’re a team of developers, designers, and technology enthusiasts building
  digital experiences that help businesses move forward. From websites and
  applications to custom software and AI-driven solutions, we turn ideas into
  purposeful, scalable digital products.
</p>

<p className="mt-10">
  At metaruleX, we combine thoughtful design, technical expertise, and creative
  problem-solving to build technology that makes a difference. We believe
  meaningful innovation comes from seeing things differently and creating
  solutions built for what comes next.
</p>
            </div>
            <div aria-hidden="true" />
          </div>
        </div>
        <section
          aria-label="Selected work"
          className="about-project-slider"
        >
          <div className="about-project-ticker" aria-label="Our commitments">
            <div className="about-project-ticker-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <span className="about-project-ticker-copy" key={copy}>
                  <span>Our commitments</span><span className="about-project-ticker-star">✳</span>
                  <span>Our commitments</span><span className="about-project-ticker-star">✳</span>
                </span>
              ))}
            </div>
          </div>

          <div className="about-project-stage">
            {projectSlides.map((project, index) => {
              const offset = (index - activeProject + projectSlides.length) % projectSlides.length;
              const isVisible = offset < 3;
              return (
                <button
                  type="button"
                  key={project.title[0]}
                  className="about-project-card"
                  data-offset={isVisible ? offset : "hidden"}
                  data-no-rise={index === (activeProject + 2) % projectSlides.length}
                  aria-label={offset === 0 ? "Move to the next commitment" : `Show commitment ${index + 1}`}
                  aria-current={offset === 0 ? "true" : undefined}
                  aria-hidden={!isVisible}
                  tabIndex={isVisible ? 0 : -1}
                  onClick={() => setActiveProject(offset === 0 ? (activeProject + 1) % projectSlides.length : index)}
                  onPointerMove={(event) => {
                    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    const bounds = event.currentTarget.getBoundingClientRect();
                    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
                    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
                  }}
                >
                  <span className="about-project-brand">
                    <Image src="/metarulex-logo.png" alt="metaruleX" width={240} height={86} className="h-full w-full object-contain object-left" />
                  </span>
                  <span className="about-project-preview">
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 58vw, 540px" className="object-cover" />
                  </span>
                  <span className="about-project-card-title">
                    {project.title.map((line) => <span key={line}>{line}</span>)}
                  </span>
                  <span className="about-project-card-count">{index + 1}<span>/</span>{projectSlides.length}</span>
                  <span className="about-project-cursor" aria-hidden="true">Next</span>
                </button>
              );
            })}
          </div>

          <div className="about-project-controls">
            <span className="about-project-count" aria-hidden="true">0{activeProject + 1} <span>/</span> 0{projectSlides.length}</span>
            <button
              type="button"
              className="about-project-next"
              onClick={() => setActiveProject((current) => (current + 1) % projectSlides.length)}
              aria-label="Next project"
            >
              Next <span aria-hidden="true">↗</span>
            </button>
          </div>
        </section>
      </section>

        <section id="partners" aria-label="Brand partners" className="client-story-section">
        <div className="client-story-heading">
          <h2>Brands we’re proud to work with:</h2>
        </div>
        <div className="client-story-shell">
          <div className="client-story-viewport" role="region" aria-label="Our two current brand partners">
            <div className="client-story-track">
              {brandPartners.map((story) => (
                <article key={story.name} className="client-story-card">
                  <div className="client-story-logo" aria-hidden="true">
                    <Image src={story.logo} alt="" width={180} height={90} className="client-story-logo-image" />
                  </div>
                  <p className="client-story-name">{story.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
