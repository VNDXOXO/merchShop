import Image from "next/image";
import Link from "next/link";
import { products } from "../../lib/data";
import { generateProductSlug } from "../../lib/utils/slug";

export default function ProductGrid() {
  return (
    <section className="py-24 px-10 md:px-20">
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
        <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase">New Arrivals 🔥</h3>
        <a href="#" className="text-sm text-black-400 hover:text-white transition-colors tracking-widest uppercase">View All</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${generateProductSlug(product.name, product.id)}`} className="group cursor-pointer block">
            <div className="relative aspect-[4/5] bg-[#121212] rounded-sm overflow-hidden mb-4 shadow-lg ring-1 ring-white/5">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center text-sm tracking-wider">
                <h4 className="font-medium text-black">{product.name}</h4>
                <span className="text-black font-semibold">{product.price}</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Minimal Collection</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
