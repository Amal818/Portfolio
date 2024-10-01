"use client";
import Image from "next/image";
import project from "../assests/p2.png";
import project1 from "../assests/p1.png";
import project3 from "../assests/p3.png";
import { motion } from "framer-motion";
import { FaChess } from "react-icons/fa"; // Import chess icon

const projects = [
    {
        title: "Moroccan authantic cuisine",
        desc: "Explore the stunning beauty of Moroccan palaces with our vibrant website front end, featuring rich colors, intricate patterns, and smooth navigation that brings the culture to life.",
        devstack: "Next.js, React, Gsap, Tailwind",
        link: "https://theadora.vercel.app/",
        git: "#",
        src: project,
    },
    {
        title: "Car Rental ",
        desc: "A simple, intuitive interface for managing bookings, vehicles, pricing, and user activities with real-time data.",
        devstack: "Php, Bootstrap",
        link: "#",
        git: "#",
        src: project1,
    },
    {
        title: "Portfolio",
        desc: "A sleek, responsive website to showcase projects, skills, and experiences with smooth navigation.",
        devstack: "Next.js, React, Tailwind, Framer-motion",
        link: "#",
        git: "#",
        src: project3,
    },
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#000] py-5 mt-20" id="portfolio">
            <h1 className="flex justify-center items-center text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 z-10">
                Selected <span className="text-orange-400"> Project</span>
            </h1>

            <div className="max-w-[1000px] mx-auto mt-12 space-y-20 px-4 md:px-0">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: index % 2 === 0 ? -75 : 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-10 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-10" : "md:flex-row"} gap-6`}
                    >
                        <div className="space-y-2 max-w-[500px]">
                            <h2 className="text-6xl my-3 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl text-orange-400">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-3">{project.desc}</p>
                            <div className="text-xl font-semibold flex gap-2 flex-wrap" style={{ color: "#D4A5A5" }}> {/* Updated color */}
                                {project.devstack.split(", ").map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="border rounded-full px-3 py-1 text-sm"
                                        style={{ borderColor: "#755d4a" }} // Updated border color
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="w-56 h-[1px] bg-gray-400 my-3" />
                            <div className="flex items-center gap-6 my-3">
                                <a href={project.link} className="flex items-center gap-1 text-lg">
                                <FaChess className="text-orange-400" /> Link
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[300px] w-auto object-cover border rounded border-gray-700" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
