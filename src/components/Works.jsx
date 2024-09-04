"use client";
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn , textVariant } from '../utils/motion';

const ProjectCard = ({index, name , description, tags, image , source_code_link, live_link})=>{
       return(
        <>
            <motion.div variants={fadeIn("up", "spring", index*0.5 , 0.75)}>
             <Tilt 
             options={
              {
                max: 45, 
                scale: 1,
                speed: 450
              }
             }
             className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
             >

              <div className='relative w-full h-[230px]'>
                <img src={image.src} alt={name} className='w-full h-full object-cover rounded-2xl'/>
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                       <div onClick={()=>window.open(source_code_link, "_blank" )} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                          <img src={github.src} alt="github" className='w-1/2 h-1/2 object-contain' />
                </div>
                </div>
                {/* <div className='absolute inset-0 flex justify-end m-3 mt-14 card-img_hover'>
                       <div onClick={()=>window.open(source_code_link, "_blank" )} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                          <img src={github.src} alt="github" className='w-1/2 h-1/2 object-contain' />
                </div>
                </div> */}
              </div>
               <div className='mt-5 '>
<div className="flex flex-row" >
                  <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                 <a href={live_link} target='_blank'><img src='./images/box-arrow.svg' className=' bg-transparent h-8 w-8 p-[6px] pl-2'/></a>
               </div>
<p className='mt-2 text-secondary text-[14px]'>{description}</p>
               </div>
               <div className='mt-4 flex flex-wrap gap-2 '>
   {tags.map((tag)=>{
    return(
      <p key={tag.name} className={`text-[14px] ${tag.color}`}> #{tag.name} </p>

    )
   })}
               </div>
               
             </Tilt>
            </motion.div>
            </>

       )
}


const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Projects.
        </h2>
      </motion.div>
         <div className='w-full flex'>
           <motion.p  variants={fadeIn("" ,"", 0.1, 1)}
           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
           >
My projects showcase my expertise in full-stack development, machine learning, and software engineering. They demonstrate my ability to build complex, user-friendly applications, optimize algorithms for accurate predictions, and create seamless, visually appealing user interfaces. My work reflects a strong focus on solving real-world problems through innovative technology solutions.
           </motion.p>
         </div>

         <div className='mt-20 flex flex-wrap gap-7'>
{projects.map((project, index)=>{
  return(
<ProjectCard key={`project-${index}`} index={index} {...project}/>
)
})}
         </div>
    
    </>
  )
}

export default SectionWrapper(Works , "");