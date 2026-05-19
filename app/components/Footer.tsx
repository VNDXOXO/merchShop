import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-20 px-10 md:px-20 border-t border-white/10 text-gray-400">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          
            <div className="flex flex-col">
              <a href="/" className="text-7xl font-bold text-white">新</a>
              <span className="text-1xl font-bold text-white tracking-[.55em] mb-4">SHIN</span>
            </div>
            
            <p className="text-sm max-w-sm leading-relaxed text-gray-400">
              The Streetwear.
            </p>
          
        </div>
        <div>
          
            <h5 className="text-white font-semibold mb-6 text-xs tracking-[0.2em] uppercase">Shop</h5>
            <ul className="space-y-4 text-sm tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trousers</a></li>
            </ul>
          
        </div>
        <div>
          
            <h5 className="text-white font-semibold mb-6 text-xs tracking-[0.2em] uppercase">Support</h5>
            <ul className="space-y-4 text-sm tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          
        </div>
      </div>
      
        <div className="w-full mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-gray-500">
          <p>&copy; {new Date().getFullYear()} SHIN. All rights reserved.</p>
          <div className="space-x-6 mt-6 md:mt-0 uppercase">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      
    </footer>
  );
}
