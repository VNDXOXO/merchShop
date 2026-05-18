import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "../../../lib/data";
import { getIdFromSlug } from "../../../lib/utils/slug";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idStr = getIdFromSlug(slug);
  const productId = parseInt(idStr, 10);
  
  const product = products.find((p) => p.id === productId);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-7xl mx-auto px-10 md:px-20 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="relative aspect-[4/5] bg-neutral-200 rounded-sm overflow-hidden shadow-lg">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Minimal Collection</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
          <p className="text-2xl font-light mb-8">{product.price}</p>
          
          <div className="w-full h-px bg-gray-200 mb-8" />
          
          <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
            {product.description}
          </p>
          
          <div className="mb-10">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">Details</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {product.details?.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full bg-black text-white py-4 font-semibold tracking-widest uppercase hover:bg-gray-900 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
