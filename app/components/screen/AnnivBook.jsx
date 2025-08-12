'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const contentPages = [
  {
    title: "Chapter 1: Harapan",
    text: "Aku yang hanya manusia biasa, untuk pertama kalinya merasakan perasaan yang begitu dalam. Perasaan yang membuatku berani bermimpi. Aku merasakan bahwa mungkin kamu orangnya. Namun pernyataan pertama itu tidak berjalan mulus. Aku hanya bisa berharap kamu merasakan hal yang sama.",
    img: "/images/2.jpg",
  },
  {
    title: "Chapter 2: Ikatan",
    text: "Namun takdir itu aneh, penolakan yang seharusnya membuat asing, berbalik menjadi sebuah kesempatan. Melupakan pernyataan pertama, aku berusaha untuk mengenalmu lebih dekat. Kita mulai berbagi cerita, tawa, dan bahkan air mata. Dan pada 1 ketika diwaktu yang tepat, kamu menerima perasaanku. Kita mulai menjalin ikatan yang lebih kuat.",
    img: "/images/3.jpg",
  },
  {
    title: "Chapter 3: Janji",
    text: "Satu tahun berlalu sejak kamu menerima perasaanku. Namun, Janji yang muncul dari ikatan yang kita buat, semakin kuat, janji yang pada akhir cerita ini akan membawa kita ke sebuah komitmen yang lebih dalam. Kita berjanji untuk saling mendukung, mencintai, dan menjaga satu sama lain. Janji itu menjadi fondasi dari hubungan kita.",
    img: "/images/1.jpg",
  },
];

export default function FlipBook() {
  const pages = [
    { cover: true, front: "front" }, // Cover depan
    ...contentPages,
    { cover: true, front: "back" }, // Cover belakang
  ];

  const [flippedPages, setFlippedPages] = useState(
    Array(pages.length).fill(false)
  );
  const [activeFlip, setActiveFlip] = useState(null);

  const handleFlip = (index, flip) => {
    setActiveFlip(index);
    setFlippedPages((prev) => {
      const newState = [...prev];
      newState[index] = flip;
      return newState;
    });
    setTimeout(() => setActiveFlip(null), 700);
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="flex max-w-7xl w-full items-center justify-center px-4 pt-12 pb-6 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-lg">
        
        {/* Buku */}
        <div className="relative w-[280px] h-[420px] flex justify-center [perspective:1500px]">
          {pages.map((page, index) => {
            const isFlipped = flippedPages[index];
            const isActive = activeFlip === index;
            const isCover = page.cover;

            return (
              <motion.div
                key={index}
                className={`absolute top-0 left-0 w-full h-full origin-left [transform-style:preserve-3d]`}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                  zIndex: isActive
                    ? pages.length + 1
                    : isFlipped
                    ? index
                    : pages.length - index,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {/* Halaman Depan */}
                <div
                  className={`absolute w-full h-full ${
                    isCover
                      ? "bg-gradient-to-br from-[#8B4513] to-[#5c2e0f]"
                      : "bg-white"
                  } p-5 shadow-lg rounded-r-lg backface-hidden flex flex-col ${
                    isCover ? "border-y-[10px] border-[#5c2e0f]" : ""
                  }`}
                >
                  {isCover ? (
                    <div className="flex flex-col justify-between h-full">
                      <h1 className="text-white font-bold text-2xl tracking-widest drop-shadow">
                        {page.front === "front" ? "Our Story" : "End of Story"}
                      </h1>
                      <button
                        className="self-end text-white text-2xl hover:scale-110 transition"
                        onClick={() => handleFlip(index, true)}
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl text-black font-bold border-b pb-1">{page.title}</h2>
                      <p className="text-sm leading-5 mt-2 flex-1 text-gray-700">
                        {page.text}
                      </p>
                      <button
                        className="self-end mt-4 text-gray-600 text-2xl hover:scale-110 transition"
                        onClick={() => handleFlip(index, true)}
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </>
                  )}
                </div>

                {/* Halaman Belakang */}
                <div
                  className={`absolute w-full h-full rotate-y-180 backface-hidden rounded-l-lg overflow-hidden shadow-lg ${
                    isCover
                      ? "bg-gradient-to-br from-[#8B4513] to-[#5c2e0f] border-y-[10px] border-[#5c2e0f]"
                      : "bg-white"
                  }`}
                >
                  {isCover ? (
                    <div className="flex flex-col justify-between h-full p-5">
                      <button
                        className="text-white text-2xl hover:scale-110 transition"
                        onClick={() => handleFlip(index, false)}
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={page.img}
                        alt={page.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent">
                        <button
                          className="text-white text-2xl hover:scale-110 transition"
                          onClick={() => handleFlip(index, false)}
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
