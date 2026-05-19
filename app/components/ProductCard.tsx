import { generateProductSlug } from "../../lib/utils/slug";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({product}: {product: any}) {
    return (
      <Link key={product.id} href={`/products/${generateProductSlug(product.name, product.id)}`} className="group cursor-pointer block">
        <div className="relative aspect-[4/5] bg-[#121212] rounded-sm overflow-hidden mb-4 shadow-lg ring-1 ring-white/5">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className={`object-cover opacity-90 transition-all duration-700 ease-out ${product.quantity === 0 ? 'grayscale' : 'group-hover:opacity-100 group-hover:scale-105'}`} 
          />
          {product.quantity === 0 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-sm border border-white px-3 py-1 bg-black/40 backdrop-blur-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between items-center text-sm tracking-wider">
            <h4 className="font-medium text-black">{product.name}</h4>
            {product.quantity === 0 ? (
              <span className="text-red-600 font-semibold text-xs uppercase">Out of Stock</span>
            ) : (
              <span className="text-black font-semibold">රු{product.price}</span>
            )}
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Minimal Collection</p>
        </div>
      </Link>
    );
}