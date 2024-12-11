import React from 'react';
import { Twitter, Facebook, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-50/50 py-4 md:py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-600">
            QuickHireUp all rights reserved
        </p>

        {/* Links */}
        <div className="flex gap-4 md:gap-6">
          <a 
            href="/terms" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="/privacy" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-4 md:h-5 w-4 md:w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-4 md:h-5 w-4 md:w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 md:h-5 w-4 md:w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

