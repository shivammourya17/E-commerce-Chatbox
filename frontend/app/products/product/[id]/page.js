// app/products/[id]/page.jsx

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Truck, ShieldCheck } from "lucide-react";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    // Fetch product
    fetch(`http://127.0.0.1:8000/getProduct`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product[0]);
        setReviews(data.product[0].reviews)
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-purple-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <span className="text-lg text-gray-600 dark:text-gray-300 font-jost">Loading product...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-purple-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <span className="text-lg text-red-500 font-jost">Product not found.</span>
      </div>
    );
  }

  return (
    <div className={`${jost.className} min-h-screen bg-gradient-to-br from-white via-purple-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-4 sm:px-8`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70, damping: 16 }}
          className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl flex flex-col md:flex-row overflow-hidden"
        >
          {/* Product Image */}
          <div className="md:w-1/2 bg-gradient-to-br from-purple-100 via-indigo-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-6 md:p-10">
            <motion.img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-2xl object-contain w-full h-64 md:h-80 shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col justify-between p-6 md:p-10">
            <div>
              <span className="uppercase text-xs tracking-widest text-purple-400 font-bold font-jost mb-2 block">
                {product.brand}
              </span>
              <h1 className="font-jost text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.round(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 dark:text-gray-700"
                      }
                      fill={i < Math.round(product.rating) ? "#facc15" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-300 ml-2 font-jost">
                  {product.rating} / 5
                </span>
                <span className="ml-4 text-xs bg-indigo-100 dark:bg-pink-950 text-indigo-700 dark:text-pink-300 px-2 py-1 rounded font-jost">
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 font-jost text-base md:text-lg mb-4">
                {product.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-indigo-600 dark:text-pink-400 font-jost">
                  ${product.price}
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-semibold font-jost">
                  Category: {product.category}
                </span>
              </div>
              {/* Product Features */}
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle2 size={18} /> 100% Authentic
                </span>
                <span className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400">
                  <Truck size={18} /> Free Shipping
                </span>
                <span className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-300">
                  <ShieldCheck size={18} /> 7-Day Return Policy
                </span>
              </div>
            </div>
            <motion.button
              disabled
              whileHover={{ scale: 1.03 }}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-bold font-jost text-lg shadow-md opacity-70 cursor-not-allowed"
            >
              Order (Demo Only)
            </motion.button>
          </div>
        </motion.div>
        {/* Additional Images */}
        {product.images && product.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {product.images.slice(1, 5).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product image ${idx + 2}`}
                className="rounded-xl object-cover w-full h-28 sm:h-32 md:h-36 shadow"
              />
            ))}
          </motion.div>
        )}

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-jost font-bold mb-4 text-gray-900 dark:text-white">
            Customer Reviews
          </h2>
          {reviews.length === 0 ? (
            <div className="text-gray-500 dark:text-gray-400">No reviews yet.</div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <div key={idx} className="border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-jost font-semibold text-gray-800 dark:text-gray-200">
                      {review.reviewerName || review.user}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {review.reviewerEmail}
                    </span>
                    <div className="flex items-center ml-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-700"
                          }
                          fill={i < review.rating ? "#facc15" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-jost text-gray-700 dark:text-gray-300 text-sm mb-1">{review.comment || review.body}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
