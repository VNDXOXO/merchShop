import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../lib/data";
import { generateProductSlug } from "../../lib/utils/slug";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default async function ProductGrid({gridTitle}:{gridTitle:String}) {
  const products = await getProducts();
  return (
    <section className="py-24 px-10 md:px-20">
      <ScrollReveal>
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase">{gridTitle}</h3>
          <a href="#" className="text-sm text-black-400 hover:text-white transition-colors tracking-widest uppercase">View All</a>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 0.1}>
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
