import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/career" className="text-sm text-gray-600 hover:text-gray-900">Career</Link></li>
              <li><Link to="/news" className="text-sm text-gray-600 hover:text-gray-900">News</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/accessibility" className="text-sm text-gray-600 hover:text-gray-900">Accessibility</Link></li>
              <li><Link to="/partners" className="text-sm text-gray-600 hover:text-gray-900">Partners</Link></li>
              <li><Link to="/employers" className="text-sm text-gray-600 hover:text-gray-900">Employers</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms Of Use</Link></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about-joblor" className="text-sm text-gray-600 hover:text-gray-900">About Joblor</Link></li>
              <li><Link to="/work-for-joblor" className="text-sm text-gray-600 hover:text-gray-900">Work for Joblor</Link></li>
              <li><Link to="/contact-us" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          {/* Language Selector */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md">
              <img src="/us-flag.png" alt="US Flag" className="w-4 h-4" />
              <span className="text-sm">United States (English)</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link to="#" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
            </Link>
          </div>

          {/* App Store Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="#" className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
              <span className="text-sm">Google Play</span>
            </Link>
            <Link to="#" className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
              <span className="text-sm">App Store</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          Joblor Copyright © 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;
