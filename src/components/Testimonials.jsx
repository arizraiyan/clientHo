import React from "react";
import { motion } from "motion/react";
import { Star, MessageSquareQuote, Info } from "lucide-react";
import { TESTIMONIALS } from "../data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF5E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#71351F] uppercase mb-3"
          >
            <span>CUSTOMER REVIEWS & FEEDBACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] tracking-tight"
          >
            আমাদের ক্রেতাদের অভিজ্ঞতা
          </motion.h2>

          {/* Clearly marked DEMO REVIEW disclaimer badge as mandated by prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full bg-[#FFFAF1] border border-[#71351F]/20 text-[11px] text-[#71351F]"
          >
            <Info className="w-3.5 h-3.5 text-[#E6B52E]" />
            <span>নিচের রিভিউগুলো ডেমো প্রদর্শনীর জন্য সংরক্ষিত (Editable Demo Reviews)</span>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#FFFAF1] p-7 rounded-3xl border border-[#71351F]/15 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E6B52E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E6B52E]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#71351F]/30" />
                </div>

                {/* Review Text */}
                <p className="font-bengali text-sm text-[#28201B]/85 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="mt-6 pt-4 border-t border-[#71351F]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bengali font-bold text-sm text-[#32130C]">
                    {item.customerName}
                  </h4>
                  <p className="text-[11px] text-[#71351F] font-bengali">
                    {item.location} · <span className="font-sans text-[10px]">{item.date}</span>
                  </p>
                </div>
                <span className="text-[10px] bg-[#FFF5E6] text-[#4A1F12] border border-[#71351F]/15 px-2 py-0.5 rounded-md font-medium">
                  {item.productBought}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
