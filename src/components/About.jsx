"use client";
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn ,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon.src}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    
    <motion.p 
    variants={fadeIn("","",0.1 , 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    I'm a Software Engineer with 1.8+ years of experience building scalable backend systems, full-stack applications, and business automation solutions. I specialize in Java, Spring Boot, Python, Next.js, React, and SQL, with a focus on building reliable and high-performance software. <br></br>

From automating complex data workflows to developing intuitive web applications, I turn business requirements into clean, efficient, and scalable solutions that deliver real-world impact.
    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10'>

{services.map((service, index)=>{
  return(
<ServiceCard  key={service.title} index={index} {...service}/>
  )
})}
    </div>
    </>
  )
}

export default SectionWrapper(About , "about")