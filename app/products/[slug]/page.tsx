import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById } from "../../../lib/data";
import { getIdFromSlug } from "../../../lib/utils/slug";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductForm from "../../components/ProductForm";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idStr = getIdFromSlug(slug);
  const productId = parseInt(idStr, 10);
  
  const product = await getProductById(productId);
  
  if (!product) {
    notFound();
  }

  const totalQuantity = product.variants?.reduce((sum: number, v: any) => sum + (v.quantity || 0), 0) || 0;

  return (
    <main className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-7xl mx-auto px-10 md:px-20 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="relative aspect-[4/5] bg-neutral-200 rounded-sm overflow-hidden shadow-lg">
          <Image 
            src={product.image} 
            alt={product.name || ""} 
            fill 
            className={`object-cover ${totalQuantity === 0 ? 'grayscale opacity-80' : ''}`} 
            priority
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Minimal Collection</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
          <ProductForm product={product} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
