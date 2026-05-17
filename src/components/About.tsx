"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] rounded-tl-full rounded-br-full overflow-hidden p-2 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1000&auto=format&fit=crop" 
                alt="Spa Interior" 
                className="w-full h-full object-cover rounded-tl-full rounded-br-full"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="text-blush-dark tracking-[0.2em] text-sm uppercase font-semibold mb-4 block font-sans">The Clinic</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Welcome to Blush & Linen</h2>
            <p className="text-charcoal-light font-sans leading-relaxed mb-6">
              We provide an oasis of tranquility where advanced medical aesthetics meet holistic wellness. Our mission is to help you uncover the look you always wanted while ensuring you feel safe, heard, and deeply cared for.
            </p>
            <p className="text-charcoal-light font-sans leading-relaxed mb-8">
              Led by Dr. Thapliyal, our team is dedicated to offering personalized, results-driven treatments in a serene environment. From microneedling to medical weight loss, we bring the latest innovations to your wellness journey.
            </p>
            
            <a href="#services" className="inline-block border border-charcoal text-charcoal px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-charcoal hover:text-white transition-colors duration-300">
              Discover Our Clinic
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
