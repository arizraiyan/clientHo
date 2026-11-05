import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, Sparkles, ShieldCheck, Heart } from "lucide-react";

export default function Hero({ onOpenOrderModal }) {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FFF5E6]">
      {/* Subtle organic background ambience */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E6B52E]/10 via-[#71351F]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Small Label / Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#71351F] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#E6B52E]" />
              <span>FRESH FOOD • BETTER LIFE</span>
              <span className="text-[#71351F]/40">·</span>
              <span className="text-[#4B7A36]">100% Homemade</span>
            </motion.div>

            {/* Main Bengali Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] leading-[1.25] tracking-tight"
            >
              প্রতিটি কামড়ে বাদাম আর চকোলেটের দারুণ স্বাদ!
            </motion.h1>

            {/* English Sub-Heading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif-title text-xl sm:text-2xl lg:text-3xl font-semibold text-[#71351F] italic"
            >
              Delicious Moments, Made With Love.
            </motion.p>

            {/* Bengali Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-bengali text-base sm:text-lg text-[#28201B]/85 leading-relaxed max-w-2xl"
            >
              প্রিমিয়াম চকোলেট, বাছাই করা বাদাম এবং দারুণ স্বাদের মিশেলে তৈরি আমাদের বিশেষ সব চকলেট আইটেম। প্রতিটি কামড়ে উপভোগ করুন মজাদার স্বাদের এক অনন্য অভিজ্ঞতা।
            </motion.p>

            {/* CTA Buttons & Trust Marker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onOpenOrderModal(null)}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#4A1F12] hover:bg-[#32130C] active:scale-95 text-[#FFF5E6] font-semibold text-base rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <ShoppingBag className="w-5 h-5 text-[#E6B52E] group-hover:scale-110 transition-transform" />
                <span>Order Now</span>
                <span className="text-[#FFF5E6]/60 text-xs font-normal">| অর্ডার করুন</span>
              </button>

              <button
                onClick={scrollToProducts}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#FFFAF1] hover:bg-white text-[#4A1F12] border border-[#71351F]/20 font-semibold text-base rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-[#71351F] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quality & Taste Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#28201B]/75 border-t border-[#71351F]/10 w-full"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E6B52E]" />
                <span className="font-medium text-[#32130C]">Premium Quality • Delicious Taste</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4B7A36]" />
                <span>১০০% প্রাকৃতিক খাঁটি উপাদান</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#71351F]" />
                <span>হোমমেড ভালোবাসা</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Large Editorial Food Photography */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Main Picture Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFAF1] bg-[#4A1F12]/5 aspect-[4/3] lg:aspect-[1/1] sm:aspect-[4/3]">
                <img
                  src="/images/hero-food.jpg"
                  alt="Food Basket BD - Handcrafted Nut Chocolate Bar and Mini Honey Nut"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle bottom gradient scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#32130C]/70 via-transparent to-transparent pointer-events-none" />

                {/* In-Frame Brand Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#32130C]/80 backdrop-blur-md text-[#FFF5E6] border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif-title text-base sm:text-lg font-bold text-[#E6B52E]">
                        Food Basket BD Signature
                      </p>
                      <p className="font-bengali text-xs text-[#FFF5E6]/90 mt-0.5">
                        নাট চকোলেট বার ও মিনি হানি নাট
                      </p>
                    </div>
                    <span className="text-[11px] font-medium bg-[#E6B52E] text-[#32130C] px-2.5 py-1 rounded-md font-sans">
                      Fresh Batch
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Pill */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-2 sm:-right-4 bg-[#FFFAF1] px-4 py-2.5 rounded-2xl shadow-lg border border-[#71351F]/15 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#4B7A36]/15 flex items-center justify-center text-[#4B7A36]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#32130C] uppercase tracking-wider">
                    Freshly Made
                  </p>
                  <p className="font-bengali text-xs text-[#71351F]">
                    রোস্টেড বাদামের দারুণ স্বাদ
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
