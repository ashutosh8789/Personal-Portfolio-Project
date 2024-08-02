'use client';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
  };
  type Props = {};

const ContactMe = () => {
    const { register,handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ashutosh.prabhakar01@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
                                ${formData.message} ${(formData.email)}`;
    }


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center overflow-hidden'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>contact</h3>


        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
            I have just got what you need.{" "}
            <span className=' underline decoration-[#F7AB07]/50'>Let's Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB07] h-7 w-7 animate-pulse'/>
                    <p>+91 8789037130</p>

                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB07] h-7 w-7 animate-pulse'/>
                    <p>ashutosh.prabhakar01@gmail.com</p>

                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB07] h-7 w-7 animate-pulse'/>
                    <p>123 Developer lane</p>

                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>
                <div className='flex space-x-2' >
                    <input {...register('name')} placeholder="Name" className='cantactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='cantactInput'type="text" />
                </div>

                <input {...register('subject')} placeholder="Subject" className='cantactInput' type="text" />

                <textarea {...register('message')} placeholder="Message" className='cantactInput' name="" id=""></textarea>

                <button type='submit' className='bg-[#F7AB07] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  );
}

export default ContactMe