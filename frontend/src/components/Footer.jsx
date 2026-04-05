import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#002F2C] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            Tracker
          </h2>
          <p className="text-sm">
            Simple, fast, and developer-friendly analytics for modern websites.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/#features" className="hover:text-white">Features</Link></li>
            <li><Link to="/#pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/#integration" className="hover:text-white">Integration</Link></li>
            <li><Link to="/register" className="hover:text-white">Get Started</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;