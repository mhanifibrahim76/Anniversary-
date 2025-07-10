'use client'

import Time from "../components/Time"
import AnniversaryContent from "./AnniversaryContent"
import { useEffect, useState } from "react"

const Anniversary = () => {
  const annivTime = new Date('2025-08-12T17:00:00Z') // = 13 Agustus 00.00 WIB
  const [timeLeft, setTimeLeft] = useState(annivTime.getTime() - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const remaining = annivTime.getTime() - now.getTime()
      setTimeLeft(0)
      if (remaining <= 0) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [annivTime])

  return timeLeft > 0
    ? <Time timeLeft={timeLeft} title="Anniversary Akan Dimulai" />
    : <AnniversaryContent />
}

export default Anniversary
