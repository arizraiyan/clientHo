/**
 * WhatsApp Order & Contact Configuration
 * 
 * NOTE: Replace the WHATSAPP_NUMBER below with the real Food Basket BD business WhatsApp number.
 * Do not include '+' or '-' in the phone number for wa.me API format.
 * Format: Country code followed by phone number (e.g., 8801XXXXXXXXX for Bangladesh)
 */

export const BUSINESS_CONFIG = {
  brandName: "Food Basket BD",
  tagline: "Fresh Food • Better Life",
  alternativeTagline: "Good Food | Happy Mood",
  // Sample configurable WhatsApp number for Food Basket BD
  whatsappNumber: "8801700000000",
  // Business phone for calling
  phone: "+880 1700-000000",
  // Facebook page URL
  facebookUrl: "https://facebook.com/foodbasketbd",
  facebookPageName: "Food Basket BD",
  // Business physical location / delivery base
  address: "House 24, Road 7, Dhanmondi, Dhaka 1205, Bangladesh",
  deliveryNote: "Inside Dhaka: 24-48 Hours | Outside Dhaka: 48-72 Hours",
  currencySymbol: "৳",
  currencyCode: "BDT",
};

/**
 * Clean phone number for WhatsApp wa.me links
 * Strips non-digits
 */
export function getCleanWhatsAppNumber(number = BUSINESS_CONFIG.whatsappNumber) {
  return String(number).replace(/[^0-9]/g, "");
}

/**
 * Format order details into the official WhatsApp message template
 */
export function generateWhatsAppOrderMessage({
  productName,
  productCode,
  variantName,
  variantCode,
  weight,
  quantity,
  unitPrice,
  totalPrice,
  customerName,
  customerPhone,
  customerAddress,
  specialInstructions,
}) {
  const lines = [
    `Hello ${BUSINESS_CONFIG.brandName}! I would like to place an order.`,
    "",
    "PRODUCT DETAILS:",
    "",
    `Product: ${productName}`,
    `Product Code: ${productCode}`,
  ];

  if (variantName) {
    lines.push(`Variant: ${variantName}`);
  }
  if (variantCode) {
    lines.push(`Variant Code: ${variantCode}`);
  }

  lines.push(`Weight: ${weight}`);
  lines.push(`Quantity: ${quantity}`);
  lines.push(`Unit Price: ${BUSINESS_CONFIG.currencySymbol}${unitPrice}`);
  lines.push(`Total Price: ${BUSINESS_CONFIG.currencySymbol}${totalPrice}`);
  lines.push("");
  lines.push("CUSTOMER DETAILS:");
  lines.push("");
  lines.push(`Name: ${customerName}`);
  lines.push(`Phone: ${customerPhone}`);
  lines.push(`Address: ${customerAddress}`);

  if (specialInstructions && specialInstructions.trim()) {
    lines.push("");
    lines.push("Special Instructions:");
    lines.push(specialInstructions.trim());
  }

  lines.push("");
  lines.push("Thank you!");

  return lines.join("\n");
}

/**
 * Generate official wa.me direct checkout URL
 */
export function getWhatsAppOrderUrl(orderData) {
  const cleanNumber = getCleanWhatsAppNumber();
  const message = generateWhatsAppOrderMessage(orderData);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

/**
 * Generate direct inquiry chat link
 */
export function getWhatsAppDirectChatUrl(customGreeting = "Hello Food Basket BD! I would like to know more about your Nut Chocolate Bar and Mini Honey Nut.") {
  const cleanNumber = getCleanWhatsAppNumber();
  const encoded = encodeURIComponent(customGreeting);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}
