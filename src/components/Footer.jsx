import React from "react";
import { ShoppingBag, Facebook, MessageCircle, Heart, Phone, ArrowUp } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppDirectChatUrl } from "../lib/whatsapp";

export default function Footer({ onOpenOrderModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const directChatUrl = getWhatsAppDirectChatUrl();

  return (
    <footer className="bg-[#32130C] text-[#FFF5E6] pt-16 pb-12 border-t border-[#71351F]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#71351F]/30">
          
          {/* Brand Info & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A1F12] border border-[#E6B52E]/30 flex items-center justify-center text-[#E6B52E]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-title text-2xl font-bold tracking-tight text-[#FFF5E6]">
                  Food Basket <span className="text-[#E6B52E]">BD</span>
                </span>
                <span className="text-[10px] block tracking-widest text-[#E6B52E] uppercase font-medium">
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="font-bengali text-sm text-[#FFF5E6]/80 leading-relaxed max-w-sm">
              সুস্বাদু খাবার, সুন্দর মুহূর্ত। প্রতিটি কামড়ে উপভোগ করুন ভালো স্বাদের আনন্দ।
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4A1F12] hover:bg-[#1877F2] text-[#FFF5E6] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4A1F12] hover:bg-[#4B7A36] text-[#FFF5E6] flex items-center justify-center transition-colors shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-9 h-9 rounded-full bg-[#4A1F12] hover:bg-[#E6B52E] hover:text-[#32130C] text-[#FFF5E6] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-title text-sm font-bold tracking-wider uppercase text-[#E6B52E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF5E6]/80">
              <li>
                <a href="#home" className="hover:text-[#E6B52E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E6B52E] transition-colors">
                  Products (আমাদের প্রোডাক্ট)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E6B52E] transition-colors">
                  About Us (আমাদের সম্পর্কে)
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#E6B52E] transition-colors">
                  Why Choose Us (কেন আমরা)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E6B52E] transition-colors">
                  Contact (যোগাযোগ)
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products Quick Direct Select */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-title text-sm font-bold tracking-wider uppercase text-[#E6B52E]">
              Our Products
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[#4A1F12]/60 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#FFF5E6]">Nut Chocolate Bar</p>
                  <p className="font-bengali text-[#FFF5E6]/70">নাট চকোলেট বার (FB 001)</p>
                </div>
                <button
                  onClick={() => onOpenOrderModal(null)}
                  className="px-2.5 py-1 bg-[#E6B52E] text-[#32130C] rounded-md font-semibold text-[11px] hover:bg-white transition-colors"
                >
                  Order
                </button>
              </div>

              <div className="p-3 rounded-xl bg-[#4A1F12]/60 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#FFF5E6]">Mini Honey Nut</p>
                  <p className="font-bengali text-[#FFF5E6]/70">মিনি হানি নাট (FB 002)</p>
                </div>
                <button
                  onClick={() => onOpenOrderModal(null)}
                  className="px-2.5 py-1 bg-[#E6B52E] text-[#32130C] rounded-md font-semibold text-[11px] hover:bg-white transition-colors"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF5E6]/60">
          <p>© 2026 Food Basket BD. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-bengali">
              হাতে তৈরি খাঁটি খাবার <Heart className="w-3.5 h-3.5 text-[#E6B52E] fill-[#E6B52E]" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#4A1F12] hover:bg-[#71351F] text-[#FFF5E6] transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
