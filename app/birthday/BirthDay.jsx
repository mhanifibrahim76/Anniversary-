'use client'

import { useState,useEffect } from 'react'
import BirthDayContent from './BirthDayContent'
import Time from '../components/Time'

const BirthDay = () => {
   const BirthDayTime = new Date('2025-08-21T17:00:00Z') // = 22 Agustus 00.00 WIB
  const [timeLeft, setTimeLeft] = useState(BirthDayTime.getTime() - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const remaining = BirthDayTime.getTime() - now.getTime()
      setTimeLeft(remaining)
      if (remaining <= 0) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [BirthDayTime])

  return timeLeft > 0
    ? <Time timeLeft={timeLeft} title="BirthDay Akan Dimulai" />
    : <BirthDayContent />
}

export default BirthDay
