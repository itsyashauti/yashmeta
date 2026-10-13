import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { motion, type Variants } from "framer-motion";
import Curve from "../../components/Curve/Curve";
import Ready from "../../components/Ready";
import { projects, type WorkProject } from "../../constants/projects";

type ProjectPageProps = { project: WorkProject };

const aboutEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const aboutCardVariants: Variants = {
  hidden: { y: "112%", scale: 0.94, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      y: { duration: 0.82, ease: aboutEase },
      scale: { duration: 0.82, ease: aboutEase },
      opacity: { duration: 0.62, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
};

const copySequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.12, staggerChildren: 0.1 } },
};

const textSlideVariants: Variants = {
  hidden: { y: "112%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.82, ease: aboutEase },
  },
};

const textFadeVariants: Variants = {
  hidden: { y: 22, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.62, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectPage({ project }: ProjectPageProps) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const temporaryPosters = Array.from({ length: Math.min(5, projects.length - 1) }, (_, index) =>
    projects[(currentIndex + index + 1) % projects.length],
  );
  const galleryImages = project.gallery
    ? project.gallery.map((image, index) => ({
        key: `${project.slug}-${index}`,
        src: image,
        alt: `${project.name} project image ${index + 1}`,
        aspectRatio: project.galleryAspectRatios?.[index] ?? project.galleryAspectRatio ?? "16 / 9",
      }))
    : temporaryPosters.map((poster, index) => ({
        key: `${poster.slug}-${index}`,
        src: poster.image,
        alt: `${poster.name} temporary portfolio poster`,
        aspectRatio: project.galleryAspectRatios?.[index] ?? project.galleryAspectRatio ?? "16 / 9",
      }));

  return (
    <>
      <Head>
        <title>{project.name} | metaruleX</title>
        <meta name="description" content={project.summary} />
      </Head>
      <Curve backgroundColor="#f1f1f1">
        <main className="our-work-page project-case-page">
          <section className="case-detail-intro" aria-labelledby="case-detail-title">
            <motion.div className="case-detail-copy" initial="hidden" animate="visible" variants={copySequence}>
              <motion.p className="case-detail-kicker" variants={textFadeVariants}>{project.category}</motion.p>
              <div className="case-detail-title-mask">
                <motion.h1 id="case-detail-title" variants={textSlideVariants}>
                  {project.name}
                </motion.h1>
              </div>
              <motion.h2 variants={textFadeVariants}>Project overview</motion.h2>
              <motion.p className="case-detail-summary" variants={textFadeVariants}>{project.summary}</motion.p>
              <motion.div className="case-detail-tags" aria-label="Project services" variants={textFadeVariants}>
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </motion.div>
            </motion.div>

            <div
              className="case-detail-poster-window"
              style={{ aspectRatio: project.posterAspectRatio ?? 1.6 }}
            >
              <motion.div
                className="case-detail-poster"
                layoutId={`project-cover-${project.slug}`}
                initial="hidden"
                animate="visible"
                variants={aboutCardVariants}
                transition={{ duration: 0.82, ease: aboutEase }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 58vw"
                  style={{ objectFit: project.imageFit ?? "contain" }}
                />
              </motion.div>
            </div>
          </section>

          <section className="case-detail-gallery" aria-label={`${project.name} project media`}>
            {galleryImages.map((image) => (
              <figure
                className="case-detail-gallery-image"
                key={image.key}
                style={{ aspectRatio: image.aspectRatio }}
              >
                {image.src.endsWith(".mp4") ? (
                  <video
                    className="case-detail-gallery-video"
                    src={image.src}
                    aria-label={`${project.name} project video`}
                    controls
                    playsInline
                    preload="none"
                  />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 760px) 94vw, 88vw"
                    style={{ objectFit: project.imageFit ?? "contain" }}
                  />
                )}
              </figure>
            ))}
          </section>

          <div className="case-detail-back-wrap">
            <Link className="case-detail-back-link" href="/presentation">
              <span>Back to Our Work</span>
              <span className="case-detail-back-arrow" aria-hidden="true">←</span>
            </Link>
          </div>
        </main>
        <Ready />
      </Curve>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { notFound: true };
  return { props: { project } };
};
