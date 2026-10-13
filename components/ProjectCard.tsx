"use client"
import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import {useState} from "react";
import {motion} from "framer-motion"

type ProjectCardItem = {
    id: number;
    title: string;
    href: string;
    src: ImageProps["src"];
};

export default function ProjectCard({item}: {item: ProjectCardItem}){
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <div className="relative w-full group">
                <Link
                href={item.href}
                className="relative block aspect-[1.24] w-full overflow-hidden rounded-[10px] border border-white/70 bg-[#e7e7e4] shadow-[0_15px_38px_-30px_rgba(24,26,24,0.56)] transition duration-[1s] ease-[.4,0,.2,1] hover:scale-[0.98]"
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}
                onFocus={()=>setHovered(true)}
                onBlur={()=>setHovered(false)}
                >
                    <Image
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 640px) 100vw, 49vw"
                    className="scale-110 object-cover blur-2xl opacity-45"
                    />
                    <Image
                    src={item.src}
                    alt={`${item.title} featured project cover`}
                    fill
                    sizes="(max-width: 640px) 100vw, 49vw"
                    className="rounded-[10px] object-contain"
                    />

               
                </Link>
                <div aria-hidden="true" style={{left:item.id % 2 === 0 ? "-15%" : "90%"}}
                className="absolute w-fit flex top-[50%] sm:hidden xm:hidden -translate-x-[30%] -translate-y-1/2 overflow-hidden z-10 pointer-events-none transition-opacity duration-500 ease-[.4,0,.2,1] group-hover:opacity-100 group-focus-within:opacity-100 opacity-0">
  {item.title.split('').map((letter:string, i:number) => (
    <motion.span
      initial={{y:"100%"}}
      animate={hovered ? {y:0} :{y:"100%"}}
      transition={{ delay:i * 0.02, duration:0.5, ease:[0.4,0,0.2,1] }}
      className="text-[clamp(3rem,7vw,10.3125rem)] leading-none inline-block uppercase font-FoundersGrotesk text-about font-bold text-center"
      key={i}
    >
      {letter === " " ? "\u00a0" : letter}
    </motion.span>
  ))}
                </div>

            </div>
        </div>
    )
}
