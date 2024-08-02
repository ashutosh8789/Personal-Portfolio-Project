
'use client';
import { motion } from 'framer-motion';
import React from 'react'

const Projects = () => {
    const projects = [1,2,3,4,5];
    const len =projects.length;
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>


        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((projects,i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 

                    initial={{
                        y:-300,
                        opacity:0,

                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    
                    src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
                     
                     alt="" 
                     />
                     <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='text-4xl underline decoration-[#F7AB07]/50'>

                            Case Study {i+1} of {len}:
                            </span>{" "}
                            UPS clone
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cum ducimus expedita soluta magni enim inventore
                             tempora, reprehenderit voluptas dignissimos beatae quas quaerat molestiae assumenda harum omnis blanditiis labo
                             rum? Qui commodi sint, impedit quia voluptatum nam debitis doloremque laudantium nesciunt non ex earum porro offi
                             cia rem, nulla quibusdam ea tempore.
                        </p>
                    </div>
                </div>
            ))}
        </div>



        <div className='w-full absolute top-[30%] bg-[#F7AB07]/10 left-0 h-[500px] -skew-y-12'/>



    </motion.div>
  )
}

export default Projects