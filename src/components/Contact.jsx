import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone, Facebook, MapPin, Send, Clock, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppDirectChatUrl } from "../lib/whatsapp";

export default function Contact({ onOpenOrderModal }) {
  const directChatUrl = getWhatsAppDirectChatUrl();

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFAF1] relative">
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
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32130C] tracking-tight"
          >
            আমাদের সাথে যোগাযোগ করুন
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bengali text-base text-[#28201B]/80 mt-4 leading-relaxed"
          >
            যেকোনো প্রশ্ন, কাস্টম গিফট প্যাক বা বাল্ক অর্ডারের জন্য সরাসরি WhatsApp বা ফোনে কথা বলুন।
          </motion.p>
        </div>

        {/* 4 Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          
          {/* Card 1: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#FFF5E6] p-6 rounded-3xl border border-[#71351F]/15 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#4B7A36]/15 text-[#4B7A36] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-[#32130C]">
                WhatsApp Order
              </h3>
              <p className="font-bengali text-xs text-[#71351F] mt-0.5">
                সবচেয়ে দ্রুত যোগাযোগ
              </p>
              <p className="font-mono text-sm font-semibold text-[#32130C] mt-3">
                +{BUSINESS_CONFIG.whatsappNumber}
              </p>
            </div>
            <a
              href={directChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 py-2 px-3 bg-[#4B7A36] hover:bg-[#3D642C] text-[#FFF5E6] text-xs font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>মেসেজ দিন</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 2: Phone Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#FFF5E6] p-6 rounded-3xl border border-[#71351F]/15 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#4A1F12]/10 text-[#4A1F12] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-[#32130C]">
                Direct Hotline
              </h3>
              <p className="font-bengali text-xs text-[#71351F] mt-0.5">
                সরাসরি ফোন কল
              </p>
              <p className="font-mono text-sm font-semibold text-[#32130C] mt-3">
                {BUSINESS_CONFIG.phone}
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="mt-5 py-2 px-3 bg-[#4A1F12] hover:bg-[#32130C] text-[#FFF5E6] text-xs font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>কল করুন</span>
              <Phone className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 3: Facebook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#FFF5E6] p-6 rounded-3xl border border-[#71351F]/15 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-[#32130C]">
                Facebook Page
              </h3>
              <p className="font-bengali text-xs text-[#71351F] mt-0.5">
                অফিশিয়াল সোশ্যাল পেইজ
              </p>
              <p className="text-xs font-medium text-[#32130C] mt-3 truncate">
                {BUSINESS_CONFIG.facebookPageName}
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 py-2 px-3 bg-[#1877F2] hover:bg-[#1567d3] text-white text-xs font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>পেইজ ভিজিট করুন</span>
            </a>
          </motion.div>

          {/* Card 4: Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#FFF5E6] p-6 rounded-3xl border border-[#71351F]/15 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6B52E]/20 text-[#71351F] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-[#32130C]">
                Location
              </h3>
              <p className="font-bengali text-xs text-[#71351F] mt-0.5">
                হোম কিচেন ও ডেলিভারি হাব
              </p>
              <p className="font-bengali text-xs text-[#28201B]/80 mt-3 leading-relaxed">
                {BUSINESS_CONFIG.address}
              </p>
            </div>
            <div className="mt-5 py-2 px-3 bg-[#FFFAF1] border border-[#71351F]/20 text-[#71351F] text-[11px] font-medium rounded-xl text-center flex items-center justify-center gap-1 font-bengali">
              <Clock className="w-3.5 h-3.5 text-[#E6B52E]" />
              <span>ডেলিভারি: সারা বাংলাদেশ</span>
            </div>
          </motion.div>

        </div>

        {/* Large Prominent WhatsApp Banner CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#4A1F12] text-[#FFF5E6] p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#E6B52E] font-semibold">
              Instant Ordering
            </span>
            <h3 className="font-bengali text-2xl sm:text-3xl font-bold">
              সরাসরি WhatsApp-এ কথা বলুন এবং অর্ডার করুন
            </h3>
            <p className="font-bengali text-xs sm:text-sm text-[#FFF5E6]/80 max-w-xl">
              আপনার কোনো প্রশ্ন থাকলে বা কোনো বিশেষ কাস্টমাইজেশন লাগলে আমাদের ইনবক্স সবসময় খোলা।
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={directChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#4B7A36] hover:bg-[#3D642C] text-[#FFF5E6] font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </a>
            <button
              onClick={() => onOpenOrderModal(null)}
              className="px-6 py-3 bg-[#E6B52E] hover:bg-[#d4a423] text-[#32130C] font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Order Now</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
