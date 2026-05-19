"use client";

import Image from "next/image";
import { Search, User, Cart, Parallel } from '@boxicons/react';
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <div className="relative w-full z-40">
      <nav className="w-full py-6 px-10 md:px-20 flex justify-between items-center bg-white shadow-sm relative z-40">
        <div className="hidden md:flex flex-1 items-center space-x-5 text-sm tracking-widest">
          <a href="#">SHOP</a>
          <a href="#">COLLECTIONS</a>
        </div>
        
        <div className="flex-shrink-0">
          <a href="/" className=" text-4xl font-medium tracking-light text-black paytone-one-regular">SH新IN</a>
        </div>
        
        <div className="flex-1 flex justify-end items-center space-x-5 text-sm tracking-widest">
          <a href="#"><Search /></a>
          <a href="#" className="hidden md:block"><User /></a>
          <button onClick={() => setIsCartOpen(true)} className="relative" aria-label="Open Cart">
            <Cart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden ml-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white z-30 shadow-lg border-t border-gray-100 flex flex-col py-6 px-10 space-y-6">
          <a href="#" className="text-lg tracking-widest hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>SHOP</a>
          <a href="#" className="text-lg tracking-widest hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>COLLECTIONS</a>
          <a href="#" className="text-lg tracking-widest hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>ACCOUNT</a>

        </div>
      )}
    </div>
  );
}
