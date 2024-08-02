'use client';

import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import profilePicture from '../app/assets/profile-picture.jpg'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='flex relative flex-col h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>ABOUT</h3>

        <motion.div
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        transition={{
            duration:1.2,
        }}
         >

            <Image src={profilePicture} className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
             md:rounded-lg md:w-[3000px] md:h-[300px] xl:w-[5000px] xl:h-[500px]"/>
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB07]'>little</span> background</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellendus, maiores debitis nemo fugit magnam vitae minima sit non 
                sed omnis cupiditate ad pariatur quidem. Vitae, nulla sint. Debitis libero at blanditiis accusamus doloribus. Rem ad eius doloremque
                 quibusdam eligendi voluptatibus sapiente officiis quo delectus nobis? Magnam officia delectus veniam.
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita odio dicta aperiam asperiores corrupti unde cum sunt culpa ipsam, 
                 perspiciatis iusto autem! Magnam optio sapiente minima, sint soluta laboriosam fuga.</p>
        </div>


    </motion.div>
  )
}

export default About