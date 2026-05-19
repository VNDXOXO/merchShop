"use client";

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { generateProductSlug } from '../../lib/utils/slug';
import Link from 'next/link';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold tracking-widest uppercase">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-black text-white px-8 py-3 tracking-widest uppercase hover:bg-gray-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <Link href={`/products/${generateProductSlug(item.name, item.productId)}`} onClick={() => setIsCartOpen(false)} className="relative w-24 h-32 flex-shrink-0 bg-gray-50">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </Link>
                
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link href={`/products/${generateProductSlug(item.name, item.productId)}`} onClick={() => setIsCartOpen(false)}>
                        <h3 className="font-medium text-black hover:underline">{item.name}</h3>
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-500 mt-1 space-y-1">
                      {item.color && <p>Color: <span className="capitalize">{item.color}</span></p>}
                      {item.size && <p>Size: <span className="uppercase">{item.size}</span></p>}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-300 h-8">
                      <button 
                        className="px-2 h-full text-gray-600 hover:text-black hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 h-full text-gray-600 hover:text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.maxQuantity}
                      >
                        +
                      </button>
                    </div>
                    <p className="font-medium text-black">රු{item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Subtotal</span>
              <span>රු{cartTotal}</span>
            </div>
            <p className="text-sm text-gray-500 text-center">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-black text-white py-4 font-semibold tracking-widest uppercase hover:bg-gray-900 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
