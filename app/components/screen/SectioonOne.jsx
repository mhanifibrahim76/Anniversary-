"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SectionOne() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax values
  const yBalloon1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yBalloon2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6 bg-gradient-to-b from-pink-200 via-pink-100 to-white"
    >
      {/* Ornamen bintang */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Judul */}
      <motion.h1
        style={{ scale: scaleTitle }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-bold text-pink-600 drop-shadow-xl font-[cursive]"
      >
        Happy Birthday 🎉
      </motion.h1>

      {/* Subjudul */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-2xl text-gray-700 max-w-xl"
      >
        Today we celebrate you, my love ❤️
      </motion.p>

      {/* Balon */}
      <motion.div style={{ y: yBalloon1 }} className="absolute bottom-10 left-10">
        <Image src="/images/balloon1.png" width={120} height={120} alt="Balloon" />
      </motion.div>
      <motion.div style={{ y: yBalloon2 }} className="absolute top-20 right-10">
        <Image src="/images/balloon2.png" width={140} height={140} alt="Balloon" />
      </motion.div>
    </section>
  );
}
