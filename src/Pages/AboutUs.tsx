import NavBar from "../components/Navbar";
import TextSectionWithButton from "../components/TextSectionWithButton";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

const AboutUs = () => {
  const imageRef = useRef(null);
  const articleRef = useRef(null);
  const imageRefIntersection = useIntersection(imageRef, {
    root: null,
    rootMargin: "-200px",
    // threshold: 0.
  });
  const articleRefIntersection = useIntersection(articleRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [inView, setInView] = useState(-1);
  const [articleInView, setArticleInView] = useState(-1);

  useEffect(() => {
    setInView(inView + 1);
    console.log(inView);
  }, [imageRefIntersection]);
  useEffect(() => {
    setArticleInView(articleInView + 1);
    console.log(articleInView);
  }, [articleRefIntersection]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="px-[20px] lg:px-[60px] max-w-[1440px] mx-auto"
    >
      <motion.header className="mt-[130px] lg:mt-[180px] text-[32px] lg:text-[48px] font-bold mb-[30px] text-center">
        About Us
      </motion.header>
      <motion.article className="font-semibold lg:text-[19.5px] text-[grey] text-center flex flex-col gap-[24px]">
        <p>
          We are a team of experts dedicated to helping small businesses
          navigate the ever-changing world of social media.
        </p>
        <p>
          {" "}
          Our agency, founded in 2021, specializes in creating comprehensive
          social media strategies, producing engaging content, and running
          targeted ad campaigns.{" "}
        </p>
        <p>
          From strategists and copywriters to designers, we have the skills and
          experience to tackle any social media challenge.
        </p>
        <p>
          At the moment, we work mainly with brands in lifestyle and fashion
          industries.
        </p>
      </motion.article>
      <header className="mt-[100px] text-[32px] lg:text-[48px] font-bold mb-[30px] text-center">
        Meet Our Founder
      </header>
      <figure className="flex justify-center mt-[15px]">
        <div className="w-full max-w-[171px] lg:max-w-[300px] overflow-hidden">
          <motion.img
            ref={imageRef}
            initial={{ scale: 1, opacity: 0 }}
            animate={
              inView <= 1
                ? { scale: 1, opacity: 1 }
                : {
                    scale: 1.1,
                    opacity: 1,
                    transition: {
                      duration: 0.54,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                  }
            }
            className="w-full max-w-[171px] lg:max-w-[300px]"
            src="/ceo-zma.png"
          />
        </div>
      </figure>
      <motion.article
        ref={articleRef}
        initial={{ opacity: 0 }}
        animate={
          articleInView <= 1
            ? { opacity: 0 }
            : {
                opacity: 1,
                transition: {
                  duration: 0.54,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }
        }
        className="font-semibold lg:text-[19.5px] text-[grey] text-center flex flex-col gap-[24px] mt-[40px]"
      >
        <p>
          Meet Adetona Adebanke, the founder and CEO of Zai social media agency.
        </p>
        <p>
          {" "}
          With over 5 years of experience in the field, with experience in
          social media strategy and content creation.{" "}
        </p>
        <p>
          Adebanke founded the agency in 2021 with the goal of helping small
          businesses navigate the ever-changing world of social media.
        </p>
      </motion.article>
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

export default AboutUs;
