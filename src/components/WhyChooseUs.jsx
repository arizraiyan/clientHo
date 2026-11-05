import React from "react";
import { motion } from "motion/react";
import { Leaf, Heart, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../data/products";

const ICONS_MAP = {
  Leaf: Leaf,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  ShoppingBag: ShoppingBag,
};

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FFF5E6] relative">
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
            <Sparkles className="w-3.5 h-3.5 text-[#E6B52E]" />
            <span>OUR PROMISE & COMMITMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] tracking-tight"
          >
            কেন Food Basket BD বেছে নেবেন?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bengali text-base text-[#28201B]/80 mt-4 leading-relaxed"
          >
            আমরা শুধু চকলেট তৈরি করি না, প্রতিটি আইটেমে বজায় রাখি ঘরোয়া আন্তরিকতা ও প্রিমিয়াম স্বাদ।
          </motion.p>
        </div>

        {/* 4 Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {WHY_CHOOSE_US_DATA.map((feature, idx) => {
            const IconComponent = ICONS_MAP[feature.iconName] || Sparkles;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative bg-[#FFFAF1] p-7 rounded-3xl border border-[#71351F]/15 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF5E6] group-hover:bg-[#4A1F12] border border-[#71351F]/20 flex items-center justify-center text-[#4A1F12] group-hover:text-[#E6B52E] shadow-xs transition-colors duration-300 mb-5">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-title text-lg font-bold text-[#32130C] group-hover:text-[#71351F] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-bengali text-xs font-semibold text-[#71351F] mt-0.5">
                    {feature.bengaliTitle}
                  </p>

                  {/* Description */}
                  <p className="font-bengali text-sm text-[#28201B]/80 leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom index */}
                <div className="pt-4 mt-4 border-t border-[#71351F]/10 flex items-center justify-between text-xs text-[#71351F]/60">
                  <span className="font-mono font-medium">0{idx + 1}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold">Standard</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
