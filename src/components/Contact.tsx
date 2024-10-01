"use client";
import React from 'react';
import Image from "next/image";
import chess from "../assests/i2.png"; // corrected the path to "assets"
import { motion } from "framer-motion"; // Ensure this import is correct

const Contact = () => {
  return (
<div className="w-full h-full h-[700px] h-screen flex items-center justify-center text-white/70 p-10 bg-white/10 mt-8 lg:z-auto">
    {/* Adjusted the outer div to center content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 w-full">
        {/* Image container */}
        <div className="flex justify-center items-center lg:static absolute opacity-50 sm:opacity-30 lg:opacity-100 lg:w-auto transition-opacity duration-500 ease-in-out lg:z-auto z-0"> {/* Adjust opacity and positioning */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='inline-block'
          >
            <Image 
              src={chess} 
              alt="chess" 
              height={350}  // Adjust height for laptop view
              width={350}   // Adjust width for laptop view
              className="block" // Ensure the image is always displayed
            />
          </motion.div>
        </div>
        {/* Form container */}
        <div className='relative bg-white/10 p-8 rounded-xl w-full lg:w-[600px] z-10'> {/* Set the form in front */}
          <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let s Connect</h2>
          <p className='text-white/70 mb-6'>Send me a message and let s schedule a call!</p>
          <form 
            className='space-y-4'  
            action="https://getform.io/f/bkkgqevb" 
            method="POST"
          >
            <div className='grid md:grid-cols-2 gap-4'>
              <input 
                type="text" 
                name="firstName" 
                className="bg-black/70 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder='First Name' 
                required 
              />
              <input 
                type="text" 
                name="lastName" 
                className="bg-black/70 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder='Last Name' 
                required 
              />
              <input 
                type="email" 
                name="email" 
                className="bg-black/70 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder='Email' 
                required 
              />
              <input 
                type="tel" 
                name="phone" 
                className="bg-black/70 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder='Phone' 
                required 
              />
            </div>
            <textarea 
              name="msg" 
              className="bg-black/70 w-full rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder='Your Message' 
              required 
            />
            <button className='bg-orange-700 hover:bg-orange-500 text-white px-8 py-3 w-full font-semibold text-xl rounded-xl'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
