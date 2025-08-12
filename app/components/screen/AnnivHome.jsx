'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const message = `Our first year is just the beginning of our forever. ❤️`;

export default function Home() {
  // Typing effect state
  const [displayText, setDisplayText] = useState("");
  // Parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Mouse move handler
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  }

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 10, delay: 0.3 }
    }
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Background gradient */}
      <div
      />


      {/* Main content */}
      <motion.div
        onMouseMove={handleMouseMove}
        className="flex max-w-7xl w-full items-center justify-center px-4 py-8 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-lg shadow-2xl bg-white/40 backdrop-blur-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full h-full items-center">
          {/* LEFT: Photos */}
          <div className="relative flex justify-center items-center h-full">
            {/* Top photo */}
            <motion.div
              initial={{ opacity: 0, y: -50, rotate: -8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: -8, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                x: mousePos.x * 15,
                y: mousePos.y * 15,
              }}
              className="absolute -top-4 left-8 md:left-12 w-40 md:w-52 lg:w-60 z-10 shadow-[0_0_30px_rgba(255,118,150,0.4)]"
            >
              <div className="bg-white p-2 rounded-sm">
                <Image
                  src="/images/photo-anniv-1.jpg"
                  alt="Laughing couple"
                  width={500}
                  height={500}
                  className="rounded-sm object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom photo */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: 10, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                x: mousePos.x * 8,
                y: mousePos.y * 8,
              }}
              
              className="absolute top-36 left-28 md:left-32 w-40 md:w-52 lg:w-60 z-0 shadow-[0_0_30px_rgba(255,118,150,0.4)]"
            >
              <div className="bg-white p-2 rounded-sm">
                <Image
                  src="/images/photo-anniv-2.jpg"
                  alt="Smiling couple"
                  width={500}
                  height={500}
                  className="rounded-sm object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start items-center text-center lg:text-left px-4"
          >
            <h2
              className={`${scriptFont.className} text-red-600 text-4xl md:text-6xl lg:text-7xl italic leading-snug max-w-[500px]`}
            >
              {displayText}
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
