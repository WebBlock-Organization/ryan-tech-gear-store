"use client";

import React, { useState, useEffect } from "react";
import {
  Eye,
  Sparkles,
  Truck,
  ShieldCheck,
  Leaf,
  Star,
  Mail,
  Phone,
  MapPin,
  X,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  price: number;
  customFields?: {
    imageUrl?: string;
    description?: string;
    badge?: string;
    category?: string;
    features?: string[];
  };
}

const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: "bb9ea5a6-661e-4548-a1f7-6e76afb5b95c",
    title: "Aura Pro Wireless Headphones",
    price: 249,
    customFields: {
      badge: "Best Seller",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      description:
        "Lossless spatial audio with adaptive noise cancellation and 40-hour battery life.",
      category: "Audio",
      stock: 50,
    },
  },
  {
    id: "b2c2624b-7d29-413a-86bc-3d1fd13a9e12",
    title: "Zenith Titanium Chrono Watch",
    price: 189.5,
    customFields: {
      badge: "New Release",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      description:
        "Aerospace titanium casing with AMOLED sapphire display and 14-day continuous battery.",
      category: "Wearables",
      stock: 40,
    },
  },
  {
    id: "3fbf3ac1-b73a-4fb4-9333-a23afb2bf589",
    title: "Luminary Ergo Smart Desk Lamp",
    price: 89,
    customFields: {
      badge: "Staff Pick",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      description:
        "Circadian rhythm smart lighting with integrated 15W wireless rapid charging base.",
      category: "Desk Setup",
      stock: 90,
    },
  },
];

export default function SingleFileTenantStore() {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  const openModal = (product: ProductItem) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#090d16] text-slate-100 py-2 text-center text-sm">
        Welcome to Ryan Tech Gear – Your destination for cutting‑edge tech gear!
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-indigo-600">R</div>
            <span className="text-xl font-semibold">Ryan Tech Gear</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#products" className="text-gray-600 hover:text-indigo-600">
              Products
            </a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-indigo-600">
              Why Choose Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            The Future of Tech Gear
          </h1>
          <p className="text-xl mb-8">
            Experience boundary‑pushing audio precision, smart ergonomics, and
            aerospace‑grade accessories designed for performance.
          </p>
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Products
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <Truck className="mx-auto mb-2 text-indigo-600" size={32} />
            <h3 className="text-2xl font-bold">1,200+</h3>
            <p>Products</p>
          </div>
          <div>
            <Star className="mx-auto mb-2 text-indigo-600" size={32} />
            <h3 className="text-2xl font-bold">5,000+</h3>
            <p>Customers</p>
          </div>
          <div>
            <ShieldCheck className="mx-auto mb-2 text-indigo-600" size={32} />
            <h3 className="text-2xl font-bold">4,500+</h3>
            <p>Reviews</p>
          </div>
          <div>
            <Zap className="mx-auto mb-2 text-indigo-600" size={32} />
            <h3 className="text-2xl font-bold">12</h3>
            <p>Awards</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="products" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={product.customFields?.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  {product.customFields?.badge && (
                    <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded">
                      {product.customFields.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                  <p className="text-indigo-600 font-bold mb-2">${product.price}</p>
                  <p className="text-sm text-gray-600 flex-1">
                    {product.customFields?.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.customFields?.features?.map((feat, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {product.customFields?.category}
                    </span>
                    <button
                      onClick={() => openModal(product)}
                      className="flex items-center text-indigo-600 hover:text-indigo-800"
                    >
                      <Eye className="mr-1" size={18} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row">
              <img
                src={selectedProduct.customFields?.imageUrl}
                alt={selectedProduct.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-md"
              />
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.title}</h3>
                <p className="text-indigo-600 font-bold text-xl mb-4">
                  ${selectedProduct.price}
                </p>
                <p className="text-gray-700 mb-4">
                  {selectedProduct.customFields?.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.customFields?.features?.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="mr-2 text-indigo-600" size={18} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    <Mail className="mr-1" size={18} />
                    Inquire
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                  >
                    <ArrowRight className="mr-1" size={18} />
                    Back to Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <Sparkles className="mx-auto mb-4 text-indigo-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Cutting‑edge technology that pushes the limits of performance.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <ShieldCheck className="mx-auto mb-4 text-indigo-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing to ensure durability and reliability.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <Zap className="mx-auto mb-4 text-indigo-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">
                Products engineered for peak performance in every scenario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <form
            action="https://formspree.io/f/mayqkqld"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600">
            <p>Email: ryan@gmail.com</p>
            <p>Phone: 0987654321</p>
            <p className="flex items-center justify-center mt-4">
              <MapPin className="mr-2" size={18} />
              123 Tech Avenue, Silicon Valley
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090d16] text-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&