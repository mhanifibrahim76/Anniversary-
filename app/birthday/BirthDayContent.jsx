import { motion } from "framer-motion";

const BirthDayContent = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen text-blue-800 text-center bg-yellow-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-5xl font-bold">❤️ Happy BirthDay! 🎉</h1>
    </motion.div>
  );
};

export default BirthDayContent;
