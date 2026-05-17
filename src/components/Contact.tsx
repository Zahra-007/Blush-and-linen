"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-blush-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1600334129128-685054110de4?q=80&w=1000&auto=format&fit=crop" 
              alt="Contact Us Spa" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-serif mb-2">Visit Us</h3>
              <p className="font-sans text-white/90 text-sm">569 County Line Road, Wayne PA 19087</p>
              <p className="font-sans text-white/90 text-sm mt-1">Weekend & Evenings By Appointment Only</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2 p-10 md:p-16">
            <span className="text-blush-dark tracking-[0.2em] text-sm uppercase font-semibold mb-3 block font-sans">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">Book a Consultation</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-light mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full border-b border-linen-dark bg-transparent py-2 focus:outline-none focus:border-blush-dark transition-colors font-sans text-charcoal" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-light mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full border-b border-linen-dark bg-transparent py-2 focus:outline-none focus:border-blush-dark transition-colors font-sans text-charcoal" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-light mb-2">Email Address</label>
                <input type="email" id="email" className="w-full border-b border-linen-dark bg-transparent py-2 focus:outline-none focus:border-blush-dark transition-colors font-sans text-charcoal" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-charcoal-light mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full border-b border-linen-dark bg-transparent py-2 focus:outline-none focus:border-blush-dark transition-colors font-sans text-charcoal resize-none"></textarea>
              </div>
              
              <button type="button" className="w-full bg-charcoal text-white py-4 text-sm uppercase tracking-widest font-semibold hover:bg-blush hover:text-charcoal transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
