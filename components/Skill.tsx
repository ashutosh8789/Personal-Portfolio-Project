import { motion } from 'framer-motion'
import Image from 'next/image';
import React, { useState } from 'react'




const Skill = () => {
    const [direction,setDirection] = useState(true);
    


  return (
    <div className='group relative flex cursor-pointer '>

       

        <motion.img
        initian={{
            x: direction ? -200 : 200,
            opacity:0,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}


        
        src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
        className='border border-gray-500 rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter
        group-hover:grayscale transition duration-300 ease-in-out'
        
        />

        
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
             ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full object-cover'>
                <p className='text-3xl font-bold text-black opacity-100 '>100%</p>
            </div>
        </div>

        
    </div>
  )
}

export default Skill