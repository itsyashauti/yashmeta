import Curve from "../components/Curve/Curve";
import Rating from "../components/Rating";
import Ready from "../components/Ready";
import AboutPage from "../container/about-page/AboutPage";
import Head from "next/head";

export default function OchiTeamPage() {
  return (
    <>
      <Head>
        <title>About us | metaruleX</title>
        <meta name="description" content="Meet the creative team and values behind metaruleX." />
      </Head>
      <Curve backgroundColor="#f1f1f1">
        <AboutPage />
        <section className="padding-x pt-[80px] pb-[160px]">
          <Rating />
        </section>
        <Ready />
      </Curve>
    </>
  );
}
