"use client";
import React from 'react';
import {
    FaCss3Alt, FaReact, FaJsSquare, FaHtml5, FaPhp, FaPython, FaBootstrap, FaGit, FaGithub
} from 'react-icons/fa';
import { SiLaravel, SiNextdotjs, SiTailwindcss, SiFigma, SiFramer } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillIcons = [
    { icon: <FaHtml5 size={100} color="#E44D26" />, label: "HTML" },
    { icon: <FaCss3Alt size={100} color="#1572B6" />, label: "CSS" },
    { icon: <FaReact size={100} color="#61DBFB" />, label: "React" },
    { icon: <FaJsSquare size={100} color="#F0DB4F" />, label: "JavaScript" },
    { icon: <SiLaravel size={100} color="#FF2D20" />, label: "Laravel" },
    { icon: <FaPython size={100} color="#3776AB" />, label: "Python" },
    { icon: <FaPhp size={100} color="#777BB4" />, label: "PHP" },
    { icon: <SiNextdotjs size={100} color="#000000" />, label: "Next.js" },
    { icon: <FaBootstrap size={100} color="#7952B3" />, label: "Bootstrap" },
    { icon: <SiTailwindcss size={100} color="#06B6D4" />, label: "Tailwind CSS" },
    { icon: <SiFigma size={100} color="#F24E1E" />, label: "Figma" },
    { icon: <SiFramer size={100} color="#0055FF" />, label: "Framer Motion" },
    { icon: <FaGit size={100} color="#F05032" />, label: "Git" },
    { icon: <FaGithub size={100} color="#000000" />, label: "GitHub" },
];

const Skills = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className='text-white w-full max-w-[1200px] mx-auto px-4 text-center'>
            <h1 className="flex justify-center items-center text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 z-10">
             What  <span className="text-orange-400">  IDO  </span>
            </h1>                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
                    {skillIcons.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="h-[130px] w-[130px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
                            animate={{ x: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1,
                            }}
                        >
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
