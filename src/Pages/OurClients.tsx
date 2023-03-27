import ClientLogo from "../components/ClientLogo";
import TextSectionWithButton from "../components/TextSectionWithButton";
import { motion } from "framer-motion";

const OurClients = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="px-[20px] lg:px-[60px] max-w-[1440px] mx-auto"
    >
      <header className="mt-[130px] lg:mt-[180px] text-[32px] lg:text-[48px] font-bold mb-[30px] text-center">
        Our Clients
      </header>
      <article className="font-semibold lg:text-[19.5px] text-[grey] text-center flex flex-col gap-[24px]">
        <p>
          At Zai Media Agency, we have had the pleasure of working with some of
          the most influential brands in the fashion, beauty, and lifestyle
          industries. Our goal is to help our clients stand out in an
          increasingly crowded digital landscape, and we are proud to have
          played a part in their success.
        </p>
        <p>Here are just a few of the clients we have worked with</p>
      </article>
      <section className="w-full grid grid-cols-1 max-w-[400px] lg:max-w-none mx-auto gap-[50px] lg:grid-cols-3 lg:gap-[30px] xl:gap-[50px] mt-[80px]">
        <ClientLogo
          imagePath="/BrandLogos/grapespatternbank.jfif"
          brandName="Grapes Pattern Bank"
        />
        <ClientLogo
          imagePath="/BrandLogos/shakkarshades.jpg"
          brandName="Shakkar Shades"
        />
        <ClientLogo imagePath="/BrandLogos/amuj.jpg" brandName="Amuj" />
      </section>
      <TextSectionWithButton
        header="Interested In Working With Us?"
        paragraphs={[
          "Contact us today to learn more about how we can help your brand achieve its social media goals.",
        ]}
        buttonText={"CONTACT US"}
        buttonUrl="/contact-us"
      />
    </motion.main>
  );
};

export default OurClients;
