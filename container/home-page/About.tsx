"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LinkHover from "../../animation/LinkHover";
import { footerItems } from "@/constants";

const approachItems = [
    {
        title: "Vision",
        image: "/vvpic.png",
        description:
            "We create clear, purposeful digital experiences that help good ideas move forward.",
        alt: "Vision principle artwork",
    },
    {
        title: "Purpose",
        image: "/vvpic2.png",
        description:
            "We bring strategy, design, and technology together to solve practical business needs.",
        alt: "Purpose principle artwork",
    },
    {
        title: "Value",
        image: "/vvpic3.jpg",
        description:
            "Thoughtful craft, reliable technology, and collaboration shape every project we build.",
        alt: "Value principle artwork",
    },
];

export default function About() {
    const [activeApproach, setActiveApproach] = useState(0);

    const changeApproach = (direction: number) => {
        setActiveApproach((current) =>
            (current + direction + approachItems.length) % approachItems.length,
        );
    };

    const selectedApproach = approachItems[activeApproach];

    return (
        <section className="w-full bg-about padding-y rounded-t-[20px] z-10 relative mt-[-15px]">
            <div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
              <h2 className="sub-heading font-medium font-NeueMontreal text-secondary">
    metaruleX is a technology partner for growing
    <br className="sm:hidden xm:hidden" /> businesses that need to&nbsp;
    <span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
        build digital products,
    </span>
    &nbsp;scale their ideas and&nbsp;
    <span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
        create meaningful experiences,
    </span>
    &nbsp;and&nbsp;
    <span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
        hire great people
    </span>
</h2>

            </div>
            <div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
                <div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">

                    <div className="w-[50%] sm:w-full xm:w-full">
                        <h3 className="sub-paragraph font-medium text-secondary font-NeueMontreal">
                            What you can except
                        </h3>

                    </div>

                    <div className="w-[50%] sm:w-full xm:w-full">
                        <div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
                            <div className="w-[40%] sm:w-[60%] xm:w-[60%]">
                               <p className="sub-paragraph font-medium font-NeueMontreal text-secondary tracking-wide">
    We turn ideas into purposeful digital products through technology, design, and strategy. From websites and applications to custom software and scalable platforms, we build solutions that are made to grow with your business.
</p>

<p className="sub-paragraph font-medium font-NeueMontreal text-secondary pt-[30px] tracking-wide">
    Our approach combines thoughtful design with reliable technology to create digital experiences that feel simple, perform seamlessly, and deliver lasting value. We build, design, solve, and evolve with every project.
</p>
                            </div>
                            <div className="w-[60%] flex justify-end felx-col sm:w-full xm:w-full">

                                <h1 className="sub-paragraph font-medium font-NeueMontreal text-secondary pb-[20px]">
                                    S:
                                </h1>
                                <div className="flex flex-col">
                                    {footerItems.map((item) => (
                                        <LinkHover
                                            key={item.id}
                                            className="w-fit sub-paragraph font-medium capitlize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
                                            title={item.title}
                                            href={item.href} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative grid min-h-[440px] grid-cols-1 items-center gap-x-[5vw] padding-x py-[35px] sm:min-h-0 sm:gap-y-[38px] sm:py-[20px] xm:min-h-0 xm:gap-y-[32px] xm:py-[15px] lg:grid-cols-[0.95fr_1fr_1.2fr] xl:grid-cols-[0.95fr_1fr_1.2fr]">
                <nav aria-label="Our approach" className="flex flex-col gap-[18px] pt-[55px] sm:pt-[75px] xm:pt-[70px]">
                    {approachItems.map((item, index) => {
                        const isActive = index === activeApproach;

                        return (
                            <button
                                key={item.title}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveApproach(index)}
                                className={`w-fit text-left font-NeueMontreal text-[clamp(38px,5.4vw,82px)] leading-[0.98] tracking-[-0.055em] transition-opacity duration-300 ${isActive ? "font-medium text-secondary opacity-100" : "text-secondary opacity-35 hover:opacity-70"}`}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </nav>

                <div className="flex justify-center sm:justify-start xm:justify-start">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={selectedApproach.image}
                            initial={{ opacity: 0, scale: 0.88, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: -10 }}
                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-square w-[clamp(220px,25vw,370px)] overflow-hidden rounded-full sm:w-[min(68vw,330px)] xm:w-[min(72vw,290px)]"
                        >
                            <Image
                                src={selectedApproach.image}
                                alt={selectedApproach.alt}
                                fill
                                sizes="(max-width: 768px) 72vw, 25vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div aria-live="polite" className="flex min-h-[190px] items-center pr-[5vw] sm:min-h-0 sm:pr-0 xm:min-h-0 xm:pr-0">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.p
                            key={selectedApproach.title}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="max-w-[560px] font-NeueMontreal text-[clamp(19px,1.65vw,27px)] leading-[1.45] text-secondary"
                        >
                            {selectedApproach.description}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <div className="absolute right-[50px] top-[5px] flex gap-[14px] sm:right-[20px] sm:top-[70px] xm:right-[20px] xm:top-[70px]">
                    <button
                        type="button"
                        aria-label="Previous approach"
                        onClick={() => changeApproach(-1)}
                        className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-secondary text-secondary transition-colors duration-300 hover:bg-secondary hover:text-[#cdea68] sm:h-[48px] sm:w-[48px] xm:h-[44px] xm:w-[44px]"
                    >
                        <svg aria-hidden="true" viewBox="0 0 32 20" className="h-[19px] w-[30px]" fill="none">
                            <path d="M31 10H2M2 10l9-9M2 10l9 9" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next approach"
                        onClick={() => changeApproach(1)}
                        className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-secondary text-secondary transition-colors duration-300 hover:bg-secondary hover:text-[#cdea68] sm:h-[48px] sm:w-[48px] xm:h-[44px] xm:w-[44px]"
                    >
                        <svg aria-hidden="true" viewBox="0 0 32 20" className="h-[19px] w-[30px]" fill="none">
                            <path d="M1 10h29m0 0-9-9m9 9-9 9" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                    </button>
                </div>
            </div>

        </section>
    )
}
