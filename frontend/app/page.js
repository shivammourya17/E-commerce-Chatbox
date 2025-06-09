import Image from "next/image";
import HeroSection from "../components/hero";
import ProductsSection from "@/components/products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
    </div>
  );
}
