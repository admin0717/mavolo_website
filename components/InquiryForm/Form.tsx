import type { FC } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


const Form: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: Object) => console.log(data);
  console.log(errors);
  const [value, setValue] = useState()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center space-y-6 " data-aos="fade-up">
      <div className='flex items-center justify-center space-x-6'>
        <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Name">Your Name*</label>
        <input  type="text" required placeholder="Enter your name" {...register("Name", {required: true, maxLength: 80})}  className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10" />
      </div>
      

      <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Email">Your Email*</label>
        <input type="email" placeholder="Enter your email" required {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"/>
      </div>
      </div>
        <div className='flex items-center justify-center space-x-6'>
          <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Mobile Phone">Contact number*</label>
        {/* <PhoneInput international countryCallingCodeEditable={false} defaultCountry="IN" value={value} onChange={setValue} className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"/> */}

        <input type="tel" placeholder="Enter your number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10"/>
      </div>

      <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Message">Your query is related to?*</label>
        <select {...register("Query related to:", { required: true })} className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10">
          <option value="ODM">ODM</option>
          <option value="OEM">OEM</option>
          <option value="Products">Products</option>
          <option value="Others">Others</option>
      </select>  
        </div> 
      
      </div>

      <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="query">Please enter your query</label>
          <textarea  placeholder="Please enter your query:" {...register("Please enter your query:", {required: true})} className="rounded-xl border-buttonBG font-large font-Inter focus:border-buttonBG focus-ring focus:ring-buttonBG bg-blurBG bg-opacity-10 resize-none"/>
      </div>

      <button type="submit" className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4 ">Submit</button>

      
    </form>
  );
}

export default Form;