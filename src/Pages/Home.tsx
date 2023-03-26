import BrandLogo from "../components/BrandLogo";
import NavBar from "../components/Navbar";
import TextSectionWithButton from "../components/TextSectionWithButton";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="px-[20px] lg:px-[60px] max-w-[1440px] mx-auto"
    >
      <div className="lg:flex mt-[130px] lg:mt-[180px]">
        <article className="lg:max-w-[727px]">
          <header className="font-bold text-[36px] lg:text-[72px] lg:max-w-[727px]   text-center lg:text-left lg:leading-[88px]">
            <div className="overflow-hidden justify-center lg:justify-start flex gap-x-[13px] lg:gap-x-[24px]">
              {"Bringing your".split(" ").map((word: string, index: number) => (
                <motion.div
                  initial={{ y: 80 }}
                  animate={{
                    y: 0,
                    transition: {
                      duration: 0.54,
                      delay: 0.2 + (index + 1) * 0.1,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
            <div className="overflow-hidden justify-center lg:justify-start flex gap-x-[13px] lg:gap-x-[24px]">
              {"brand to life, one"
                .split(" ")
                .map((word: string, index: number) => (
                  <motion.div
                    initial={{ y: 80 }}
                    animate={{
                      y: 0,
                      transition: {
                        duration: 0.84,
                        delay: 0.2 + (index + 1) * 0.1,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
            </div>
            <div className="overflow-hidden justify-center lg:justify-start flex gap-x-[13px] lg:gap-x-[24px]">
              {"like at a time"
                .split(" ")
                .map((word: string, index: number) => (
                  <motion.div
                    initial={{ y: 80 }}
                    animate={{
                      y: 0,
                      transition: {
                        duration: 1.34,
                        delay: 0.2 + (index + 1) * 0.1,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
            </div>
          </header>
          <motion.p
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 1.1,
                duration: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
            className="font-semibold text-center text-[#808080] mt-[19px] lg:text-[24px] lg:text-left"
          >
            Let us help you unlock the full potential of your brand's social
            media presence and reach your target audience with ease.
          </motion.p>
        </article>
        <figure className="grid grid-cols-2 w-[280px] lg:w-[500px] mx-auto max-w-lg lg:relative lg:bottom-[30px]">
          <motion.img
            initial={{ y: -30, x: -30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] lg:w-[244px] relative lg:left-[20px] -z-10"
            src="/HomeHeroSection/instagram.png"
          />
          <motion.img
            initial={{ y: -30, x: 30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] lg:w-[244px] relative -z-10"
            src="/HomeHeroSection/facebook.png"
          />
          <motion.img
            initial={{ y: 30, x: -30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] relative bottom-[20px] -z-10 lg:w-[244px] lg:bottom-[40px] lg:left-[20px]"
            src="/HomeHeroSection/twitter.png"
          />
          <motion.img
            initial={{ y: 30, x: 30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] relative bottom-[20px] -z-10 lg:w-[244px] lg:bottom-[40px]"
            src="/HomeHeroSection/snapchat.png"
          />
        </figure>
      </div>

      <TextSectionWithButton
        paragraphs={[
          "We specialize in partnering with brands in the fashion, beauty, and lifestyle industries to elevate their digital presence and reach their target audience with a tailored strategy. ",
          "We understand the importance of cultivating an authentic brand image in today's fast-paced online landscape, which is why we work closely with our clients to create content that not only speaks to their audience but also represents their brand values.",
        ]}
        header={"Who Are We?"}
        buttonText={"ABOUT US"}
        buttonUrl="/about-us"
      />
      <TextSectionWithButton
        paragraphs={[
          "We are dedicated to adding value to every brand that we work with and we provide a large number of services to our clients.",
          "From Social media development to creating Instagram posting calendars, content, brand launch campaigns, handling event management for brands, creative direction for campaign shoots, and on-site content creation, we offer services that are guaranteed to make your brand to stand out.",
          "If you're ready to take your social media to the next level, we'd love to help.",
        ]}
        header={"What We Do?"}
        buttonText={"SERVICES & PRICING"}
        buttonUrl={"/services-and-pricing"}
      />
      <TextSectionWithButton
        paragraphs={[
          "At Zai Media Agency, we've had the privilege of working with a wide range of clients in the fashion, beauty, and lifestyle industries.",
          "Our approach to social media marketing is tailored to each client's unique needs and goals, resulting in a customized strategy that produces real results.",
        ]}
        header={"OUR CLIENTS"}
        buttonText={"OUR CLIENTS"}
        buttonUrl={"/our-clients"}
      >
        <figure className="grid grid-cols-2 max-w-[700px] mx-auto lg:max-w-none lg:grid-cols-3 w-full gap-[20px] lg:gap-[94px]">
          <BrandLogo
            image="/BrandLogos/grapespatternbank.jfif"
            brandName="Grapes Pattern Bank"
          />
          <BrandLogo
            image="/BrandLogos/shakkarshades.jpg"
            brandName="Shakkar Shades"
          />
          <div className="hidden lg:block">
            <BrandLogo image="/BrandLogos/amuj.png" brandName="Amuj" />
          </div>
        </figure>
      </TextSectionWithButton>
      <TextSectionWithButton
        header="Want to Know More?"
        paragraphs={[
          "If you have any questions or comments, please contact us via email, or send us a message using the contact form",
        ]}
        buttonText={"CONTACT US"}
        buttonUrl="/contact-us"
      />
    </motion.main>
  );
};

export default Home;
