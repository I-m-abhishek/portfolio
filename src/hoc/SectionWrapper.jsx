import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// video at 1hr 22 min-  https://youtu.be/0fYi8SGA20k?si=04NrsqVRuv2dldDZ
const SectionWrapper = ( Component , idName)=>function HOC() {
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true , amount : 0.25}}
    className={` ${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
        <Component/>
    </motion.section>
  )
}

export default SectionWrapper

