import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppDirectChatUrl, BUSINESS_CONFIG } from "../lib/whatsapp";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const directChatUrl = getWhatsAppDirectChatUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FFFAF1] text-[#32130C] border border-[#71351F]/15 py-1.5 px-3 rounded-full shadow-lg text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#4B7A36] animate-ping" />
          <span className="font-bengali">অর্ডার করতে WhatsApp করুন</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#71351F]/60 hover:text-[#32130C] p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={directChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Food Basket BD on WhatsApp"
        className="relative group w-14 h-14 bg-[#4B7A36] hover:bg-[#3d662b] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#4B7A36] opacity-30 animate-ping group-hover:opacity-0" />
        
        {/* Lucide WhatsApp-style Message icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-[#4B7A36] relative z-10" />

        {/* Hover Label for Accessibility */}
        <span className="sr-only">Chat on WhatsApp ({BUSINESS_CONFIG.whatsappNumber})</span>
      </a>
    </div>
  );
}
