"use client";

import { useState, useMemo, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductForm({ product }: { product: any }) {
  const { addToCart } = useCart();
  const colors = Array.from(new Set(product.variants?.map((v: any) => v.color).filter(Boolean))) as string[];
  const sizes = Array.from(new Set(product.variants?.map((v: any) => v.size).filter(Boolean))) as string[];

  const [selectedColor, setSelectedColor] = useState<string | null>(colors.length > 0 ? colors[0] : null);
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes.length > 0 ? sizes[0] : null);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) return null;
    
    return product.variants.find(
      (v: any) => 
        (v.color === selectedColor || (!v.color && !selectedColor)) && 
        (v.size === selectedSize || (!v.size && !selectedSize))
    );
  }, [product.variants, selectedColor, selectedSize]);

  const availableQuantity = selectedVariant ? selectedVariant.quantity : (product.variants?.length === 0 ? product.quantity || 0 : 0);
  const currentPrice = selectedVariant && selectedVariant.price ? selectedVariant.price : product.price;
  const isOutOfStock = availableQuantity === 0;

  // Reset quantity if the available quantity changes and is less than selected
  useEffect(() => {
    if (quantity > availableQuantity && availableQuantity > 0) {
      setQuantity(availableQuantity);
    } else if (isOutOfStock) {
      setQuantity(1);
    }
  }, [availableQuantity, isOutOfStock, quantity]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    if (val > availableQuantity) setQuantity(availableQuantity);
    else if (val < 1) setQuantity(1);
    else setQuantity(val);
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: currentPrice,
      quantity: quantity,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      maxQuantity: availableQuantity
    });
  };

  return (
    <div className="flex flex-col">
      {/* Price */}
      {isOutOfStock ? (
        <p className="text-2xl font-semibold text-red-600 uppercase tracking-widest mb-8">Out of Stock</p>
      ) : (
        <p className="text-2xl font-light mb-8">රු{currentPrice}</p>
      )}

      <div className="w-full h-px bg-gray-200 mb-8" />
      
      <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
        {product.description}
      </p>
      
      {product.details && product.details.length > 0 && (
        <div className="mb-10">
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">Details</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {product.details.map((detail: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Selectors */}
      <div className="mb-8 flex flex-col space-y-6">
        {colors.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Color</h4>
            <div className="flex space-x-3">
              {colors.map((color) => {
                const isAvailable = product.variants.some((v: any) => v.color === color && v.quantity > 0);
                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'border-black scale-110' : 'border-transparent ring-1 ring-gray-300 hover:scale-105'
                    } ${!isAvailable && selectedColor !== color ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                );
              })}
            </div>
          </div>
        )}

        {sizes.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Size</h4>
            <div className="flex space-x-3 flex-wrap gap-y-3">
              {sizes.map((size) => {
                const isAvailable = product.variants.some((v: any) => v.color === selectedColor && v.size === size && v.quantity > 0);
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    disabled={!isAvailable}
                    className={`border px-4 py-2 text-sm uppercase tracking-widest transition-all min-w-[3rem] ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : isAvailable 
                          ? 'border-gray-300 hover:border-black text-black' 
                          : 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Quantity</h4>
          <div className="flex items-center border border-gray-300 w-32 h-11">
            <button 
              type="button" 
              className="px-4 h-full text-gray-600 hover:text-black hover:bg-gray-100 transition-colors flex items-center justify-center"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={isOutOfStock}
            >
              -
            </button>
            <input 
              type="number" 
              className="w-full h-full text-center text-sm appearance-none focus:outline-none bg-transparent" 
              value={isOutOfStock ? 0 : quantity}
              onChange={handleQuantityChange}
              min="1"
              max={availableQuantity > 0 ? availableQuantity : 1}
              disabled={isOutOfStock}
            />
            <button 
              type="button" 
              className="px-4 h-full text-gray-600 hover:text-black hover:bg-gray-100 transition-colors flex items-center justify-center"
              onClick={() => setQuantity(q => Math.min(availableQuantity, q + 1))}
              disabled={isOutOfStock}
            >
              +
            </button>
          </div>
          {availableQuantity > 0 && availableQuantity <= 5 && (
            <p className="text-xs text-red-500 mt-2">Only {availableQuantity} left in stock!</p>
          )}
        </div>
      </div>

      <button 
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={`w-full py-4 font-semibold tracking-widest uppercase transition-colors ${
          isOutOfStock 
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : 'bg-black text-white hover:bg-gray-900'
        }`}
      >
        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}
