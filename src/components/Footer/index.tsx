import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="flex flex-col mt-[65px] lg:mt-[180px] gap-[28px] px-[20px] mb-[84px] lg:mb-[20px] max-w-[1440px] mx-auto lg:pr-[60px]"
    >
      {/* <div
        className="flex justify-center items-center lg:hidden gap-[20px]
        "
      >
        <a
          href="https:instagram.com/zaimediaagency"
          rel="noreferrer"
          target="_blank"
          className="flex justify-center items-center gap-[5px] border-b underline"
        >
          <img className="w-[30px] h-[30px]" src="/instagramIcon.png" />
        </a>
        <a href="mailto:zaimediaagency@gmail.com">
          <img className="w-[30px] h-[35px] " src="/mailIcon.png" />
        </a>
      </div> */}

      <div className="justify-between hidden lg:flex">
        <div className="flex flex-col text-[14px] lg:text-[18px] lg:flex-row">
          <img
            className="w-[79px] h-[63px] lg:w-[226.5px] lg:h-[180px]"
            src="/Navbar/company-logo.png"
          />
          <div className="flex flex-col lg:h-[140px] lg:justify-between">
            <p>Lagos, Nigeria</p>
            <a
              href="mailto:zaimediaagency@gmail.com"
              className="lg:flex items-center gap-[5px] hidden "
            >
              <img className="w-[20px] h-[20px] " src="/mailIcon.png" />
              <span>zaimedaagency@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/zaimediaagency"
              rel="noreferrer"
              target="_blank"
              className="lg:flex items-center gap-[5px] hidden "
            >
              <img className="w-[20px] h-[20px]" src="/instagramIcon.png" />
              <p className="">@zaimedaagency</p>
            </a>
          </div>
        </div>
        <div className="text-[14px] lg:text-[18px] h-[100px] lg:h-[140px] flex-col justify-between items-center flex">
          <p
            className="cursor-pointer transition duration-200 hover:scale-[1.05]"
            onClick={() => navigate("/home")}
          >
            Home
          </p>
          <p
            className="cursor-pointer transition duration-200 hover:scale-[1.05]"
            onClick={() => navigate("/about-us")}
          >
            About Us
          </p>
          <p
            className="cursor-pointer transition duration-200 hover:scale-[1.05]"
            onClick={() => navigate("/our-clients")}
          >
            Our Clients
          </p>
          <p
            className="cursor-pointer transition duration-200 hover:scale-[1.05]"
            onClick={() => navigate("/services-and-pricing")}
          >
            Services & Pricing
          </p>
          <p
            className="cursor-pointer transition duration-200 hover:scale-[1.05]"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </p>
        </div>
      </div>

      <div className="w-full px-[20px] flex flex-col items-center lg:hidden">
        <div className="w-full h-[2px] bg-[#737373] mb-[30px]"></div>
        <img className="w-[120px]" src="/Navbar/company-logo.png" />
        <a href="mailto:zaimediaagency@gmail.com" className="">
          zaimedaagency@gmail.com
        </a>
        <p className="mt-[5px]">Lagos, Nigeria</p>
        <div
          className="flex justify-center items-center lg:hidden gap-[20px] mt-[10px]
        "
        >
          <a
            href="https://instagram.com/zaimediaagency"
            rel="noreferrer"
            target="_blank"
            className="flex justify-center items-center gap-[5px] border-b underline"
          >
            <img className="w-[20px] h-[20px]" src="/instagramIcon.png" />
          </a>
          <a href="mailto:zaimediaagency@gmail.com">
            <img className="w-[20px] h-[20px] " src="/mailIcon.png" />
          </a>
        </div>
        <div className="w-full h-[2px] bg-[#737373] mt-[30px]"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
