"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ClientReview = {
  id: number;
  website: string;
  href: string;
  name: string;
  image: string;
  review: string;
  services: string[];
};

const clientReviews: ClientReview[] = [
  
{
  id: 1,
  website: "Satya Film Company",
  href: "#",
  name: "Lokesh Vaghela",
  image: "/client01.png",
  review:
    "metaruleX understood our vision for Satya Film Company and created a professional portfolio website that showcases our film production work. The website presents our projects in a visually engaging way, reflects our brand identity, and provides visitors with a smooth browsing experience. The team helped transform our ideas into a polished digital presence for our company. 5/5",
  services: ["Website Development", "Portfolio Design"],
},

{
  id: 2,
  website: "Data Recovery",
  href: "#",
  name: "Satyam Sadaphal",
  image: "/client02.png",
  review:
    "I had lost important data and was concerned about whether it could be recovered. The metaruleX team approached the situation with patience and professionalism, carefully working to recover the lost data. Their support and technical expertise made the process reassuring, and I appreciated their efforts in helping me retrieve important files and information.",
  services: [
    "Data Recovery",
    "Data Restoration",
    "Technical Support",
  ],
},

{
  id: 3,
  website: "POS App Design",
  href: "#",
  name: "Larnelle Letts",
  image: "/client03.png",
  review:
    "metaruleX helped us transform our POS app requirements into a clean, intuitive, and user-friendly design. The team focused on improving the overall user experience, simplifying navigation, and making essential features easier to access. Their attention to detail and understanding of our needs helped shape a more professional and seamless interface for our point-of-sale application.",
  services: [
    "POS App UI/UX Design",
    "User Experience Design",
    "App Interface Design",
    "User Flow & Navigation",
  ],
},

{
  id: 4,
  website: "VK Bags",
  href: "#",
  name: "Vaibhav Kale",
  image: "/client04.png",
  review:
    "metaruleX helped us build a professional e-commerce website for VK Bags that showcases our bag collection and makes it easier for customers across India to explore our products. The team focused on creating a smooth shopping experience, an organized product catalogue, and a user-friendly interface. The website gives our manufacturing business a stronger digital presence and supports our goal of reaching customers nationwide.",
  services: [
    "E-commerce Website Development",
    "UI/UX Design",
    "Product Catalogue",
    "Online Shopping Experience",
  ],
},

{
  id: 5,
  website: "Hospital Project",
  href: "#",
  name: "Nishant Rajput",
  image: "/client05.png",
  review:
    "metaruleX provided valuable support in developing our hospital project, helping turn the initial concept into a more structured and practical digital solution. The team focused on understanding the project requirements, improving the overall user experience, and creating a professional design tailored to the needs of a healthcare environment. Their technical guidance and attention to detail helped us move the project forward with greater clarity.",
  services: [
    "Hospital Project Support",
    "UI/UX Design",
    "Project Development",
    "Technical Consultation",
  ],
},
{
  id: 6,
  website: "Krushna Roadlines",
  href: "#",
  name: "Krushna Kuttarwade",
  image: "/client06.png",
  review:
    "metaruleX helped us build a professional website for Krushna Roadlines that showcases our transportation services and logistics capabilities across India. The website highlights our diverse fleet of trucks, trailers, and transport vehicles while presenting our services in a clear and organized way. The team focused on creating a user-friendly experience that reflects our business operations and helps us establish a stronger digital presence in the transportation industry.",
  services: [
    "Transport Website Development",
    "UI/UX Design",
    "Fleet & Vehicle Showcase",
    "Logistics Service Presentation",
  ],
},
{
  id: 7,
  website: "Photography Studio",
  href: "#",
  name: "Hemant Sharma",
  image: "/client07.jpeg",
  review:
    "metaruleX helped us create a professional portfolio website that showcases our photography studio's work in a visually engaging way. The team focused on presenting our photographs beautifully, maintaining a clean design, and creating a smooth browsing experience for visitors. The final website gives our studio a stronger online presence and helps us showcase our creative work and photography services more effectively.",
  services: [
    "Portfolio Website Development",
    "UI/UX Design",
    "Photography Gallery",
    "Creative Portfolio Design",
  ],
},

{
  id: 8,
  website: "Power BI Dashboard",
  href: "#",
  name: "Pratik Ghogare",
  image: "/client08.png",
  review:
    "metaruleX helped us improve our Power BI dashboard by refining data structures, organizing information, and modifying datasets to support clearer reporting and analysis. The team focused on presenting data in a more structured and meaningful way, making it easier to understand key insights and work with the information effectively. Their technical support and attention to detail helped us improve the overall data visualization and reporting experience.",
  services: [
    "Power BI Dashboard Development",
    "Data Cleaning & Transformation",
    "Data Management",
    "Data Visualization & Reporting",
  ],
},
  
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ClientReviews() {
  const [activeReview, setActiveReview] = useState<number | null>(clientReviews[0].id);

  return (
    <section className="client-reviews-section" aria-labelledby="client-reviews-title">
      <div className="client-reviews-heading">
        <h2 id="client-reviews-title">Clients’ reviews</h2>
      </div>

      <div className="client-reviews-list">
        {clientReviews.map((item) => {
          const isOpen = activeReview === item.id;

          return (
            <article className="client-review-item" key={item.id}>
              <div className="client-review-row">
                <div className="client-review-company">
                  <a className="client-review-website" href={item.href}>
                    {item.website}
                  </a>
                  <h3 className={`client-review-services-title${isOpen ? " is-visible" : ""}`}>
                    Services:
                  </h3>
                </div>

                <div className="client-review-person">
                  <h3 className="client-review-name">{item.name}</h3>
                  <button
                    aria-controls={`client-review-detail-${item.id}`}
                    aria-expanded={isOpen}
                    className={`client-review-read${isOpen ? " is-open" : ""}`}
                    onClick={() => setActiveReview(isOpen ? null : item.id)}
                    type="button"
                  >
                    Read
                  </button>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    animate={{ opacity: 1, height: "auto" }}
                    className="client-review-detail"
                    exit={{ opacity: 0, height: 0 }}
                    initial={{ opacity: 0, height: 0 }}
                    id={`client-review-detail-${item.id}`}
                    key={`review-detail-${item.id}`}
                    transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.85 }}
                  >
                    <div className="client-review-spacer" aria-hidden="true" />

                    <div className="client-review-services">
                      {item.services.map((service) => (
                        <Link className="client-review-service" href="/#services" key={service}>
                          <span>{service}</span>
                          <span className="client-review-service-arrow">
                            <ArrowUpRight />
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="client-review-story">
                      <Image
                        alt={item.name}
                        className="client-review-avatar"
                        height={130}
                        sizes="130px"
                        src={item.image}
                        width={130}
                      />
                      <p>{item.review}</p>
                    </div>

                    <div aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
