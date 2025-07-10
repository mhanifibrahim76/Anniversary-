import { motion } from 'framer-motion'
import Card from '../components/Card'

const AnniversaryContent = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen text-blue-800 text-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Card />
      {/* Hori => Miyamura => Together With Animation */}
    </motion.div>
  )
}

export default AnniversaryContent
