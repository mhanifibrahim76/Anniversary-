'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const releaseTime = new Date('2025-07-05T01:00:00Z') // 08:00 WIB
  const [now, setNow] = useState(new Date())
  const [timeLeft, setTimeLeft] = useState(releaseTime.getTime() - now.getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date()
      setNow(current)
      setTimeLeft(releaseTime.getTime() - current.getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (timeLeft > 0) {
    const seconds = Math.floor((timeLeft / 1000) % 60)
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
    const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24)
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24)

    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl font-bold mb-4 animate-bounce"
        >
          🎉 Website Akan Terbuka Sebentar Lagi 🎉
        </motion.h1>
        <p className="text-2xl">
          {days} hari {hours} jam {minutes} menit {seconds} detik
        </p>
      </div>
    )
  }

  return (
    <motion.div
      className="flex items-center justify-center h-screen text-pink-800 text-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-5xl font-bold">💖 Happy Anniversary 💖</h1>
    </motion.div>
  )
}
