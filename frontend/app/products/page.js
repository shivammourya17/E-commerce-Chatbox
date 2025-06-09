"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Jost } from "next/font/google";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 90, damping: 16 },
  }),
};

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState("50")

  const fetchProducts = async () => {
     const response = await fetch('http://127.0.0.1:8000/getProducts/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        limit: limit
      })
    })

    const data = await response.json()

    setProducts(data.products)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const handleLoadMore = () => {
    setLimit(String(Number(limit) + 10))
    fetchProducts()
  }

  return (
    <section className={`${jost.className} py-14 px-4 sm:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-jost text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Products
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-lg text-gray-500 dark:text-gray-300">Loading products...</span>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.15)" }}
              >
                <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <a href={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-contain h-full w-full"
                  />
                  </a>
                </div>
                <div className="flex-1 flex flex-col p-5">
                    <a href={`/product/${product.id}`}>
                  <h3 className="font-jost text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h3>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-indigo-600 dark:text-pink-400 text-lg">
                      ${product.price}
                    </span>
                    <span className="bg-indigo-100 dark:bg-pink-950 text-indigo-700 dark:text-pink-300 text-xs font-medium px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.button
            onClick={handleLoadMore}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-jost"
            >
            Load More
            </motion.button>
        </motion.div>
    </section>
  );
}
