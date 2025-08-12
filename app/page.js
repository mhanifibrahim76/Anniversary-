'use client'

import Anniversary from "./anniversary/Anniversary"
import BirthDay from "./birthday/BirthDay"


export default function Home() {
  return (
    <main className="bg-white">
      <Anniversary />
      <BirthDay />
    </main>
  )
}
