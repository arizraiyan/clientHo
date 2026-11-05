import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowDown } from "lucide-react";
import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

export default function Products({ onViewDetails, onOrderNow }) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.28,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-[#FFF5E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#71351F] uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6B52E]" />
            <span>OUR SPECIAL COLLECTION</span>
            <span className="text-[#71351F]/40">·</span>
            <span>সিগনেচার আইটেম</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] tracking-tight"
          >
            আমাদের জনপ্রিয় প্রোডাক্ট
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bengali text-base sm:text-lg text-[#28201B]/80 mt-4 leading-relaxed"
          >
            প্রতিটি প্রোডাক্টে চকোলেট আর বাদামের দারুণ স্বাদের মেলবন্ধন।
          </motion.p>
        </div>

        {/* 2-Column Product Cards with Mandatory Staggered Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={cardVariants} className="h-full">
              <ProductCard
                product={product}
                onViewDetails={onViewDetails}
                onOrderNow={onOrderNow}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom ordering reassurance banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-[#FFFAF1] border border-[#71351F]/15 text-center shadow-xs"
        >
          <p className="font-bengali text-sm text-[#71351F]">
            💡 <strong className="text-[#32130C]">সহজ অর্ডার প্রক্রিয়া:</strong> আপনার পছন্দের প্রোডাক্টের "Order Now" বাটনে ক্লিক করে তথ্য পূরণ করুন, স্বয়ংক্রিয়ভাবে WhatsApp-এ মেসেজ চলে যাবে।
          </p>
        </motion.div>

      </div>
    </section>
  );
}
