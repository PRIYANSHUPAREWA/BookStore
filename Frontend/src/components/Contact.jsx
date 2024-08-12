import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <div  className="w-[600px]">
        <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Contact Us</h3>
    <div className='mt-3 py-2'>
        <span>Name</span>
        <br />
        <input type="text" 
         placeholder='Enter your Name'
         className='w-80 px-3 py-1 border rounded-md outline-none'
         {...register("name", { required: true })}
         />
         <br />
         {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* email */}
    <div className='mt-3 py-2'>
        <span>Email</span>
        <br />
        <input type="email" 
         placeholder='Enter your email'
         className='w-80 px-3 py-1 border rounded-md outline-none'
         {...register("email", { required: true })}
         />
          <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* message */}
    <div className='mt-3 py-2'>
    <span>Message</span>
        <br />
    <textarea className="w-80 textarea textarea-bordered " placeholder="Type your message...."
    {...register("message", { required: true })}
    ></textarea>
     <br />
     {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* button */}
    <div>
    <button className=' bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 hover:duration-200'>Submit</button>
    
    </div>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact