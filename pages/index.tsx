"use client"
import { useEffect } from "react";
import Curve from "../components/Curve/Curve";
import Ready from "../components/Ready";
import Marquee from "../components/Marquee";
import Hero from "../container/home-page/Hero";
import About from "../container/home-page/About";
import VideoHome from "../container/home-page/VideoHome";
import Projects from "../container/home-page/Projects";
import Clients from "../container/home-page/Clients";

// import Head from "next/head";

export default function Home() {
  useEffect(() => {
    let isMounted = true;
    let scrollInstance: { destroy?: () => void } | undefined;
    void import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      if (isMounted) scrollInstance = new LocomotiveScroll();
    });

    return () => {
      isMounted = false;
      scrollInstance?.destroy?.();
    };
  }, []);
  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
        <Hero />
        <div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">

          <Marquee
            title="We are metaruleX"
            className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
          />

        </div>
        <About/>
        <VideoHome/>
        <Projects/>
        <Clients/>
        <Ready/>
      </Curve>
    </>
  );

}
