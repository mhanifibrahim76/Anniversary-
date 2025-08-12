"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionTwo() {
  const message = "Wishing you endless happiness, laughter, and love 💖";

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-white px-8 py-20">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="w-60 h-60 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg"
      >
        <Image src="/images/cewekku.jpg" alt="My Love" width={240} height={240} className="object-cover" />
      </motion.div>
      <motion.p
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="text-2xl font-semibold text-gray-800 overflow-hidden whitespace-nowrap border-r-2 border-pink-500"
        style={{ animation: "typing 3s steps(40) 1s forwards" }}
      >
        {message}
      </motion.p>
    </section>
  );
}
