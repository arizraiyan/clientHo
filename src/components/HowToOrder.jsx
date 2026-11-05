import React from "react";
import { motion } from "motion/react";
import { ShoppingCart, Edit3, Send, ArrowRight } from "lucide-react";
import { HOW_TO_ORDER_STEPS } from "../data/products";

const STEP_ICONS = [ShoppingCart, Edit3, Send];

export default function HowToOrder({ onOpenOrderModal }) {
  return (
    <section id="how-to-order" className="py-20 md:py-28 bg-[#FFFAF1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#71351F] uppercase mb-3"
          >
            <span>SIMPLE 3-STEP PROCESS</span>
            <span className="text-[#71351F]/40">·</span>
            <span>সহজ নিয়ম</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] tracking-tight"
          >
            কীভাবে অর্ডার করবেন?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bengali text-base text-[#28201B]/80 mt-4 leading-relaxed"
          >
            কোনো অগ্রিম ঝামেলা ছাড়া মাত্র তিনটি সহজ ধাপে ঘরে বসেই আপনার পছন্দের নাট চকলেট অর্ডার করুন।
          </motion.p>
        </div>

        {/* 3 Connected Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {HOW_TO_ORDER_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.18 }}
                className="relative bg-[#FFF5E6] p-7 rounded-3xl border border-[#71351F]/15 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Step Indicator & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-bengali text-2xl font-bold text-[#E6B52E] bg-[#4A1F12] w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FFFAF1] border border-[#71351F]/15 flex items-center justify-center text-[#71351F]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & English Subtitle */}
                  <h3 className="font-bengali text-xl font-bold text-[#32130C]">
                    {step.title}
                  </h3>
                  <p className="font-serif-title text-xs font-semibold text-[#71351F] uppercase tracking-wider mt-0.5">
                    {step.englishTitle}
                  </p>

                  {/* Description */}
                  <p className="font-bengali text-sm text-[#28201B]/80 leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#71351F]/10 text-xs font-medium text-[#71351F] flex items-center justify-between">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E6B52E]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => onOpenOrderModal(null)}
            className="px-8 py-3.5 bg-[#4A1F12] hover:bg-[#32130C] active:scale-95 text-[#FFF5E6] font-semibold text-sm rounded-xl shadow-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>এখনই অর্ডার শুরু করুন</span>
            <ArrowRight className="w-4 h-4 text-[#E6B52E]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
