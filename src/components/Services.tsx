"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Facial Aesthetics",
    description: "Rejuvenate your skin with Microneedling, Botox, Dermaplanning, and Medical Grade Peels.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Medical Weightloss",
    description: "Achieve your goals with our HCG Plus Programs and specialized MIC Injections.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PRP Hair Restoration",
    description: "Advanced solutions for hair thinning using PRP, Laser Caps, and premium products.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hormone Replacement",
    description: "Restore balance and vitality with personalized BHRT therapies.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blush-dark tracking-[0.2em] text-sm uppercase font-semibold mb-3 block font-sans">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Curated Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-t-full">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center px-2">
                <h3 className="text-xl font-serif text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal-light/80 text-sm font-sans mb-4 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-center text-xs uppercase tracking-widest text-blush-dark font-medium group-hover:text-charcoal transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
