import InputGroup from "../components/InputGroup";
import SelectInputGroup from "../components/SelectInputGroup";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xbjeabvg");

  useEffect(() => {
    if (state.succeeded) {
      toast("Form Submitted Successfully!");
    }
  }, [state.succeeded]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="px-[20px] lg:px-[60px] max-w-[1440px] mx-auto lg:grid lg:grid-cols-[300px_auto] xl:grid-cols-[500px_auto] gap-[50px] mt-[130px] lg:mt-[180px]"
    >
      <section className="">
        <header className=" text-[32px] lg:text-[44px] font-bold mb-[30px] lg:mb-[10px] text-center lg:text-left">
          Contact Us
        </header>
        <p className="font-light lg:text-[20px] text-center lg:text-left">
          If you have any questions or comments, please contact us via email, or
          send us a message using the contact form.
        </p>
        <p className="font-bold mt-[30px] text-[20px]">Email</p>
        <p className="text-[20px]">zaimediaagency@gmail.com</p>
      </section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[10px] lg:gap-[30px]"
      >
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[10px] lg:gap-[40px]">
          <InputGroup name="name" label="Name" />
          <InputGroup name="brandName" label="Name Of Brand" />
        </div>
        <div className="flex flex-col lg:flex-row  w-full justify-between gap-[10px] lg:gap-[40px]">
          <InputGroup name="email" label="Email Address" />
          <InputGroup name="phoneNumber" label="Phone Number" />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[10px] lg:gap-[40px]">
          <SelectInputGroup
            name="brandNiche"
            label="Brand Niche"
            options={["Beauty", "Fashion", "Lifestyle"]}
          />
          <SelectInputGroup
            name="servicesNeeded"
            label="Services Needed"
            options={[
              "Social Media Management",
              "Email Marketing",
              "Content Creation",
              "TikTok Management",
            ]}
          />
        </div>
        <div>
          <div className="flex flex-col gap-[8px] w-full">
            <label className="font-bold text-[18px]">Message</label>
            <textarea name="message" className="w-full min-h-[150px] resize-none p-[8px] border border-black bg-transparent focus:outline-none" />
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full text-white bg-black h-[50px] font-bold mt-[15px] lg:mt-0"
        >
          SUBMIT
        </motion.button>
      </form>
    </motion.main>
  );
};

export default ContactUs;
