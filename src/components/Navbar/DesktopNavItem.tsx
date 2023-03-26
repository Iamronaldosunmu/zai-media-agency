import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface DesktopNavItemProps {
  text: string;
  selected: boolean;
  url: string;
}

const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  text,
  selected,
  url,
}) => {
    const navigate = useNavigate();
    const [textHovered, setTextHovered] = useState(false)
  return (
    <div
      onClick={() => navigate(url)}
      style={{ color: selected ? "#000000" : (textHovered ? "#000000" : "#808080") }}
          className="text-[20px] font-medium transition duration-300 ease-in text-[#808080] cursor-pointer"
          onMouseOver={() => setTextHovered(true)}
          onMouseOut={() => setTextHovered(false)}
    >
      <span
    //     className="hover:text-[black] transition duration-[300ms]
    //   "
      >
        {text}
      </span>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0 }}
            className="w-full h-[2px] bg-black mt-[2px]"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopNavItem;
