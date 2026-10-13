import Link from "next/link"; 
import Image from "next/image"; 
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navVariants } from "@/motion"; 
import TextHover from "../animation/TextHover";
import { navbarItems } from "@/constants";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
 
export default function Navbar(){ 
    const [hidden, setHidden] = useState(false); 
    const {scrollY} = useScroll(); 
    useMotionValueEvent(scrollY, "change", (latest) => { 
        const previous = scrollY.getPrevious(); 
        if(previous && latest > previous){ 
            setHidden(true); 
        }else{ 
            setHidden(false);         
        } 
    }); 
    return( 
        <> 
            <motion.nav 
                variants={navVariants} 
                className="site-desktop-nav hidden md:flex w-full h-[8vh] min-h-[56px] padding-x xl:px-[64px] fixed top-0 left-0 z-50 backdrop-blur-[7px] items-center justify-between"
                animate={hidden ? "hidden" : "visible"}> 
                <div className="w-[50%]"> 
                    <Link href="/"> 
                        <Image src="/metarulex-logo.png" alt="metaruleX" width={90} height={45} className="h-[45px] w-[90px] object-contain" />
                    </Link> 
                </div> 
                <div className="flex gap-x-[20px] w-[50%]"> 
                    {navbarItems.map((item) => ( 
                        <Link key={item.id} className={`w-fit paragraph font-medium font-NeueMontreal text-secondary capitalize flex flex-col hover ${
                            item.id === 5 && "ml-auto"
                        }`} href={item.href}> 
                            <TextHover title1={item.title} title2={item.title} /> 
                        </Link> 
                    ))} 
                </div> 
            </motion.nav> 
            <MobileNav />
        </> 
    ); 
}
