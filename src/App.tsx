/**
 * FOOD BASKET BD — PREMIUM HOMEMADE CHOCOLATE & NUTS
 * Single-Page Artisanal E-Commerce Storefront
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import OrderModal from "./components/OrderModal";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import { PRODUCTS } from "./data/products";

export default function App() {
  // Modal states
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(PRODUCTS[0]);

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProductOrder, setSelectedProductOrder] = useState(PRODUCTS[0]);
  const [orderInitialOptions, setOrderInitialOptions] = useState(null);

  // View Details click handler
  const handleViewDetails = (product: any) => {
    setSelectedProductDetails(product);
    setDetailsModalOpen(true);
  };

  // Order Now click handler
  const handleOrderNow = (product: any = null, customOptions: any = null) => {
    // If product details modal was open, close it
    setDetailsModalOpen(false);

    const targetProduct = product || selectedProductDetails || PRODUCTS[0];
    setSelectedProductOrder(targetProduct);
    setOrderInitialOptions(customOptions);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF5E6] text-[#28201B] font-sans flex flex-col selection:bg-[#E6B52E]/30 selection:text-[#32130C]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenOrderModal={(p?: any) => handleOrderNow(p || PRODUCTS[0])} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrderModal={(p?: any) => handleOrderNow(p || PRODUCTS[0])} />

        {/* Featured 2 Products Section */}
        <Products
          onViewDetails={handleViewDetails}
          onOrderNow={(product: any) => handleOrderNow(product)}
        />

        {/* About Craftsmanship Section */}
        <About
          onExploreProducts={() => {
            const el = document.getElementById("products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* How to Order 3-Step Process */}
        <HowToOrder onOpenOrderModal={(p?: any) => handleOrderNow(p || PRODUCTS[0])} />

        {/* Testimonials & Reviews */}
        <Testimonials />

        {/* Contact Information & Channels */}
        <Contact onOpenOrderModal={(p?: any) => handleOrderNow(p || PRODUCTS[0])} />
      </main>

      {/* Deep Chocolate Footer */}
      <Footer onOpenOrderModal={(p?: any) => handleOrderNow(p || PRODUCTS[0])} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Product Details Modal (Quick View) */}
      <ProductDetails
        product={selectedProductDetails}
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        onOrderNow={(product: any, options: any) => handleOrderNow(product, options)}
      />

      {/* WhatsApp Order Form Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialProduct={selectedProductOrder}
        initialOptions={orderInitialOptions}
      />
    </div>
  );
}
