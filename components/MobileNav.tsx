'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {IoMdClose} from "react-icons/io";
import {footernavbarItems} from "@/constants";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {AnimatePresence, motion} from "framer-motion";

export default function MobileNav() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
        <div className="site-mobile-nav flex md:hidden w-full h-[8vh] min-h-[56px] px-5 fixed top-0 left-0 z-50 items-center justify-between">
            <Link href={"/"}>
                <Image src="/metarulex-logo.png" alt="metaruleX" width={90} height={45} className="h-[45px] w-[90px] object-contain" />
            </Link>
            <button type="button" onClick={() => setToggle(true)} className="grid h-11 w-11 place-items-center text-black" aria-label="Open navigation menu">
                <HiOutlineMenuAlt4 className="text-3xl" aria-hidden="true" />
            </button>
        </div> 
        <AnimatePresence mode="wait">
            {toggle && (
                <motion.div
                    initial={{y: "-100%"}}
                    animate={{y: 0}}
                    exit={{y: "-100%"}}
                    transition={{duration: 0.38, ease: [0.3, 0, 0.36, 0.95]}}
                    className = "fixed inset-0 z-50 flex min-h-[100svh] w-full flex-col bg-secondary pb-[env(safe-area-inset-bottom)]">
                    <div className="flex h-[8vh] min-h-[56px] w-full shrink-0 items-center justify-between border-b border-[#f1f1f155] px-5">
                        <Link href={"/"}>
                            <Image src="/metarulex-logo-light.png" alt="metaruleX" width={145} height={52} className="h-auto w-[118px]" />
                        </Link>
                        <button type="button" onClick={() => setToggle(false)} className="grid h-11 w-11 place-items-center text-background" aria-label="Close navigation menu">
                            <IoMdClose className="text-3xl" aria-hidden="true" />
                        </button>
                    </div>  
                    <ul className="flex min-h-0 w-full flex-1 flex-col justify-center gap-[clamp(4px,1.4vh,10px)] overflow-y-auto px-5 py-5 text-left">
                        {footernavbarItems.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} onClick={() => setToggle(false)} className="block w-fit max-w-full text-[clamp(2rem,9.2vw,3.4rem)] leading-[1.08] font-NeueMontreal font-bold uppercase tracking-[-.035em] text-background">
                                    {item.title}
                                </Link>
                            </li>
                        ))}  
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}
