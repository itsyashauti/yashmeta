"use client"
import Image from "next/image"
import { eyes } from "@/public"
import { useEffect, useRef, useState } from "react"
import { useMotionValue, useScroll, useTransform, motion } from "framer-motion"


export default function PlayVideo({ videosrc }: { videosrc: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const rotate = useMotionValue(0);

    const togglePlay = async () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            try {
                await video.play();
            } catch {
                setIsPlaying(false);
            }
        } else {
            video.pause();
        }
    };

    useEffect(() => {
        const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!hasHover || prefersReducedMotion) return;

        let frame = 0;
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 2;
        const updateRotation = () => {
            frame = 0;
            const deltaX = pointerX - window.innerWidth / 2;
            const deltaY = pointerY - window.innerHeight / 2;
            rotate.set(Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 180);
        };
        const followPointer = (event: PointerEvent) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (!frame) frame = requestAnimationFrame(updateRotation);
        };

        window.addEventListener("pointermove", followPointer, { passive: true });
        return () => {
            window.removeEventListener("pointermove", followPointer);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [rotate]);
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],

    });

    const mq = useTransform(scrollYProgress, [0, 1], [0, -400]);
    return (
        <div className="w-full relative overflow-hidden" ref={container}>
            <div className="w-full h-full"
                data-scroll
                data-scroll-speed="-.8"
                data-scroll-section
            >
                <video
                    className="block w-full h-auto"
                    loop
                    ref={videoRef}
                    src={videosrc}
                    preload="none"
                    playsInline
                    controls={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />

                {!isPlaying && <motion.div
                    className="w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
                    style={{ y: mq }}
                >
                    <button type="button" onClick={togglePlay} aria-label="Play showcase video" className="flex items-center gap-[clamp(14px,3vw,40px)] rounded-full">
                    {[0, 1].map((eye) => <span key={eye} className="w-[clamp(100px,15vw,214px)] aspect-square bg-white rounded-full flex items-center justify-center">
                        <motion.span className="relative block w-full h-full" style={{ rotate }}>
                            <Image
                                src={eyes}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
                                Play
                            </p>
                        </motion.span>
                    </span>)}
                    </button>

                </motion.div>}

                {isPlaying && <div className="w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <button type="button" onClick={togglePlay} className="pointer-events-auto text-white text-[18px] bg-black/75 px-4 leading-none font-normal py-2 font-NeueMontreal rounded-[20px]">
                        pause
                    </button>
                </div>}
            </div>

        </div>
    )

}
