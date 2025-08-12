"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SectionThree() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #ffe6ec)",
        perspective: "1000px", // penting untuk 3D
      }}
    >
      {/* Card Wrapper */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative w-[320px] h-[220px] cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center px-6 py-4 border border-pink-200"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <h2 className="text-3xl font-bold text-pink-600">To My Dearest ❤️</h2>
          <p className="mt-4 text-gray-700 text-center">
            Tap to see my special message for you
          </p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-pink-50 rounded-2xl shadow-2xl flex flex-col items-center justify-center px-6 py-4 border border-pink-200"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h2 className="text-2xl font-bold text-pink-600">My Love 💖</h2>
          <p className="mt-4 text-gray-700 text-center">
            You are my sunshine, my happiness, and my everything.  
            I love you more than words can express.
          </p>
        </div>
      </div>

      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 16}px`,
            color: i % 2 === 0 ? "#ff7aa2" : "#ff4d88",
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: Math.random() * 4 + 4,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </section>
  );
}
