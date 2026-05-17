export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="font-serif text-2xl font-bold mb-4 text-white tracking-wider">Blush & Linen</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
            Your path to wellness and rejuvenation. Experience the look you always wanted in our serene aesthetic spa.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-blush mb-4 font-semibold font-sans">Quick Links</h3>
          <ul className="space-y-3 font-sans">
            <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Home</a></li>
            <li><a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a></li>
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Our Services</a></li>
            <li><a href="#faqs" className="text-white/70 hover:text-white transition-colors text-sm">FAQs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-blush mb-4 font-semibold font-sans">Treatments</h3>
          <ul className="space-y-3 font-sans">
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">PRP Facial</a></li>
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Medical Weightloss</a></li>
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Facial Aesthetics</a></li>
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Hormone Replacement</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-blush mb-4 font-semibold font-sans">Contact</h3>
          <ul className="space-y-3 text-white/70 text-sm font-sans">
            <li>Weekend & Evenings By Appointment Only</li>
            <li>569 County Line Road</li>
            <li>Wayne, PA 19087</li>
            <li className="pt-2">
              <a href="mailto:info@blushandlinen.com" className="text-blush hover:underline">info@blushandlinen.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/50 font-sans tracking-wider">
        &copy; {new Date().getFullYear()} Blush & Linen Aesthetics. All rights reserved.
      </div>
    </footer>
  );
}
