import React from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Utensils, CheckCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "../lib/whatsapp";

export default function About({ onExploreProducts }) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFAF1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Craftsmanship Photography */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFF5E6] aspect-[4/3]">
                <img
                  src="/images/about-food.jpg"
                  alt="Artisanal chocolate and nuts preparation - Food Basket BD"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#32130C]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#FFF5E6]/90 backdrop-blur-md rounded-xl text-[#32130C] border border-[#71351F]/15">
                  <p className="font-serif-title text-sm font-bold text-[#4A1F12]">
                    Natural Homemade Perfection
                  </p>
                  <p className="font-bengali text-xs text-[#71351F]">
                    বাছাইকৃত তাজা উপাদান ও খাঁটি মধুর অনন্য ছোঁয়া
                  </p>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#4A1F12] text-[#FFF5E6] p-4 rounded-2xl shadow-lg border border-white/10">
                <p className="font-serif-title text-xs font-semibold text-[#E6B52E]">
                  {BUSINESS_CONFIG.brandName}
                </p>
                <p className="text-[11px] font-bengali text-[#FFF5E6]/90 mt-0.5">
                  Fresh Food • Better Life
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial Storytelling */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#71351F] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6B52E]" />
              <span>ABOUT FOOD BASKET BD</span>
              <span className="text-[#71351F]/40">·</span>
              <span>আমাদের কথা</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] leading-tight"
            >
              ভালো খাবার, সুন্দর মুহূর্ত।
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bengali text-base sm:text-lg text-[#28201B]/85 leading-relaxed"
            >
              Food Basket BD শুধু একটি ফুড ব্র্যান্ড নয়, এটি সুস্বাদু খাবার এবং সুন্দর মুহূর্তের একটি ছোট্ট গল্প। চকোলেট ও বাদামের দারুণ সমন্বয়ে তৈরি আমাদের বিশেষ প্রোডাক্টগুলো আপনার প্রতিদিনের খাবারে নিয়ে আসুক নতুন স্বাদের আনন্দ।
            </motion.p>

            {/* Core Values Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2"
            >
              <div className="p-4 rounded-2xl bg-[#FFF5E6] border border-[#71351F]/10">
                <div className="flex items-center gap-2 text-[#4A1F12] font-semibold text-sm">
                  <Utensils className="w-4 h-4 text-[#E6B52E]" />
                  <span>তাজা উপাদান</span>
                </div>
                <p className="font-bengali text-xs text-[#28201B]/75 mt-1.5 leading-relaxed">
                  প্রতিটি চকলেট বার ও হানি নাট তৈরি হয় সতেজ বাছাইকৃত রোস্টেড বাদামে।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF5E6] border border-[#71351F]/10">
                <div className="flex items-center gap-2 text-[#4A1F12] font-semibold text-sm">
                  <Heart className="w-4 h-4 text-[#71351F]" />
                  <span>হোমমেড আন্তরিকতা</span>
                </div>
                <p className="font-bengali text-xs text-[#28201B]/75 mt-1.5 leading-relaxed">
                  পরিচ্ছন্ন ঘরোয়া পরিবেশে পরম মমতায় প্রতিটি ব্যাচ প্রস্তুত করা হয়।
                </p>
              </div>
            </motion.div>

            {/* Bottom Tagline Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 text-xs text-[#71351F] font-serif-title italic"
            >
              "{BUSINESS_CONFIG.tagline} — Good Food | Happy Mood"
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
