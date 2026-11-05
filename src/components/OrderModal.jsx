import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, AlertCircle, ShoppingBag, Send, Phone, MapPin, User, FileText, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { PRODUCTS, getProductById } from "../data/products";
import { BUSINESS_CONFIG, getWhatsAppOrderUrl } from "../lib/whatsapp";

export default function OrderModal({ isOpen, onClose, initialProduct, initialOptions }) {
  // If no initial product passed, default to first product
  const defaultProd = initialProduct || PRODUCTS[0];
  const [selectedProduct, setSelectedProduct] = useState(defaultProd);

  // Selected variant
  const [selectedVariant, setSelectedVariant] = useState(
    initialOptions?.variant ||
      (defaultProd?.variants && defaultProd.variants.length > 0 ? defaultProd.variants[0] : null)
  );

  // Selected weight tier
  const [selectedWeight, setSelectedWeight] = useState(
    initialOptions?.weight
      ? defaultProd?.weightOptions.find((w) => w.weight === initialOptions.weight) || defaultProd?.weightOptions[0]
      : defaultProd?.weightOptions.find((w) => w.isDefault) || defaultProd?.weightOptions[0]
  );

  // Quantity
  const [quantity, setQuantity] = useState(initialOptions?.quantity || 1);

  // Customer details form
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerAddress: "",
    specialInstructions: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [orderSent, setOrderSent] = useState(false);

  // Sync state when props change
  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
      setSelectedVariant(
        initialOptions?.variant ||
          (initialProduct.variants && initialProduct.variants.length > 0
            ? initialProduct.variants[0]
            : null)
      );
      setSelectedWeight(
        initialOptions?.weight
          ? initialProduct.weightOptions.find((w) => w.weight === initialOptions.weight) ||
            initialProduct.weightOptions[0]
          : initialProduct.weightOptions.find((w) => w.isDefault) || initialProduct.weightOptions[0]
      );
      setQuantity(initialOptions?.quantity || 1);
    }
    setOrderSent(false);
    setErrors({});
  }, [initialProduct, initialOptions, isOpen]);

  // Handle switching product directly in order form
  const handleProductChange = (prodId) => {
    const prod = getProductById(prodId);
    if (prod) {
      setSelectedProduct(prod);
      setSelectedVariant(prod.variants && prod.variants.length > 0 ? prod.variants[0] : null);
      setSelectedWeight(prod.weightOptions.find((w) => w.isDefault) || prod.weightOptions[0]);
    }
  };

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll
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

  // Price calculations
  const unitPrice = selectedWeight ? selectedWeight.price : 0;
  const totalPrice = unitPrice * quantity;

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "আপনার নাম আবশ্যক (Customer Name is required)";
    }

    const cleanPhone = formData.customerPhone.replace(/[^0-9]/g, "");
    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = "মোবাইল নম্বর আবশ্যক (Phone number is required)";
    } else if (cleanPhone.length < 10) {
      newErrors.customerPhone = "সঠিক মোবাইল নম্বর প্রদান করুন (নূন্যতম ১০-১১ ডিজিট)";
    }

    if (!formData.customerAddress.trim()) {
      newErrors.customerAddress = "সম্পূর্ণ ডেলিভারি ঠিকানা আবশ্যক (Delivery address is required)";
    } else if (formData.customerAddress.trim().length < 5) {
      newErrors.customerAddress = "বিস্তারিত ঠিকানা লিখুন (যেমন: বাড়ি/রোড/এলাকা/জেলা)";
    }

    if (selectedProduct.variants && selectedProduct.variants.length > 0 && !selectedVariant) {
      newErrors.variant = "অনুগ্রহ করে একটি ভ্যারিয়েন্ট নির্বাচন করুন";
    }

    if (!selectedWeight) {
      newErrors.weight = "ওজন নির্বাচন করুন";
    }

    if (quantity < 1) {
      newErrors.quantity = "পরিমাণ কমপক্ষে ১ হতে হবে";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit order to WhatsApp
  const handleConfirmOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const orderPayload = {
      productName: selectedProduct.name,
      productCode: selectedProduct.code,
      variantName: selectedVariant?.name || "",
      variantCode: selectedVariant?.code || "",
      weight: selectedWeight?.weight || "250g",
      quantity,
      unitPrice,
      totalPrice,
      customerName: formData.customerName.trim(),
      customerPhone: formData.customerPhone.trim(),
      customerAddress: formData.customerAddress.trim(),
      specialInstructions: formData.specialInstructions.trim(),
    };

    // Generate wa.me link
    const whatsappUrl = getWhatsAppOrderUrl(orderPayload);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E6B52E", "#4A1F12", "#71351F", "#4B7A36"],
      });
    } catch {
      // safe fallback if confetti fails
    }

    setOrderSent(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#32130C]/65 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl bg-[#FFF5E6] rounded-3xl shadow-2xl border border-[#71351F]/20 overflow-hidden z-10 max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="bg-[#4A1F12] text-[#FFF5E6] px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#E6B52E]" />
            <div>
              <h2 id="order-modal-title" className="font-serif-title text-lg sm:text-xl font-bold">
                Food Basket BD — Order Form
              </h2>
              <p className="font-bengali text-xs text-[#FFF5E6]/80">
                WhatsApp-এ সরাসরি অর্ডার নিশ্চিত করুন
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF5E6] flex items-center justify-center transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-5 sm:p-7 lg:p-8 flex-grow">
          {orderSent ? (
            /* Post-Click Confirmation Card */
            <div className="text-center py-10 px-4 max-w-lg mx-auto space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#4B7A36]/15 text-[#4B7A36] rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-bengali text-2xl font-bold text-[#32130C]">
                অর্ডার রিকোয়েস্ট তৈরি হয়েছে!
              </h3>
              <p className="font-bengali text-sm text-[#28201B]/85 leading-relaxed">
                আপনার ব্রাউজারে WhatsApp ওপেন হয়েছে। মেসেজটি পাঠিয়ে দিলে Food Basket BD টিম আপনার ডেলিভারি নিশ্চিত করবে।
              </p>

              <div className="p-4 rounded-xl bg-[#FFFAF1] border border-[#71351F]/15 text-left text-xs space-y-1.5 font-bengali">
                <p>
                  <strong>প্রোডাক্ট:</strong> {selectedProduct.name} ({selectedProduct.code})
                </p>
                {selectedVariant && (
                  <p>
                    <strong>ভ্যারিয়েন্ট:</strong> {selectedVariant.name} ({selectedVariant.code})
                  </p>
                )}
                <p>
                  <strong>ওজন ও পরিমাণ:</strong> {selectedWeight.weight} × {quantity}
                </p>
                <p>
                  <strong>মোট মূল্য:</strong> {BUSINESS_CONFIG.currencySymbol}{totalPrice}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setOrderSent(false)}
                  className="px-5 py-2.5 text-xs font-semibold text-[#4A1F12] bg-[#FFFAF1] border border-[#71351F]/20 rounded-lg hover:bg-white"
                >
                  ফর্মে ফিরে যান (Edit Form)
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold text-[#FFF5E6] bg-[#4A1F12] rounded-lg hover:bg-[#32130C]"
                >
                  উইন্ডো বন্ধ করুন (Close)
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirmOrder} className="space-y-6">
              
              {/* Top Banner Notice */}
              <div className="p-3.5 rounded-xl bg-[#FFFAF1] border border-[#E6B52E]/40 flex items-start gap-3 text-xs text-[#71351F]">
                <Send className="w-4 h-4 text-[#4B7A36] shrink-0 mt-0.5" />
                <p className="font-bengali leading-relaxed">
                  <strong>সরাসরি ডেলিভারি প্রসেস:</strong> আপনার অর্ডারটি কোনো থার্ড পার্টি নয়, সরাসরি আমাদের অফিশিয়াল <strong>WhatsApp</strong>-এ পাঠানো হবে।
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Form Fields */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Product Selector (FB 001 or FB 002) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                      নির্বাচিত প্রোডাক্ট (Select Product):
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {PRODUCTS.map((p) => {
                        const isSelected = selectedProduct.id === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => handleProductChange(p.id)}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                              isSelected
                                ? "bg-[#4A1F12] text-[#FFF5E6] border-[#4A1F12] shadow-sm"
                                : "bg-[#FFFAF1] hover:bg-white text-[#28201B] border-[#71351F]/20"
                            }`}
                          >
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-10 h-10 rounded-lg object-cover shrink-0"
                            />
                            <div className="truncate">
                              <p className="text-xs font-bold truncate">{p.name}</p>
                              <p className={`text-[10px] ${isSelected ? "text-[#E6B52E]" : "text-[#71351F]"}`}>
                                {p.code}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Variant Selection (if available) */}
                  {selectedProduct.variants && selectedProduct.variants.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                          ভ্যারিয়েন্ট (Variant) <span className="text-red-600">*</span>:
                        </label>
                        {selectedVariant && (
                          <span className="text-xs font-mono text-[#71351F]">
                            Code: {selectedVariant.code}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {selectedProduct.variants.map((v) => {
                          const isSelected = selectedVariant?.code === v.code;
                          return (
                            <button
                              key={v.code}
                              type="button"
                              onClick={() => {
                                setSelectedVariant(v);
                                if (errors.variant) {
                                  setErrors((prev) => ({ ...prev, variant: null }));
                                }
                              }}
                              className={`p-2 rounded-lg border text-left transition-all cursor-pointer text-xs ${
                                isSelected
                                  ? "bg-[#4A1F12] text-[#FFF5E6] border-[#4A1F12]"
                                  : "bg-[#FFFAF1] text-[#28201B] border-[#71351F]/20 hover:bg-white"
                              }`}
                            >
                              <p className="font-semibold">{v.name}</p>
                              <p className={`text-[10px] ${isSelected ? "text-[#FFF5E6]/75" : "text-[#71351F]"}`}>
                                {v.code}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                      {errors.variant && (
                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.variant}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Weight and Quantity Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Weight Selection */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                        ওজন / প্যাক সাইজ <span className="text-red-600">*</span>:
                      </label>
                      <select
                        value={selectedWeight?.weight || ""}
                        onChange={(e) => {
                          const found = selectedProduct.weightOptions.find(
                            (w) => w.weight === e.target.value
                          );
                          if (found) setSelectedWeight(found);
                        }}
                        className="w-full px-3 py-2.5 bg-[#FFFAF1] border border-[#71351F]/25 rounded-xl text-xs sm:text-sm font-medium text-[#28201B] focus:outline-none focus:ring-2 focus:ring-[#4A1F12]"
                      >
                        {selectedProduct.weightOptions.map((w) => (
                          <option key={w.weight} value={w.weight}>
                            {w.weight} — {BUSINESS_CONFIG.currencySymbol}{w.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Quantity Counter */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                        পরিমাণ (Quantity) <span className="text-red-600">*</span>:
                      </label>
                      <div className="flex items-center h-10 bg-[#FFFAF1] border border-[#71351F]/25 rounded-xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                          className="px-3 h-full hover:bg-white text-[#4A1F12] transition-colors"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          max="99"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-full text-center text-sm font-bold bg-transparent text-[#32130C] focus:outline-none tabular-nums"
                        />
                        <button
                          type="button"
                          onClick={() => setQuantity((prev) => prev + 1)}
                          className="px-3 h-full hover:bg-white text-[#4A1F12] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Customer Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                      আপনার নাম (Customer Name) <span className="text-red-600">*</span>:
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#71351F]/60 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                        value={formData.customerName}
                        onChange={(e) => {
                          setFormData({ ...formData, customerName: e.target.value });
                          if (errors.customerName) setErrors({ ...errors, customerName: null });
                        }}
                        className={`w-full pl-9 pr-3 py-2.5 bg-[#FFFAF1] border ${
                          errors.customerName ? "border-red-500" : "border-[#71351F]/25"
                        } rounded-xl text-xs sm:text-sm text-[#28201B] placeholder:text-[#28201B]/40 focus:outline-none focus:ring-2 focus:ring-[#4A1F12]`}
                      />
                    </div>
                    {errors.customerName && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.customerName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                      সচল ফোন নম্বর (Phone Number) <span className="text-red-600">*</span>:
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#71351F]/60 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={formData.customerPhone}
                        onChange={(e) => {
                          setFormData({ ...formData, customerPhone: e.target.value });
                          if (errors.customerPhone) setErrors({ ...errors, customerPhone: null });
                        }}
                        className={`w-full pl-9 pr-3 py-2.5 bg-[#FFFAF1] border ${
                          errors.customerPhone ? "border-red-500" : "border-[#71351F]/25"
                        } rounded-xl text-xs sm:text-sm text-[#28201B] placeholder:text-[#28201B]/40 focus:outline-none focus:ring-2 focus:ring-[#4A1F12]`}
                      />
                    </div>
                    {errors.customerPhone && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.customerPhone}</span>
                      </p>
                    )}
                  </div>

                  {/* Delivery Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#32130C]">
                      সম্পূর্ণ ডেলিভারি ঠিকানা (Full Address) <span className="text-red-600">*</span>:
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#71351F]/60 absolute left-3 top-3" />
                      <textarea
                        rows={2}
                        placeholder="বাসা নং, রোড নং, এলাকা, থানা ও জেলা উল্লেখ করুন"
                        value={formData.customerAddress}
                        onChange={(e) => {
                          setFormData({ ...formData, customerAddress: e.target.value });
                          if (errors.customerAddress) setErrors({ ...errors, customerAddress: null });
                        }}
                        className={`w-full pl-9 pr-3 py-2 bg-[#FFFAF1] border ${
                          errors.customerAddress ? "border-red-500" : "border-[#71351F]/25"
                        } rounded-xl text-xs sm:text-sm text-[#28201B] placeholder:text-[#28201B]/40 focus:outline-none focus:ring-2 focus:ring-[#4A1F12]`}
                      />
                    </div>
                    {errors.customerAddress && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.customerAddress}</span>
                      </p>
                    )}
                  </div>

                  {/* Special Instructions (Optional) */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#71351F]">
                      বিশেষ নির্দেশনা (Special Instructions - ঐচ্ছিক):
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#71351F]/60 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="যেমন: ডেলিভারির আগে ফোন দিবেন"
                        value={formData.specialInstructions}
                        onChange={(e) =>
                          setFormData({ ...formData, specialInstructions: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2 bg-[#FFFAF1] border border-[#71351F]/25 rounded-xl text-xs text-[#28201B] placeholder:text-[#28201B]/40 focus:outline-none focus:ring-2 focus:ring-[#4A1F12]"
                      />
                    </div>
                  </div>

                </div>

                {/* Right Column: Order Summary & Confirmation Box */}
                <div className="lg:col-span-5 bg-[#FFFAF1] p-5 rounded-2xl border border-[#71351F]/15 space-y-4">
                  <h3 className="font-serif-title text-base font-bold text-[#32130C] border-b border-[#71351F]/10 pb-2">
                    Order Summary
                  </h3>

                  {/* Product Micro Preview */}
                  <div className="flex gap-3 items-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-16 h-16 rounded-xl object-cover border border-[#71351F]/15 shrink-0"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-[#32130C]">{selectedProduct.name}</p>
                      <p className="font-bengali text-[#71351F]">{selectedProduct.bengaliName}</p>
                      <span className="text-[10px] font-mono text-[#71351F]">
                        Code: {selectedProduct.code}
                      </span>
                    </div>
                  </div>

                  {/* Detailed Spec breakdown */}
                  <div className="space-y-2 text-xs border-t border-b border-[#71351F]/10 py-3">
                    {selectedVariant && (
                      <div className="flex justify-between">
                        <span className="text-[#71351F]">Variant:</span>
                        <span className="font-semibold text-[#32130C] text-right">
                          {selectedVariant.name} ({selectedVariant.code})
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#71351F]">Selected Weight:</span>
                      <span className="font-semibold text-[#32130C]">{selectedWeight?.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71351F]">Unit Price:</span>
                      <span className="font-semibold text-[#32130C]">
                        {BUSINESS_CONFIG.currencySymbol}{unitPrice}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71351F]">Quantity:</span>
                      <span className="font-semibold text-[#32130C]">{quantity}</span>
                    </div>
                  </div>

                  {/* Total Amount Display */}
                  <div className="p-3 bg-[#FFF5E6] rounded-xl border border-[#71351F]/15 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#71351F] font-bold block">
                        Total Amount
                      </span>
                      <span className="text-[10px] text-[#28201B]/70 font-bengali">
                        ক্যাশ অন ডেলিভারি (COD)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-sans text-2xl font-bold text-[#32130C] tabular-nums">
                        {BUSINESS_CONFIG.currencySymbol}{totalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#4A1F12] hover:bg-[#32130C] text-[#FFF5E6] font-semibold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4 text-[#E6B52E]" />
                    <span>Confirm Order on WhatsApp</span>
                  </button>

                  <div className="text-[11px] text-center text-[#71351F] font-bengali leading-snug">
                    <p>
                      আপনার অর্ডারটি <strong>WhatsApp</strong>-এর মাধ্যমে আমাদের কাছে পাঠানো হবে।
                    </p>
                    <p className="text-[10px] text-[#28201B]/60 mt-1">
                      {BUSINESS_CONFIG.deliveryNote}
                    </p>
                  </div>

                </div>

              </div>

            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
