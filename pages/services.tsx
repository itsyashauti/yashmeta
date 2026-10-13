import Head from "next/head";
import Curve from "../components/Curve/Curve";
import ProcessAccordion from "../components/services/ProcessAccordion";
import CapabilitiesSection from "../components/services/CapabilitiesSection";
import ClientReviews from "../components/services/ClientReviews";
import StatsSection from "../components/services/StatsSection";
import KeyAdvantages from "../components/services/KeyAdvantages";
import Ready from "../components/Ready";

const clientTypes = [
 
{
  title: "Innovation & AI-driven technology",
  description:
    "AI pioneers, machine learning innovators, and forward-thinking startups — businesses building intelligent solutions that shape the future of technology.",
},
{
  title: "Digital transformation & growing businesses",
  description:
    "From ambitious startups to evolving enterprises — brands transforming their operations through modern websites, mobile apps, custom software, and creative digital experiences.",
},
{
  title: "Established companies & enterprises",
  description:
    "Growing businesses, established organizations, SaaS platforms, and ambitious global brands ready to scale their digital presence, streamline operations, and embrace their next chapter.",
},

];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | metaruleX</title>
        <meta
          name="description"
          content="Discover the services, process, and capabilities behind metaruleX."
        />
      </Head>

      <Curve backgroundColor="#f1f1f1">
        <main id="services" className="services-page">
          <section className="services-title-section" aria-labelledby="services-title">
            <h1 id="services-title" className="services-title">Services</h1>
          </section>

          

          <section className="services-intro" aria-label="Our impact">
            <p>
  We build digital solutions that turn ideas into reality — from websites
  <br className="services-intro-break" />
  and applications to custom software, design, and animation.
  <br className="services-intro-break" />
  Built to help businesses grow, evolve, and stand out.
</p>
          </section>

          <section className="client-types" aria-labelledby="client-types-title">
            <h2 id="client-types-title" className="client-types-heading">
              We’re best positioned for 3 types of clients:
            </h2>
            {clientTypes.map((client) => (
              <article className="client-type" key={client.title}>
                <h3>{client.title}</h3>
                <p>{client.description}</p>
              </article>
            ))}
          </section>

          <section className="holistic-process" aria-labelledby="process-title">
            <div className="process-heading">
              <h2 id="process-title">Holistic process</h2>
            </div>
            <ProcessAccordion />
          </section>



          <CapabilitiesSection />
          <ClientReviews />
          <StatsSection />
          <KeyAdvantages />
        </main>
        <Ready />
      </Curve>
    </>
  );
}

