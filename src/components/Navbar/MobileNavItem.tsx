import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface MobileNavItemProps {
  text: string;
  index: number;
  url: string;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  text,
  index,
  url,
  setNavOpen,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => {
        navigate(url);
        setTimeout(() => setNavOpen(false), 300)
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 * index },
      }}
      className="text-[25px] "
    >
      {text}
    </motion.div>
  );
};

export default MobileNavItem;
