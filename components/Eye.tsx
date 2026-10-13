"use client";
import Image from "next/image";
import { eyes } from "@/public";
import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Eyes({ className }: { className: string }) {
  const rotate = useMotionValue(0);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    const updateRotation = () => {
      frame = 0;
      rotate.set(Math.atan2(pointerY - window.innerHeight / 2, pointerX - window.innerWidth / 2) * (180 / Math.PI) - 280);
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
  return (
    <div className="w-full gap-[30px] flex items-center justify-center">
      <div
        className={`bg-white border-[2px] border-[#21212188] rounded-full items-center justify-center ${className}`}
      >
        <motion.div className="w-full h-full" style={{ rotate }}>
          <Image src={eyes} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div
        className={`bg-white border-[2px] border-[#21212188] rounded-full items-center justify-center ${className}`}
      >
        <motion.div className="w-full h-full" style={{ rotate }}>
          <Image src={eyes} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
