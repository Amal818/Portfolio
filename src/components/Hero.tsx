"use client";
import Image from "next/image";
import horse2 from "../assests/i4.png";
import queen1 from "../assests/i2.png";
import chess1 from "../assests/i3.png";
import chess2 from "../assests/i6.png";
import { motion } from "framer-motion";
import profilepic from "../assests/a.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative overflow-clip bg-[linear-gradient(to_bottom,#000000,#221c12_30%,#3e2b1a_55%,#674f36)]">
      <Navbar />
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-black"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center z-20">
          <h1 className="text-[#fff] z-20">Hi, I am</h1>
          <h1 className="text-[#755d4a] z-20">Amal Zaarour</h1>
        </div>

        {/* Queen Chess Piece with leaning effect (Hidden on small screens) */}
        <motion.div
          className="absolute left-[60px] top-[20px] z-10 hidden md:block"
          drag
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} // Leaning to the right
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={queen1}
            height="220"
            width="220"
            alt="queen"
            draggable="false"
          />
        </motion.div>

        {/* First Chess Piece with leaning effect */}
        <motion.div
          className="absolute left-[200px] top-[270px] z-10"
          drag
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }} // Leaning to the right
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={chess1}
            height="180"
            width="180"
            alt="chess"
            draggable="false"
          />
        </motion.div>

        {/* Horse Chess Piece with leaning effect (Hidden on small screens) */}
        <motion.div
          className="absolute right-[100px] top-[10px] z-10 hidden md:block"
          drag
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }} // Leaning to the left
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={horse2}
            height="220"
            width="220"
            alt="horse"
            draggable="false"
          />
        </motion.div>

        {/* Second Chess Piece with leaning effect */}
        <motion.div
          className="absolute right-[190px] top-[270px] z-10"
          drag
          animate={{ x: [0, 20, 0], rotate: [0, -10, 0] }} // Leaning to the left
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={chess2}
            height="180"
            width="180"
            alt="chess"
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 z-20 relative">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users.
        </p>
        <Image
          src={profilepic}
          alt="profile picture"
          className="mx-auto z-20 relative"
          height="300"
          width="300"
        />
      </div>
    </div>
  );
};

export default Hero;
