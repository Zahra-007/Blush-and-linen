"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Loved my visit with this doctor. I felt safe, she is so nice and so knowledgeable about beauty and it's easy to ask her questions. An all around positive experience.",
    author: "Sarah M."
  },
  {
    text: "Amazing experience and service from the owner from the time of calling to make a reservation all the way through to checkout.",
    author: "Jessica T."
  },
  {
    text: "Amazing experience! 5 Stars!!!!! Very thorough. Explained the procedure. Flexible and accommodating to her client's schedule.",
    author: "Emily R."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blush-dark/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-linen/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blush tracking-[0.2em] text-sm uppercase font-semibold mb-3 block font-sans">Real Results</span>
          <h2 className="text-4xl md:text-5xl font-serif">Client Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
            >
              <Quote className="text-blush/40 w-10 h-10 mb-4" />
              <p className="font-sans text-white/80 leading-relaxed mb-6 min-h-[120px]">
                "{item.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blush/20 rounded-full flex items-center justify-center text-blush font-serif mr-4">
                  {item.author.charAt(0)}
                </div>
                <span className="font-serif tracking-wider">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
