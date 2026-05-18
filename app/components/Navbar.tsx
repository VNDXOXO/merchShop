import Image from "next/image";
import { Search, User ,Cart} from '@boxicons/react';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-10 md:px-20 flex justify-between items-center z-40 bg-white shadow-sm">
       <div className="hidden md:flex space-x-5 text-sm tracking-widest">
        <a href="#">SHOP</a>
        <a href="#">COLLECTIONS</a>
       </div>
       <div>
        <a href="/" className="text-4xl font-light tracking-light">TÉE</a>
       </div>
       <div className="flex space-x-5 text-sm tracking-widest">
        <a href="#"><Search /></a>
        <a href="#"><User /></a>
        <a href="#"><Cart /></a>
       </div>
    </nav>
  );
}
