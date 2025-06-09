"use client";
import { motion } from "framer-motion";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function HeroSection() {
  return (
    <section className={`${jost.className} relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-900 px-4 sm:px-6 lg:px-8`}>
      {/* Decorative background gradient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
        className="z-10 w-full max-w-xl sm:max-w-2xl px-4 sm:px-8 py-10 sm:py-16 bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-2xl sm:rounded-3xl flex flex-col items-center text-center"
      >
        <h1 className="font-jost text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-4 tracking-tight leading-tight">
          Supercharge Your E-commerce Sales with AI Chatbot
        </h1>
        <p className="font-jost text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 font-medium max-w-lg">
          Engage shoppers, boost conversions, and automate support—24/7. Experience the future of online sales with our intelligent chatbot.
        </p>
        <motion.a
          href="https://github.com/CodeFusionEhsan/Chatbot"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          View on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}
