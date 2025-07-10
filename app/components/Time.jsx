import React from "react";
import { motion } from "framer-motion"

const Time = ({ timeLeft, title }) => {
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl md:text-6xl font-bold mb-4 animate-bounce"
      >
        🎉 {title} 🎉
      </motion.h1>
      <p className="text-2xl">
        {days} hari {hours} jam {minutes} menit {seconds} detik
      </p>
    </div>
  );
};

export default Time;
