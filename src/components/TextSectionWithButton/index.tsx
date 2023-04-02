import { Children, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useIntersection from "react-use/lib/useIntersection";
import { motion } from "framer-motion";

interface TextSectionWithButtonProps {
  header: string;
  paragraphs?: string[];
  buttonText: string;
  buttonUrl: string;
  children?: JSX.Element;
}

const TextSectionWithButton: React.FC<TextSectionWithButtonProps> = ({
  header,
  paragraphs,
  buttonText,
  buttonUrl,
  children,
}) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const refIntersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });
  const [inView, setInView] = useState(-1);

  useEffect(() => {
    setInView(inView + 1);
    console.log(inView);
  }, [refIntersection]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        inView <= 1
          ? { opacity: 0, scale: 0.95 }
          : {
              opacity: 1,
              scale: 1,
              transition: {
                ease: [0.43, 0.13, 0.23, 0.96],
                duration: 1,
              },
            }
      }
      className="mt-[63px] lg:mt-[200px]"
    >
      <header className="text-[32px] lg:text-[48px] font-bold mb-[30px] text-center">
        {header}
      </header>
      {paragraphs?.map((paragraph: string, index: number) => (
        <p className="mb-[24px] md:text-[20px] lg:text-[19.5px] font-semibold text-[grey] text-center">
          {paragraph}
        </p>
      ))}
      {children}
      <div
        onClick={() => navigate(buttonUrl)}
        className="w-full max-w-[460px] mx-auto h-[54px] lg:h-[60px] lg:text-[22.5px] flex items-center justify-center text-white bg-black mt-[33px] font-semibold cursor-pointer"
      >
        {buttonText}
      </div>
    </motion.article>
  );
};

export default TextSectionWithButton;
