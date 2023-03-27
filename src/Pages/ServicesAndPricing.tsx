import PackageCard from "../components/PackageCard";
import Service from "../components/Service";
import TextSectionWithButton from "../components/TextSectionWithButton";
import { motion } from "framer-motion";

const ServicesAndPricing = () => {
  const services = [
    { serviceText: "Creative Direction", subtext: "" },
    { serviceText: "Content Creation", subtext: "(reels, campaigns)" },
    { serviceText: "Campaign Shoot", subtext: "(Depends on the project)" },
    { serviceText: "Product Photography", subtext: "(Pictures or Reels)" },
    { serviceText: "Email Marketing", subtext: "" },
    {
      serviceText: "Onsite Content Creation",
      subtext: "(Depends on Location)",
    },
    { serviceText: "Social Media Strategy & Consultation", subtext: "" },
    { serviceText: "Monthly Content Creation Calendar", subtext: "" },
  ];
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className=""
    >
      <div className=" max-w-[1440px] mx-auto">
        <header className="px-[20px] lg:px-[60px] mt-[130px] lg:mt-[180px] text-[32px] lg:text-[48px] font-bold mb-[30px] text-center">
          Our Services
        </header>
        <article className="px-[20px] lg:px-[60px] font-semibold lg:text-[19.5px] text-[grey] text-center flex flex-col gap-[24px]">
          <p>
            Grow your online presence with our expert social media strategy,
            content creation, management, and advertising services
          </p>
          <p>
            From Social media development to creating Instagram posting
            calendars, content, brand launch campaigns, handling event
            management for brands, creative direction for campaign shoots, and
            on-site content creation, we offer services that are guaranteed to
            make your brand to stand out.
          </p>
        </article>
      </div>
      <section className="mt-[78px]">
        {services.map((service, index: number) => (
          <Service
            key={index}
            index={index}
            text={service.serviceText}
            subtext={service.subtext}
            hasBottomBorder={services.length - 1 == index}
          />
        ))}
      </section>
      <section className="mt-[60px]">
        <header className="px-[20px] lg:px-[60px] mt-[130px] lg:mt-[180px] text-[32px] lg:text-[48px] font-bold mb-[30px] text-center">
          Subscription Packages
        </header>
        <div className="lg:px-[60px] px-[40px] grid grid-cols-1 gap-[40px] mb-[94px] max-w-[450px] mx-auto lg:grid-cols-3 lg:max-w-[1440px]">
          <PackageCard
            packageTitle="Bronze"
            features={[
              "Content creation (reels)",
              "User-generated content",
              "A monthly content calendar on Instagram",
              "one month social media report",
            ]}
            price="125,000"
          />
          <PackageCard
            packageTitle="Silver"
            features={[
              "Content creation (reels)",
              "User-generated content",
              "A monthly content calendar on Instagram",
              "one month social media report",
              "On-site Content Creation",
            ]}
            price="190,000"
          />
          <PackageCard
            packageTitle="Gold"
            features={[
              "Content creation (reels)",
              "User-generated content",
              "A monthly content calendar on Instagram",
              "one month social media report",
              "On-site Content Creation",
              "Monthly Email Marketing",
              "Free Social Media Consultation & Strategy",
            ]}
            price="215,000"
          />
        </div>
      </section>
      <section className="px-[20px] lg:px-[60px]">
        <TextSectionWithButton
          header="Want to Know More?"
          paragraphs={[
            "If you have any questions or comments, please contact us via email, or send us a message using the contact form",
          ]}
          buttonText={"CONTACT US"}
          buttonUrl="/contact-us"
        />
      </section>
    </motion.main>
  );
};

export default ServicesAndPricing;
