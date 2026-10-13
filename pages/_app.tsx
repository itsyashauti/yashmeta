import "../styles/globals.css";
import "../styles/about-page.css";
import "../styles/services-page.css";
import "../styles/our-work-page.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence, LayoutGroup, MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
  router,
}: AppProps) {
  const isWorkProjectRoute = router.route === "/presentation" || router.route === "/presentation/[slug]";

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />

      <LayoutGroup id="site-project-transition">
        {isWorkProjectRoute ? (
          <AnimatePresence mode="wait" initial={false}>
            <Component key="our-work-route" {...pageProps} />
          </AnimatePresence>
        ) : (
          <Component key={router.asPath} {...pageProps} />
        )}
      </LayoutGroup>
      <Footer/>
    </MotionConfig>
  );
}
