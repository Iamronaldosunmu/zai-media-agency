import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import { motion } from "framer-motion";

interface PackageCardProps {
  features: string[];
  packageTitle: string;
  price: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  packageTitle,
  features,
  price,
}) => {
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
    <motion.div
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
      className="relative -z-10 w-full bg-[#E2C7B5] pt-[19px] pb-[66px] rounded-[22px] text-[#545454]"
    >
      <header className="font-semibold text-[24px]  text-center">
        {packageTitle}
      </header>
      <ul className="list-disc font-medium px-[20px] pl-[40px]  mt-[27px] flex flex-col gap-[16px]">
        {features?.map((feature: string) => (
          <li>{feature}</li>
        ))}
      </ul>
      <div className="absolute bottom-[20px] left-0 right-0 text-center text-black">
        Starting From N{price}
      </div>
    </motion.div>
  );
};

export default PackageCard;
