import DesktopNavItem from "./DesktopNavItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavItem from "./MobileNavItem";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (

    <nav className="z-20 fixed top-0 pl-[19px] lg:pl-[40px] pr-[32px] lg:pr-[60px] pt-[14px] flex items-center justify-between container max-w-[1440px] left-0 right-0 mx-auto bg-[#ede4d7]">
      <img
        className="lg:w-[104px] lg:h-[83px] z-20 "
        src="/Navbar/company-logo.png"
      />
      <motion.div
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-[30px] flex flex-col gap-[13px] lg:hidden z-20"
      >
        <motion.div
          transition={{ duration: 0.2 }}
          animate={mobileNavOpen ? { rotateZ: 45, y: 7 } : {}}
          className="h-[2px] bg-black"
        ></motion.div>
        <motion.div
          animate={mobileNavOpen ? { rotateZ: -45, y: -8 } : {}}
          className="h-[2px] bg-black"
        ></motion.div>
      </motion.div>
      <div className="hidden lg:flex gap-[41px]">
        <DesktopNavItem
          text="Home"
          selected={location.pathname == "/home"}
          url="/home"
        />
        <DesktopNavItem
          text="About Us"
          selected={location.pathname == "/about-us"}
          url="/about-us"
        />
        <DesktopNavItem
          text="Our Clients"
          selected={location.pathname == "/our-clients"}
          url="/our-clients"
        />
        <DesktopNavItem
          text="Services & Pricing"
          selected={location.pathname == "/services-and-pricing"}
          url={"/services-and-pricing"}
        />
        <DesktopNavItem
          text="Contact Us"
          selected={location.pathname == "/contact-us"}
          url="contact-us"
        />
      </div>
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-[20px] bg-[#ede4d7]"
          >
            {[
              ["Home", "home"],
              ["About Us", "about-us"],
              ["Our Clients", "our-clients"],
              ["Services & Pricing", "services-and-pricing"],
              ["Contact Us", "contact-us"],
            ].map((item, index) => (
              <MobileNavItem text={item[0]} url={item[1]} index={index} setNavOpen={setMobileNavOpen} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
