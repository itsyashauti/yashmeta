"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Curve from "../components/Curve/Curve";
import Ready from "../components/Ready";
import { projects } from "../constants/projects";

function Eye({ pupilX, pupilY, glintX, glintY, side }: { pupilX: number; pupilY: number; glintX: number; glintY: number; side: "left" | "right" }) {
  return (
    <div className={"eye eye-" + side}>
      <div className="eye-pupil" style={{ transform: "translate(" + pupilX + "px, " + pupilY + "px)" }}>
        <span className="eye-glint" style={{ transform: "translate(-50%, -50%) translate(" + glintX + "px, " + glintY + "px)" }} />
      </div>
    </div>
  );
}

export default function OurWorkPage() {
  const [eyeGaze, setEyeGaze] = useState([
    { pupilX: 0, pupilY: 0, glintX: 0, glintY: 0 },
    { pupilX: 0, pupilY: 0, glintX: 0, glintY: 0 },
  ]);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    const eyes = Array.from(document.querySelectorAll<HTMLElement>(".our-work-page .eye"));
    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    const moveEyes = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const nextGaze = eyes.map((eye) => {
        const bounds = eye.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const dx = pointerX - centerX;
        const dy = pointerY - centerY;
        const angle = Math.atan2(dy, dx);
        const pupilDistance = Math.min(bounds.width * 0.055, Math.hypot(dx, dy) * 0.06);
        const pupilX = Math.cos(angle) * pupilDistance;
        const pupilY = Math.sin(angle) * pupilDistance;
        const glintDx = dx - pupilX;
        const glintDy = dy - pupilY;
        const glintAngle = Math.atan2(glintDy, glintDx);
        const glintDistance = Math.min(bounds.width * 0.61 * 0.38, Math.hypot(glintDx, glintDy) * 0.24);
        return {
          pupilX,
          pupilY,
          glintX: Math.cos(glintAngle) * glintDistance,
          glintY: Math.sin(glintAngle) * glintDistance,
        };
      });
        if (nextGaze.length === 2) setEyeGaze(nextGaze);
      });
    };
    window.addEventListener("pointermove", moveEyes, { passive: true });
    return () => {
      window.removeEventListener("pointermove", moveEyes);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our work | metaruleX</title>
        <meta name="description" content="Explore selected presentation and brand design projects by metaruleX." />
      </Head>
      <Curve backgroundColor="#f1f1f1">
        <main className="our-work-page">
          <section className="work-hero" aria-labelledby="work-title">
            <div className="hero-title">
              <h1 id="work-title">WORK</h1>
              <sup>({String(projects.length).padStart(2, "0")})</sup>
            </div>
            <div className="eyes-window" aria-hidden="true">
              <div className="eyes-pair">
                <Eye side="left" {...eyeGaze[0]} />
                <Eye side="right" {...eyeGaze[1]} />
              </div>
            </div>
            <div className="hero-shutter hero-shutter-back" />
            <div className="hero-shutter hero-shutter-front" />
            <span className="hero-scroll-note">Scroll to explore <span>↓</span></span>
          </section>

          <section className="work-content" id="projects">
            <div className="work-intro">
              <p>
                Purpose driven, <span className="intro-underline">strategy-led presentations</span><br className="desktop-break" />
                that people care about.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <Link
                  className="project-card"
                  key={project.id}
                  href={`/presentation/${project.slug}`}
                  aria-label={"Open project: " + project.name}
                >
                  <span className="project-visual">
                    <motion.span
                      className="project-image"
                      layoutId={`project-cover-${project.slug}`}
                    >
                      <Image
                        src={project.image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 760px) 100vw, 50vw"
                        className="project-image-backdrop"
                        priority={project.id < 3}
                      />
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 760px) 100vw, 50vw"
                        className="project-image-main"
                        priority={project.id < 3}
                      />
                    </motion.span>
                    <span className="image-hover-title" aria-hidden="true">{project.name}</span>
                  </span>
                  <span className="project-card-bottom">
                    <span className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

        </main>
        <Ready />
      </Curve>
    </>
  );
}
