import InputGroup from "../components/InputGroup";
import SelectInputGroup from "../components/SelectInputGroup";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import Joi from "joi";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xbjeabvg");
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [brandNiche, setBrandNiche] = useState("");
  const [servicesNeeded, setServicesNeeded] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    brandName: "",
    brandNiche: "",
    servicesNeeded: "",
    message: "",
  });
  const form = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !errors.name &&
      !errors.email &&
      !errors.phoneNumber &&
      !errors.brandName &&
      name &&
      brandName &&
      email &&
      phoneNumber &&
      brandNiche &&
      servicesNeeded
    ) {
      handleSubmit(e);
      emailjs
        .sendForm(
          "service_6hb4odp",
          "template_63m6yk8",
          form.current,
          "RIxYKMqXZJUphpre-"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  useEffect(() => {
    console.log(state);
    if (state.succeeded) {
      toast("Form Submitted Successfully!");
      setName("");
      setBrandName("");
      setBrandNiche("");
      setEmail("");
      setMessage("");
      setPhoneNumber("");
      setServicesNeeded("");
    }
  }, [state.submitting]);

  const validateName = (value) => {
    const schema = Joi.object({
      name: Joi.string().min(5).max(30).required().label("Name"),
    });

    const { error } = schema.validate({ name: value });
    if (error) setErrors({ ...errors, name: error.details[0].message });
    else {
      setErrors({ ...errors, name: "" });
    }
  };

  const validateBrandName = (value) => {
    const schema = Joi.object({
      brandName: Joi.string().min(5).max(30).required().label("Brand Name"),
    });

    const { error } = schema.validate({ brandName: value });
    if (error) setErrors({ ...errors, brandName: error.details[0].message });
    else {
      setErrors({ ...errors, brandName: "" });
    }
  };

  const validatePhoneNumber = (value) => {
    const schema = Joi.object({
      phoneNumber: Joi.number().required().label("Phone Number"),
    });

    const { error } = schema.validate({ phoneNumber: value });
    if (error) setErrors({ ...errors, phoneNumber: error.details[0].message });
    else {
      setErrors({ ...errors, phoneNumber: "" });
    }
  };

  const validateEmailAddress = (value) => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false }, minDomainSegments: 2 })
        .min(5)
        .max(30)
        .required()
        .label("Email"),
    });

    const { error } = schema.validate({ email: value });
    if (error) setErrors({ ...errors, email: error.details[0].message });
    else {
      setErrors({ ...errors, email: "" });
    }
  };

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
        ref={form}
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-[10px] lg:gap-[30px] mt-[10px]"
      >
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[10px] lg:gap-[40px]">
          <InputGroup
            error={errors.name}
            setValue={setName}
            value={name}
            name="name"
            validateField={validateName}
            label="Name"
          />
          <InputGroup
            error={errors.brandName}
            setValue={setBrandName}
            value={brandName}
            name="brandName"
            label="Name Of Brand"
            validateField={validateBrandName}
          />
        </div>
        <div className="flex flex-col lg:flex-row  w-full justify-between gap-[10px] lg:gap-[40px]">
          <InputGroup
            error={errors.email}
            setValue={setEmail}
            value={email}
            validateField={validateEmailAddress}
            name="email"
            label="Email Address"
          />
          <InputGroup
            validateField={validatePhoneNumber}
            error={errors.phoneNumber}
            setValue={setPhoneNumber}
            value={phoneNumber}
            name="phoneNumber"
            label="Phone Number"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[10px] lg:gap-[40px]">
          <SelectInputGroup
            value={brandNiche}
            name="brandNiche"
            label="Brand Niche"
            options={["Beauty", "Fashion", "Lifestyle"]}
            setValue={setBrandNiche}
            error={errors.brandNiche}
          />
          <SelectInputGroup
            setValue={setServicesNeeded}
            value={servicesNeeded}
            name="servicesNeeded"
            label="Services Needed"
            options={[
              "Social Media Management",
              "Email Marketing",
              "Content Creation",
              "TikTok Management",
            ]}
            error={errors.servicesNeeded}
          />
        </div>
        <div>
          <div className="flex flex-col gap-[8px] w-full">
            <label className="font-bold text-[18px]">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="w-full min-h-[150px] resize-none p-[8px] border border-black bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full text-white bg-black h-[50px] font-bold mt-[15px] lg:mt-0"
        >
          {state.submitting ? "SUBMITTING..." : "SUBMIT"}
        </motion.button>
      </form>
    </motion.main>
  );
};

export default ContactUs;
