import React from 'react';
import { useForm } from 'react-hook-form';



export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: Object) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="text" placeholder="Your Question" {...register("Your Question", {required: true})} />
      <input type="submit" />
    </form>
  );
}