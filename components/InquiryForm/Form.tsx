import type { FC } from 'react';
import { useForm } from 'react-hook-form';



const Form: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: Object) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center space-y-6">
      <div className='flex items-center justify-center'>
        <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Name">Your Name</label>
        <input  type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      </div>
      

      <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Email">Your Email</label>
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      </div>
      </div>
      
              <div className='flex items-center justify-center'>
          <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Mobile Phone">Your Phone Number</label>
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      </div>

      <div className="flex flex-col justify-center items-start space-y-3">
        <label htmlFor="Message">Your Message</label>
        <select {...register("Query related to:", { required: true })}>
          <option value="ODM">ODM</option>
          <option value="OEM">OEM</option>
          <option value="Products">Products</option>
          <option value="Others">Others</option>
      </select>  
        </div> 
      
      </div>

      <div>
              <input type="text" placeholder="Please enter your query:" {...register("Please enter your query:", {required: true})} />
      </div>

      <button type="submit" className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">Submit</button>
    </form>
  );
}

export default Form;