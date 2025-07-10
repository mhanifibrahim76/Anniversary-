import { motion } from "framer-motion";
import { useState } from "react";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className=" h-96 w-64 perspective cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
       <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white shadow-md">
          <img
            src="/images/birthday/cake.png"
            alt="Cake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-pink-100 rounded-xl shadow-md flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-bold text-pink-700 mb-2">Happy Birthday!</h2>
          <p className="text-center text-gray-700">
            Semoga harimu penuh cinta dan kebahagiaan! 🎉
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Card;
