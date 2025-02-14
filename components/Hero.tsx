'use client';
import React from 'react'
import { Cursor,Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import profilePicture from '../app/assets/profile-picture.jpg'
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
    const [text, count] =useTypewriter({
        words: [
            "Hi, The Name's Ashutosh Prabhakar",
            "Guy-Who-Loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image src={profilePicture} className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        <div className='z-20' >
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>SOFTWARE ENGINEER</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0B'></Cursor>
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                {/* <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link> */}
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
                
                
               
                
            </div>
        </div>

    </div>
  )
}

export default Hero