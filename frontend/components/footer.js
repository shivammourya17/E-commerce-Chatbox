import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Footer() {
  return (
    <footer className={`${jost.className} bg-gray-900 text-gray-200 py-8 px-4`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left font-jost text-lg font-medium">
          Made by <span className="text-pink-400 font-semibold"><a href="https://linkedin.com/in/ehsan-saleem-web3/"> Ehsan Saleem </a></span>
        </div>
        <a
          href="https://github.com/CodeFusionEhsan/Chatbot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md transition-all duration-300 hover:from-indigo-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-jost"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}