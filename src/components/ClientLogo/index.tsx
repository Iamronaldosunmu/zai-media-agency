import { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import { motion } from "framer-motion";

interface ClientLogoProps {
  imagePath: string;
  brandName: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ imagePath, brandName }) => {
  const ref = useRef(null);
  const refIntersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  const [inView, setInView] = useState(-1);

  useEffect(() => {
    setInView(inView + 1);
    console.log(inView);
  }, [refIntersection]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: {delay: 0.3, duration: 0.4} }}
      //   ref={ref}
      //   initial={{ opacity: 0, scale: 0.95 }}
      //   animate={
      //     inView <= 1
      //       ? { opacity: 0, scale: 0.95 }
      //       : {
      //           opacity: 1,
      //           scale: 1,
      //           transition: {
      //             ease: [0.43, 0.13, 0.23, 0.96],
      //             duration: 1,
      //           },
      //         }
      //   }
      className="w-full"
    >
      <img className="w-full" src={imagePath} />
      <p className="text-[22px] text-center lg:text-left xl:text-[28px] font-medium mt-[8px]">
        {brandName}
      </p>
    </motion.div>
  );
};

export default ClientLogo;
