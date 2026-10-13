"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {  ochiside } from "@/public";

export default function Hero() {
    return (
        <section className="home-hero w-full min-h-screen min-h-[100svh] flex flex-col sm:mb-[-10px] xm:mb-[-10px]"
            data-scroll
            data-scroll-speed="-.3"
        >
            <div className="w-full flex-1 min-h-0 flex flex-col justify-center pt-[5.5vh]">

                <div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px] xl:pl-[64px]">
                    <div>
                        <h1 className="heading home-hero-title tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                            WE TURN <br />
                            <div className="flex items-center gap-[15px]">
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "auto" }}
                                    transition={{
                                        ease: [0.86, 0, 0.07, 0.995],
                                        duration: 1,
                                        delay: 1.5,
                                    }}
                                    className="home-hero-image-slot inline-block leading-[130px]">
                                    <Image
                                        width={120}
                                        height={50}
                                        src={ochiside}
                                        alt=""
                                        className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] xl:w-[173px] xl:h-[112px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px] " />
                                </motion.span>

                                <h1 className="heading home-hero-thought tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                                    THOUGHTS
                                </h1>
                            </div>
                            INTO THINGS
                        </h1>
                    </div>

                    <div>
                        {/* <Image
                       
                            width={60}  
                            height={60}
                            // src={awwwards}
                            alt=""
                            className="sm:hidden xm:hidden " /> */}
                    </div>

                </div>
            </div>

                <div className="w-full flex flex-col h-[22vh] min-h-[176px] shrink-0 border-t border-[#21212155] py-[20px] sm:h-auto sm:min-h-[170px] xm:h-auto xm:min-h-[170px] sm:mb-[48px] xm:mb-[32px] gap-[30px] ">

                    <div className="flex justify-center items-center padding-x xl:px-[64px] gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
                        <div className="w-[50%] xm:w-full sm:w-full">
                            <p className="paragraph font-NeueMontreal text-secondary">
                                Less noise. More intelligence.
                            </p>

                        </div>
                        <div className="w-[50%] xm:w-full sm:w-full flex justify-between  xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">

                            <div>
                                <p className="paragraph font-NeueMontreal text-secondary">
                                For those building what’s next.
                                </p>
                            </div>
                            <div className="flex items-center gap-[5px] group">
                                <div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondary py-[3px] px-[12px] cursor-pointer">
                                    <Link
                                        className="paragraph font-NeueMontreal text-secondary uppercase  group-hover:text-background transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
                                        href={"/contact"}>
                                        start the project
                                    </Link>
                                </div>

                                <div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px] group-hover:bg-secondary transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">

                                    <p className="font-normal text-secondary group-hover:text-background">
                                        <ArrowUpRight
                                            size={24}
                                            strokeWidth={1.25}
                                        />
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
                        <motion.p
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: "100%", opacity: 0.5 }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: [0.3, 0.86, 0.36, 0.95],
                            }}
                            className="paragraph opacity-50 font-NeueMontreal text-secondary">
                            scroll down

                        </motion.p>
                    </div>

                </div>

        </section >
    )
}
