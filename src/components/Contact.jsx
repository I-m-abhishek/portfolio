"use client";
import{useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name : '',
    email:'',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handlechange = (e) =>{ 
   
  }
  const handlesubmit = (e)=>{

  }
  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
    <motion.div variants={slideIn('left' , "tween" , 0.2 ,1)}
    className='flex-[0.75] bg-black-100 p-8  rounded-2xl'>
<p className={`${styles.sectionSubText}`}>Get in touch</p>
<h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

 <form 
  ref={formRef}
  onSubmit={handlesubmit}
  className='mt-12 flex flex-col gap-8'
 >
     <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Name</span>
      <input className='px-6 bg-tertiary py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none ' type="text" name='name' value={form.name} onChange={handlechange} placeholder="What's your name"/>
     </label>
     <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Email</span>
      <input className='px-6 bg-tertiary py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none ' type="email" name='email' value={form.email} onChange={handlechange} placeholder="What's your email"/>
     </label>
     <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Message</span>
      <textarea className='px-6 bg-tertiary py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none ' rows="7"  name='message' value={form.message} onChange={handlechange} placeholder="What do you want to say?"/>
     </label>
     <button type='submit' className='bg-tertiary py-3 px-8 outlined-none font-bold w-fit text-white shadow-md shadow-primary rounded-xl'>
      {loading ? 'Sending...' : "Send"}
     </button>
 </form>
    </motion.div>
    <motion.div variants={slideIn('right' , "tween" , 0.2 , 1 )} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
 <EarthCanvas/>

    </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact ,"contact");