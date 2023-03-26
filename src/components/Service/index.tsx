import { motion } from "framer-motion";

interface ServiceProps {
  text: string;
  subtext: string;
  hasBottomBorder?: boolean;
  index: number;
}

const Service: React.FC<ServiceProps> = ({
  text,
  subtext,
  hasBottomBorder,
  index,
}) => {
  return (
    <div
      className={`pt-[16px] pb-[18px]  border-t border-black ${
        hasBottomBorder ? "border-b" : ""
      }`}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.3 + index * 0.2,
          },
        }}
        className="text-[24px] lg:text-[32px]  max-w-[1440px] mx-auto px-[26px] lg:px-[60px]"
      >
        {text}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.3 + index * 0.2,
          },
        }}
        className="font-light lg:text-[20px]  max-w-[1440px] mx-auto px-[26px] lg:px-[60px]"
      >
        {subtext}
      </motion.p>
    </div>
  );
};

export default Service;
