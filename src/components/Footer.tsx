import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gray-900">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Karo Pitch is a platform built to connect India's most promising founders with investors worldwide.
            </p>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-karo-blue text-sm">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-karo-blue text-sm">Contact us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-karo-blue text-sm">Partner With Us</a></li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Social Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-karo-blue text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-karo-blue text-sm">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-karo-blue text-sm">Help</a></li>
            </ul>
          </div>

          {/* Copyright Section Header */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Copyright</h3>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-karo-blue hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-karo-blue hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-karo-blue hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-karo-blue hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Startup Platform - Karo Pitch</p>
          <p>Copyright © 2025 Karo Pitch</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
