import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Marquee />
      <Hero />
      <Marquee/>
      <ProductGrid />
      <Footer />
    </main>
  );
}