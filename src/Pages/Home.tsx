import BrandLogo from "../components/BrandLogo";
import NavBar from "../components/Navbar";
import TextSectionWithButton from "../components/TextSectionWithButton";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import WhatWeDoSectionItem from "../components/WhatWeDoSectionItem";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="px-[20px] lg:px-[60px] max-w-[1440px] mx-auto"
    >
      <div className="xl:flex lg:items-center  mt-[130px] lg:mt-[180px]">
        <article className="xl:max-w-[727px] relative lg:bottom-[30px]">
          <header className="text-[37px] md:text-[46px] lg:text-[50px] xl:text-[65px] max-w-[360px] md:max-w-[400px] lg:max-w-[727px] mx-auto xl:max-w-[727px]   text-center lg:text-left lg:leading-[88px] ralewayFont font-normal flex flex-col">
            <div className="overflow-hidden justify-center xl:justify-start flex gap-x-[6px] lg:gap-x-[24px] xl:gap-x-8 flex-wrap mb-[30px]">
              {"WE WORK TO serve FASHION, BEAUTY, AND LIFESTYLE BRANDS TO BUILD THE SOCIAL MEDIA OF THEIR dreams"
                .split(" ")
                .map((word: string, index: number) => (
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 80 }}
                      className={`leading-[43px] md:leading-[50px] lg:leading-[50px] xl:leading-[65px] ralewayFont ${
                        word == "serve" || word == "dreams"
                          ? "millionaireFont italic text-[43px] md:text-[50px] lg:text-[54px] xl:text-[72px]"
                          : ""
                      }`}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.58,
                          delay: 0.2 + (index + 1) * 0.08,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        },
                      }}
                    >
                      {word}
                    </motion.div>
                  </div>
                ))}
            </div>
          </header>
          {/* <motion.p
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
            className="font-semibold text-center text-[#808080] mt-[19px] md:text-[20px] lg:text-[24px] xl:text-left"
          >
            Let us help you unlock the full potential of your brand's social
            media presence and reach your target audience with ease.
          </motion.p> */}
        </article>
        <figure className="grid grid-cols-2 w-[280px] md:w-[400px] lg:w-[500px] mx-auto max-w-lg lg:relative lg:mt-[80px] xl:mt-0 lg:bottom-[30px]">
          <motion.img
            initial={{ y: -30, x: -30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1.1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] md:min-w-[200px] lg:w-[244px] relative lg:left-[20px] -z-10"
            src="/HomeHeroSection/instagram.png"
          />
          <motion.img
            initial={{ y: -30, x: 30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1.1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] md:min-w-[200px] lg:w-[244px] relative -z-10"
            src="/HomeHeroSection/facebook.png"
          />
          <motion.img
            initial={{ y: 30, x: -30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1.1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] md:min-w-[200px] relative bottom-[20px] -z-10 lg:w-[244px] lg:bottom-[40px] lg:left-[20px]"
            src="/HomeHeroSection/twitter.png"
          />
          <motion.img
            initial={{ y: 30, x: 30, scale: 0.6, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              scale: 1.1,
              opacity: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
                delay: 0.5,
              },
            }}
            className="min-w-[140px] min-h-[140px] md:min-w-[200px] relative bottom-[20px] -z-10 lg:w-[244px] lg:bottom-[40px]"
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
        header={"What We Do?"}
        buttonText={"SERVICES & PRICING"}
        buttonUrl={"/services-and-pricing"}
      >
        <div className="flex flex-col gap-[10px] lg:flex-row lg:mt-[50px]">
          <WhatWeDoSectionItem
            imageWidth={30}
            text="How do you increase engagement?! Through quality & captivating videos in form of Instagram reels and TikTok"
            image="/WhatWeDoSection/instagramIcon.svg"
            title="CONTENT CREATION"
          />
          <WhatWeDoSectionItem
            imageWidth={25}
            text="Never have to worry about when or what to post. We handle posting, scheduling, giveaways & copywriting"
            image="/WhatWeDoSection/contentCreationIcon.png"
            title="SOCIAL MEDIA MANAGEMENT"
            />
          <WhatWeDoSectionItem
            imageWidth={25}
            text="Showcase your products in the best light with our professional product photography service, offered by our social media agency."
            image="/WhatWeDoSection/productPhotographyIcon.svg"
            title="PRODUCT PHOTOGRAPHY"
          />
        </div>
      </TextSectionWithButton>
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
