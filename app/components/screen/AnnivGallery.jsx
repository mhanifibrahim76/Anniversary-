'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Great_Vibes } from 'next/font/google';
import Card from '../Card';

const scriptFont = Great_Vibes({ weight: '400', subsets: ['latin'] });

const cardsData = [
  { 
    imageSrc: '/images/anniv/1.jpg', 
    title: 'My Beautiful One', 
    description: 'Wajahmu selalu jadi lukisan terindah di mataku. 💖' 
  },
  { 
    imageSrc: '/images/anniv/2.jpg', 
    title: 'Your Smile', 
    description: 'Senyummu mampu menghapus semua lelahku. ✨' 
  },
  { 
    imageSrc: '/images/anniv/3.jpg', 
    title: 'The Way You Shine', 
    description: 'Kamu bersinar lebih indah dari bintang manapun di langit. 🌟' 
  },
  { 
    imageSrc: '/images/anniv/4.jpg', 
    title: 'Your Eyes', 
    description: 'Tatapanmu adalah tempat pulang yang selalu kurindukan. 👀' 
  },
  { 
    imageSrc: '/images/anniv/5.jpg', 
    title: 'Forever Us', 
    description: 'Bersamamu adalah cerita yang ingin kutulis selamanya. 🕊️' 
  },
  { 
    imageSrc: '/images/anniv/6.jpg', 
    title: 'Your Voice', 
    description: 'Suaranya seperti lagu yang menenangkan hatiku. 🎶' 
  },
  { 
    imageSrc: '/images/anniv/7.jpg', 
    title: 'My Queen', 
    description: 'Kamu adalah ratu di kerajaan kecil dalam hatiku. 👑' 
  },
  { 
    imageSrc: '/images/anniv/8.jpg', 
    title: 'Endless Love', 
    description: 'Cintaku padamu tak akan pernah habis, selamanya. ❤️' 
  },
];


// Posisi & rotasi kartu
const fixedPositions = [
  { top: 5, left: 5, rotate: -10 },
  { top: 10, left: 25, rotate: 12 },
  { top: 25, left: 10, rotate: -8 },
  { top: 35, left: 30, rotate: 18 },
  { top: 50, left: 20, rotate: -15 },
  { top: 55, left: 40, rotate: 7 },
  { top: 70, left: 25, rotate: -12 },
  { top: 75, left: 45, rotate: 10 },
];

const text = `I Love You. My Love. My Everything. ❤️`;

export default function GalleryWithText() {
  const [hoveredId, setHoveredId] = useState(null);
  const [displayText, setDisplayText] = useState('');

  // Motion values untuk parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Animasi typing
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse move
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  }

  // Variants teks
  const textVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 10, delay: 0.6 },
    },
  };

  // Variants container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 to-pink-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        className="flex max-w-7xl w-full px-4 pt-12 pb-6 relative h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #ffffff, #fceee9, #fde6ec)',
        }}
      >
        {/* LEFT: Cards */}
        <div className="relative w-1/2 h-full">
          {fixedPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute cursor-pointer"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                rotate: `${pos.rotate}deg`,
                zIndex: hoveredId === i ? 100 : 10,
                x: smoothX.get() * 2, // gerakan pelan
                y: smoothY.get() * 2,
              }}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.05, rotate: pos.rotate + 2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              <Card
                imageSrc={cardsData[i].imageSrc}
                title={cardsData[i].title}
                description={cardsData[i].description}
                smaller
              />
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="w-1/2 flex justify-center lg:justify-start items-center text-center lg:text-left px-4 select-none"
          style={{
            x: smoothX.get() * 4,
            y: smoothY.get() * 4,
          }}
        >
          <h2
            className={`${scriptFont.className} text-red-600 text-4xl md:text-6xl lg:text-7xl italic leading-snug max-w-[500px]`}
          >
            {displayText}
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
