"use client";
import React from 'react';
import Image from "next/image";
import queen1 from "../assests/i5.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto pt-5 flex flex-col items-center overflow-hidden bg-black" id="about">
        
        {/* Animated Header */}
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 z-10"
        >
          About <span className="text-orange-400">Me</span>
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden w-full p-6 gap-6 z-10">
            
            {/* Left Side - Animated Text */}
            <motion.div
                initial={{ opacity: 0, y: -75 }} // Start from above
                whileInView={{ opacity: 1, y: 0 }} // Move to original position
                transition={{ duration: 0.5, delay: 0.25 }} // Animation duration and delay
                className="text-white max-w-[600px] relative z-10"
            >
                <p className="text-lg text-justify">
                    I am a full-stack developer with comprehensive experience in building responsive and dynamic web applications. My technical expertise encompasses front-end technologies such as HTML, CSS, JavaScript, React, and Next.js, as well as back-end development using Python, PHP, and the Laravel framework. I am adept at working with both SQL and NoSQL databases, which enables me to develop robust and scalable solutions. Known for my creativity and strong problem-solving skills, I am committed to delivering innovative and efficient solutions to complex challenges. I am dedicated to continuously enhancing my skills and look forward to contributing my expertise to projects that prioritize user-centric experiences and deliver measurable impact.
                </p>
            </motion.div>

            {/* Right Side - Animated Image with Floating Effect */}
            <motion.div
                className="absolute md:relative left-[80px] cursor-pointer"
                animate={{
                    y: [0, -10, 0], // Floating effect
                    opacity: [0.8, 1, 0.8] // Slight fade in and out effect
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse" // Makes it go up and down continuously
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 75 }} // Start from below
                    whileInView={{ opacity: 1, y: 0 }} // Move to original position
                    transition={{ duration: 0.5, delay: 0.25 }} // Animation duration and delay
                >
                    <Image 
                      src={queen1} 
                      height={300}
                      width={300}
                      alt="queen"
                      draggable="false"
                      className="w-full h-auto max-w-[300px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] opacity-30" // Responsive classes
                      layout="intrinsic" // Ensure proper image layout
                    />
                </motion.div>
            </motion.div>
        </div>
    </div>
  );
}

export default About;
