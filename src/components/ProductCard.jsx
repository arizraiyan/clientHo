import React from "react";
import { Eye, ShoppingBag, Sparkles, Check } from "lucide-react";
import { BUSINESS_CONFIG } from "../lib/whatsapp";

export default function ProductCard({ product, onViewDetails, onOrderNow }) {
  // Find default weight tier or first tier
  const defaultWeight = product.weightOptions.find((w) => w.isDefault) || product.weightOptions[0];

  return (
    <article className="group relative bg-[#FFFAF1] rounded-3xl border border-[#71351F]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#4A1F12]/5">
        <img
          src={product.image}
          alt={`${product.name} (${product.bengaliName}) - Food Basket BD`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Product Code Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#32130C]/80 text-[#FFF5E6] backdrop-blur-md border border-white/10 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6B52E]" />
            {product.code}
          </span>
        </div>

        {/* Badge: Most Loved / Sweet Delight */}
        {product.badge && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-[#E6B52E] text-[#32130C] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {product.badge}
            </span>
          </div>
        )}

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-[#32130C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
          <button
            onClick={() => onViewDetails(product)}
            className="px-4 py-2 bg-white/95 text-[#32130C] hover:bg-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#71351F]" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-6">
        <div>
          {/* Bengali & English Titles */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bengali text-2xl font-bold text-[#32130C] leading-snug group-hover:text-[#71351F] transition-colors">
                {product.bengaliName}
              </h3>
              <p className="font-serif-title text-base text-[#71351F] font-semibold mt-0.5">
                {product.name}
              </p>
            </div>
            
            {/* Price Preview */}
            <div className="text-right shrink-0">
              <p className="text-[11px] uppercase tracking-wider text-[#71351F]/80 font-medium">
                Starting from
              </p>
              <p className="font-sans text-xl sm:text-2xl font-bold text-[#32130C] tabular-nums">
                {BUSINESS_CONFIG.currencySymbol}{product.weightOptions[0].price}
              </p>
            </div>
          </div>

          {/* Short Description */}
          <p className="font-bengali text-sm text-[#28201B]/80 leading-relaxed mt-3">
            {product.shortDescription}
          </p>

          {/* Available Variants preview */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#71351F]/10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71351F]">
                উপলব্ধ ভ্যারিয়েন্ট ({product.variants.length}টি):
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {product.variants.map((v) => (
                  <span
                    key={v.code}
                    className="text-xs bg-[#FFF5E6] text-[#32130C] border border-[#71351F]/20 px-2.5 py-0.5 rounded-md font-bengali"
                  >
                    {v.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Available Weights Preview */}
          <div className="mt-3.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71351F]">
              প্যাক সাইজ:
            </span>
            <div className="flex flex-wrap gap-2 mt-1.5 text-xs text-[#28201B]/90 font-medium">
              {product.weightOptions.map((w) => (
                <span
                  key={w.weight}
                  className={`px-2.5 py-1 rounded-md border text-xs tabular-nums ${
                    w.isDefault
                      ? "bg-[#4A1F12] text-[#FFF5E6] border-[#4A1F12]"
                      : "bg-[#FFF5E6] text-[#32130C] border-[#71351F]/20"
                  }`}
                >
                  {w.weight} — {BUSINESS_CONFIG.currencySymbol}{w.price}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#71351F]/10 grid grid-cols-2 gap-3">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full py-2.5 px-3 bg-[#FFF5E6] hover:bg-white text-[#4A1F12] border border-[#71351F]/20 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Eye className="w-4 h-4 text-[#71351F]" />
            <span>View Details</span>
          </button>

          <button
            onClick={() => onOrderNow(product)}
            className="w-full py-2.5 px-3 bg-[#4A1F12] hover:bg-[#32130C] text-[#FFF5E6] rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 group-hover:bg-[#32130C]"
          >
            <ShoppingBag className="w-4 h-4 text-[#E6B52E]" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </article>
  );
}
