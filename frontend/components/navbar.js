'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Jost } from "next/font/google";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`${jost.className} bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white`}>
      {/* Navbar */}
      <nav className="px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold"><a href="/">Chatbot UI</a></h1>
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden sm:flex gap-4 items-center">
            <a href="/products" className="hover:text-blue-500 transition">Products</a>
            <SignedOut>
              <SignInButton className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-4 mt-4 sm:hidden">
            <a href="/products" className="hover:text-blue-500 transition">Products</a>
             <SignedOut>
              <SignInButton className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        )}
      </nav>
    </div>
  );
}
