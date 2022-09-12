import type { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

const Form: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // console.log(errors);
  // const [value, setValue] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("Products");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // let isValidForm = handleValidation();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullName,
        query: query,
        phone: phone,
        topic: topic,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    setEmail("");
    setPhone("");
    setFullName("");
    setQuery("");
    setTopic("Products");

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(fullName, email, phone, query, topic);
  };

  {
    /* <input
            type="tel"
            placeholder="Enter your number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          /> */
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-start justify-center space-y-6  "
      // data-aos="fade-up"
    >
      <div className="flex items-center justify-center lg:space-x-6 lg:space-y-0 space-x-0 space-y-6 flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-start space-y-3">
          <label htmlFor="fullname" className="">
            Your Name<span className="text-[#FF0000] text-xl">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            name="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            // {...register("fullname", { required: true, maxLength: 80 })}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          />
        </div>

        <div className="flex flex-col justify-center items-start space-y-3">
          <label htmlFor="email">
            Your Email<span className="text-[#FF0000] text-xl">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            name="email"
            // {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          />
        </div>
      </div>
      <div className="flex items-center justify-center lg:space-x-6 lg:space-y-0 space-x-0 space-y-6 flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-start space-y-3">
          <label htmlFor="phone">
            Contact number<span className="text-[#FF0000] text-xl">*</span>
          </label>
          {/* <PhoneInput
            name="phone"
            international
            countryCallingCodeEditable={false}
            defaultCountry="IN"
            value={phone}
            style={{ borderRadius: "12px" }}
            onChange={setPhone}
            rules={{ required: true }}
            // inputRef={register}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          /> */}
          <input
            type="tel"
            placeholder="Enter your number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            // {...register("Mobile number", {
            //   required: true,
            //   minLength: 6,
            //   maxLength: 12,
            // })}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          />
        </div>

        <div className="flex flex-col justify-center items-start space-y-3 -ml-16 lg:ml-0">
          <label htmlFor="topic">Your query is related to?</label>
          <select
            // {...register("topic", { required: true })}
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10">
            <option value="ODM">ODM</option>
            <option value="OEM">OEM</option>
            <option value="OEM">OBM</option>
            <option value="Products" selected>
              Products
            </option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="query">Please enter your query</label>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Please enter your query:"
          // {...register("query", { required: true })}
          name="query"
          className="rounded-xl w-fit border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10 resize-none "
        />
      </div>

      <button
        type="submit"
        className="font-Inter font-normal text-xl md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">
        Submit
      </button>
    </form>
  );
};

export default Form;
