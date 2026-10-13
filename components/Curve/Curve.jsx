"use client"
import {motion} from "framer-motion";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import {text, curve, translate} from "@/motion";

const routes= {
    "/": "Home",
    "/services": "Services",
    "/presentation":"Our Work",
    "/presentation/[slug]":"Our Work",
    "/ochi-team":"About us",
    "/contact":"Contact us",
    "/case":"Workiz Easy",

};

const anim = (variants) =>{
    return{
        variants,
        initial: "initial",
        animate:"enter",
        exit:"exit",
    };
};

/** @param {{ children?: import("react").ReactNode, backgroundColor?: string }} props */
export default function Curve({children, backgroundColor}) {
    const router = useRouter();
    const isProjectDetailRoute = router.route === "/presentation/[slug]";
    const [dimension, setDimension] = useState({
        width:null,
        height:null,
    });

    useEffect(()=> {
        function resize(){
            setDimension({
                width:window.innerWidth,
                height:window.innerHeight,
            })

        }
        resize();
        window.addEventListener("resize",resize);
        return ()=>{
            window.removeEventListener("resize", resize);
        };
    },[]);

    return (
        <div style={{backgroundColor}}>
            <div style={{ opacity: dimension.width == null ? 1 : 0}}
            className="fixed h w-full pointer-events-none left-0 top-0 z-50 bg-black"
            />

            {!isProjectDetailRoute && <motion.p
            className="absolute left-1/2 top-[40%] text-white text-[50px] z-[60] -translate-x-1/2 text-center"
    {...anim(text)}>
         {routes[router.route]}
            </motion.p>}
            {dimension.width != null && !isProjectDetailRoute && <SVG {...dimension}/>}
            {children}
        </div>
    );
}



const SVG = ({height, width}) =>{
    const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
    `;

    const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
    `;

    return (
        <motion.svg
        width={width}
        height={height + 600}
        viewBox={`0 0 ${width} ${height + 600}`}
        className="fixed w-full pointer-events-none left-0 top-0 z-50"
        {...anim(translate)}>
        <motion.path fill="black" {...anim(curve(initialPath,targetPath))}/>

        </motion.svg>
    )
}
