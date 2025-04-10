
import { Package, Box, Truck, ShoppingBag } from 'lucide-react';

export const services = [
  {
    id: 'corrugated-boxes',
    title: 'Corrugated Boxes',
    shortDescription: 'High-quality corrugated boxes in various sizes and strengths for shipping and storage.',
    icon: Box,
    fullDescription: `
      Our corrugated boxes are made from high-quality materials designed to protect your products
      during shipping and storage. Available in various sizes, thicknesses, and strength ratings,
      we provide options suitable for lightweight items to heavy industrial equipment.
      
      Features:
      • Single, double, and triple-wall construction
      • Custom sizes and printing available
      • Eco-friendly recycled options
      • Bulk ordering discounts
    `,
    benefits: [
      'Superior product protection',
      'Cost-effective shipping solution',
      'Environmentally responsible options',
      'Customizable to your specific needs',
    ],
  },
  {
    id: 'stock-packaging-materials',
    title: 'Stock Packaging Materials',
    shortDescription: 'Ready-to-use packaging supplies including tape, bubble wrap, foam, and more.',
    icon: Package,
    fullDescription: `
      We offer a comprehensive range of stock packaging materials to complement your shipping needs.
      From protective cushioning and void fill to securing and sealing products, our inventory
      includes everything needed for safe and efficient packaging operations.
      
      Our stock packaging materials include:
      • Packaging tapes and dispensers
      • Bubble wrap and foam cushioning
      • Void fill materials
      • Stretch wrap and shrink film
      • Mailing tubes and envelopes
    `,
    benefits: [
      'Immediate availability',
      'Bulk ordering options',
      'Professional-grade quality',
      'Comprehensive selection',
    ],
  },
  {
    id: 'custom-shipping-packaging',
    title: 'Custom Shipping Packaging',
    shortDescription: 'Tailor-made shipping solutions designed to fit your specific product requirements.',
    icon: Truck,
    fullDescription: `
      When standard packaging doesn't meet your needs, our custom shipping packaging solutions
      provide the perfect fit. We design and manufacture packaging specifically for your products,
      ensuring optimal protection during transit while minimizing costs.
      
      Our custom shipping solutions include:
      • Custom-sized corrugated boxes
      • Product-specific foam inserts
      • Custom mailers and envelopes
      • Multi-product packaging systems
      • Branded shipping materials
    `,
    benefits: [
      'Perfect fit for unusual or fragile items',
      'Reduced dimensional weight charges',
      'Enhanced unboxing experience',
      'Reinforced brand identity',
    ],
  },
  {
    id: 'custom-retail-packaging',
    title: 'Custom Retail Packaging',
    shortDescription: 'Branded packaging solutions that enhance product presentation and customer experience.',
    icon: ShoppingBag,
    fullDescription: `
      Make a lasting impression with custom retail packaging that reflects your brand identity
      and enhances the customer experience. From premium boxes and bags to tissue paper and
      gift packaging, we create retail packaging that helps sell your products.
      
      Our retail packaging options include:
      • Custom printed boxes and bags
      • Specialty gift packaging
      • Tissue paper and fillers
      • Hang tags and product labels
      • Eco-friendly sustainable options
    `,
    benefits: [
      'Enhanced brand recognition',
      'Improved customer experience',
      'Higher perceived product value',
      'Social media-worthy unboxing',
    ],
  },
];
