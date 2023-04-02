import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhiteLogo from "../../assets/whitelogo.png";

const Loader = () => {
  const navigate = useNavigate();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  return (
    <motion.main
      animate={{
        opacity: animationCompleted ? 0 : 1,
        transition: { duration: 0.3 },
      }}
      className=" absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center"
    >
      <motion.img
        onAnimationComplete={() => {
          setAnimationCompleted(true);
          setTimeout(() => navigate("/home"), 500);
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1],
          scale: [0.9, 1.2, 0.9, 1.2, 1.1],
          transition: { duration: 2.5 },
        }}
        className="lg:w-[200px]"
        src={WhiteLogo}
      />
    </motion.main>
  );
};

export default Loader;
