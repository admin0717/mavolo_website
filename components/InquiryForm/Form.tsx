import type { FC } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("Products");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/email", {
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
      const notifyError = () =>
        toast.error("Oops! Something went wrong. Please try again!", {
          duration: 4000,
          position: "top-center",
        });
      notifyError();
      return;
    }

    const notifySuccess = () =>
      toast.success("Your form has been successfully received!", {
        duration: 4000,
        position: "top-center",
      });
    notifySuccess();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-start justify-center space-y-6  ">
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
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          />
        </div>
      </div>
      <div className="flex items-center justify-center lg:space-x-6 lg:space-y-0 space-x-0 space-y-6 flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-start space-y-3">
          <label htmlFor="phone">
            Contact number<span className="text-[#FF0000] text-xl">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter your number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"
          />
        </div>

        <div className="flex flex-col justify-center items-start space-y-3 -ml-16 lg:ml-0">
          <label htmlFor="topic">Your query is related to?</label>
          <select
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
          name="query"
          className="rounded-xl w-fit border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10 resize-none "
        />
      </div>

      <button
        type="submit"
        className="font-Inter font-normal text-xl md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">
        Submit
      </button>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #54BD95",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </form>
  );
};

export default Form;
