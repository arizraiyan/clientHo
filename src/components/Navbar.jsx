import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, PhoneCall } from "lucide-react";
import { BUSINESS_CONFIG } from "../lib/whatsapp";

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "products", "about", "why-us", "how-to-order", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Products", href: "#products", id: "products" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Why Choose Us", href: "#why-us", id: "why-us" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF5E6]/95 backdrop-blur-md shadow-sm border-b border-[#71351F]/10 py-3"
          : "bg-[#FFF5E6] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark & Icon */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#4A1F12] flex items-center justify-center text-[#E6B52E] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#32130C] group-hover:text-[#71351F] transition-colors">
                Food Basket <span className="text-[#E6B52E]">BD</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#71351F] uppercase font-medium">
                Fresh Food • Better Life
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#28201B]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                  activeSection === link.id
                    ? "text-[#4A1F12] font-semibold"
                    : "text-[#28201B]/80 hover:text-[#4A1F12]"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E6B52E] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Order Now CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenOrderModal(null)}
              className="px-5 py-2.5 text-sm font-semibold text-[#FFF5E6] bg-[#4A1F12] hover:bg-[#32130C] active:scale-95 rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4 text-[#E6B52E]" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenOrderModal(null)}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#FFF5E6] bg-[#4A1F12] rounded-md shadow-sm active:scale-95"
            >
              Order Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#4A1F12] hover:bg-[#FFFAF1] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF5E6] border-b border-[#71351F]/15 px-6 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#28201B]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? "bg-[#4A1F12] text-[#FFF5E6] font-semibold"
                    : "hover:bg-[#FFFAF1] text-[#28201B]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#71351F]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal(null);
                }}
                className="w-full py-3 text-center text-sm font-semibold text-[#FFF5E6] bg-[#4A1F12] rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#E6B52E]" />
                <span>অর্ডার করুন (Order Now)</span>
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full py-2.5 text-center text-xs font-medium text-[#4A1F12] bg-[#FFFAF1] border border-[#4A1F12]/20 rounded-lg flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#4B7A36]" />
                <span>কল করুন: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
