"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineFileText } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Contact", path: "#contact" }, 
    { title: "Resume", path: "/resume.pdf", icon: <AiOutlineFileText className="text-orange-500" /> } // Orange icon for Resume
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className="text-white/70 pt-0 pb-6">
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p className="text-lg text-white/70 cursor-pointer flex items-center space-x-1">
                                    {link.icon && <span>{link.icon}</span>} 
                                    <span>{link.title}</span>
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <motion.div
    initial={false}
    animate={nav ? 'open' : 'closed'}
    variants={menuVariants}
    className="fixed left-0 top-0 w-full z-40 bg-black/90 backdrop-blur-md" // Added 'backdrop-blur-md' for blur effect
>
    <ul className="text-4xl font-semibold my-24 text-center space-y-4">
        {navLinks.map((link, index) => (
            <li key={index}>
                <Link href={link.path} onClick={closeNav} target={link.title === "Resume" ? "_blank" : "_self"} rel="noopener noreferrer">
                    {link.title}
                </Link>
            </li>
        ))}
    </ul>
</motion.div>
        </div>
    )
}

export default Navbar;
