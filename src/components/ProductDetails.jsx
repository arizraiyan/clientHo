import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ShoppingBag, Sparkles, Plus, Minus, ShieldCheck, Heart } from "lucide-react";
import { BUSINESS_CONFIG } from "../lib/whatsapp";

export default function ProductDetails({ product, isOpen, onClose, onOrderNow }) {
  // Safe early return
  if (!product) return null;

  // Selected variant state
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  // Selected weight tier state
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions.find((w) => w.isDefault) || product.weightOptions[0]
  );

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Sync state if product prop changes
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants && product.variants.length > 0 ? product.variants[0] : null);
      setSelectedWeight(product.weightOptions.find((w) => w.isDefault) || product.weightOptions[0]);
      setQuantity(1);
    }
  }, [product]);

  // Handle ESC key for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const unitPrice = selectedWeight ? selectedWeight.price : 0;
  const totalPrice = unitPrice * quantity;

  const handleProceedToOrder = () => {
    onOrderNow(product, {
      variant: selectedVariant,
      weight: selectedWeight ? selectedWeight.weight : "250g",
      unitPrice,
      quantity,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#32130C]/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#FFF5E6] rounded-3xl shadow-2xl border border-[#71351F]/20 overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FFFAF1] hover:bg-white text-[#4A1F12] border border-[#71351F]/15 flex items-center justify-center shadow-md transition-all active:scale-90"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Product Image & Badges */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-[#4A1F12]/5 border border-[#71351F]/15 shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#32130C]/85 text-[#FFF5E6] backdrop-blur-md">
                        {product.code}
                      </span>
                    </div>
                    {product.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E6B52E] text-[#32130C] shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Trust bullets */}
                  <div className="p-4 rounded-xl bg-[#FFFAF1] border border-[#71351F]/10 space-y-2 text-xs text-[#28201B]/80 font-bengali">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#4B7A36] shrink-0" />
                      <span>কোনো ভেজাল বা কৃত্রিম রঙ নেই</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#71351F] shrink-0" />
                      <span>ঘরোয়া পরম মমতায় স্বাস্থ্যসম্মত উপায়ে প্রস্তুত</span>
                    </div>
                  </div>
                </div>

                {/* Right: Product Details & Controls */}
                <div className="lg:col-span-7 flex flex-col space-y-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#71351F]">
                      Food Basket BD · {product.code}
                    </span>
                    <h2
                      id="product-modal-title"
                      className="font-bengali text-2xl sm:text-3xl font-bold text-[#32130C] mt-1"
                    >
                      {product.bengaliName}
                    </h2>
                    <p className="font-serif-title text-lg text-[#71351F] font-semibold">
                      {product.name}
                    </p>
                  </div>

                  {/* Full Description */}
                  <p className="font-bengali text-sm text-[#28201B]/85 leading-relaxed">
                    {product.fullDescription}
                  </p>

                  {/* Variants Selection (if present) */}
                  {product.variants && product.variants.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#32130C]">
                          ভ্যারিয়েন্ট নির্বাচন করুন:
                        </label>
                        {selectedVariant && (
                          <span className="text-xs text-[#71351F] font-mono">
                            Code: {selectedVariant.code}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.variants.map((v) => {
                          const isSelected = selectedVariant?.code === v.code;
                          return (
                            <button
                              key={v.code}
                              type="button"
                              onClick={() => setSelectedVariant(v)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#4A1F12] text-[#FFF5E6] border-[#4A1F12] shadow-sm"
                                  : "bg-[#FFFAF1] hover:bg-white text-[#28201B] border-[#71351F]/20"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-xs sm:text-sm">
                                  {v.name}
                                </span>
                                {isSelected && <Check className="w-4 h-4 text-[#E6B52E]" />}
                              </div>
                              <span
                                className={`text-[11px] block mt-0.5 ${
                                  isSelected ? "text-[#FFF5E6]/80" : "text-[#71351F]"
                                }`}
                              >
                                {v.bengaliName} ({v.code})
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Weight Options */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#32130C]">
                      প্যাক সাইজ / ওজন নির্বাচন করুন:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {product.weightOptions.map((w) => {
                        const isSelected = selectedWeight.weight === w.weight;
                        return (
                          <button
                            key={w.weight}
                            type="button"
                            onClick={() => setSelectedWeight(w)}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#4A1F12] text-[#FFF5E6] border-[#4A1F12] shadow-sm"
                                : "bg-[#FFFAF1] hover:bg-white text-[#28201B] border-[#71351F]/20"
                            }`}
                          >
                            <span className="block text-xs sm:text-sm font-bold">
                              {w.weight}
                            </span>
                            <span
                              className={`block text-xs font-semibold mt-0.5 ${
                                isSelected ? "text-[#E6B52E]" : "text-[#71351F]"
                              }`}
                            >
                              {BUSINESS_CONFIG.currencySymbol}{w.price}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quantity and Price Calculation Strip */}
                  <div className="p-4 rounded-2xl bg-[#FFFAF1] border border-[#71351F]/15 flex flex-wrap items-center justify-between gap-4">
                    {/* Quantity stepper */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#32130C]">পরিমাণ:</span>
                      <div className="flex items-center bg-white border border-[#71351F]/20 rounded-lg overflow-hidden shadow-2xs">
                        <button
                          type="button"
                          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                          disabled={quantity <= 1}
                          className="p-2 hover:bg-[#FFF5E6] text-[#4A1F12] disabled:opacity-40 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3.5 py-1 text-sm font-bold text-[#32130C] tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((prev) => prev + 1)}
                          className="p-2 hover:bg-[#FFF5E6] text-[#4A1F12] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Calculated Total */}
                    <div className="text-right">
                      <span className="text-[11px] uppercase tracking-wider text-[#71351F] block font-medium">
                        সর্বমোট মূল্য (Total)
                      </span>
                      <span className="font-sans text-2xl font-bold text-[#32130C] tabular-nums">
                        {BUSINESS_CONFIG.currencySymbol}{totalPrice}
                      </span>
                      <span className="text-[10px] text-[#28201B]/70 block">
                        ({quantity} × {BUSINESS_CONFIG.currencySymbol}{unitPrice})
                      </span>
                    </div>
                  </div>

                  {/* Ingredients & Highlights accordion preview */}
                  {product.ingredients && (
                    <div className="pt-2 text-xs text-[#28201B]/75 space-y-1 font-bengali">
                      <p className="font-semibold text-[#32130C]">উপাদানসমূহ:</p>
                      <p className="leading-relaxed">
                        {product.ingredients.join(" • ")}
                      </p>
                    </div>
                  )}

                  {/* Order Button CTA */}
                  <div className="pt-2">
                    <button
                      onClick={handleProceedToOrder}
                      className="w-full py-4 px-6 bg-[#4A1F12] hover:bg-[#32130C] text-[#FFF5E6] rounded-xl font-semibold text-base shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <ShoppingBag className="w-5 h-5 text-[#E6B52E]" />
                      <span>অর্ডার করুন (Order Now via WhatsApp)</span>
                    </button>
                    <p className="text-center text-[11px] text-[#71351F] mt-2 font-bengali">
                      অর্ডার ফর্মে আপনার ঠিকানা দিয়ে WhatsApp-এ সরাসরি মেসেজ পাঠাতে পারবেন
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
