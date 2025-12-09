"use client";

import React from "react";

import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

// Define the common sign-up URL
const SIGN_UP_PATH = "/auth/sign-up"; 

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white via-blue-50 to-blue-100 border-t border-blue-200">
      
      {/* Footer Top Content Wrapper */}
      <div className="py-12 lg:py-16">
        
        {/* Inner Container for Content (MAX-WIDTH and horizontal padding added here) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Main Footer Content Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            
            {/* 1. Logo Section */}
            <div className="lg:col-span-1 col-span-2 md:col-span-1 space-y-4">
                <Link href="/" className="flex items-center space-x-2 text-2xl font-extrabold text-blue-600 tracking-tight transition hover:text-blue-700">
                    MasterOne
                </Link>
                <p className="text-sm text-gray-700 max-w-xs">
                    Your Personal Startup Mentor — Get Expert Startup Advice, Powered by AI.
                </p>
            </div>

            {/* 2. Resources Section */}
            <div className="space-y-4">
                <h2 className="font-bold text-base text-gray-900">Resources</h2>
                <ul className="flex flex-col space-y-3 text-sm">
                <li><Link href="/book-summaries" className="text-gray-700 hover:text-blue-600 transition">Book Summaries</Link></li>
                <li><Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Success Stories</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Contact Us</Link></li>
                </ul>
            </div>

            {/* 3. Community Section */}
            <div className="space-y-4">
                <h2 className="font-bold text-base text-gray-900">Community</h2>
                <ul className="flex flex-col space-y-3 text-sm">
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Join Forum</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Events</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Webinars</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Mentorship</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Feedback</Link></li>
                </ul>
            </div>

            {/* 4. Legal & Support Section */}
            <div className="space-y-4">
                <h2 className="font-bold text-base text-gray-900">Legal & Support</h2>
                <ul className="flex flex-col space-y-3 text-sm">
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Privacy Policy</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Terms of Service</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Support Center</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">FAQ</Link></li>
                <li><Link href={SIGN_UP_PATH} className="text-gray-700 hover:text-blue-600 transition">Sitemap</Link></li>
                </ul>
            </div>

            {/* 5. Subscribe Section */}
            <div className="lg:col-span-1 col-span-2 md:col-span-2 lg:md-1 space-y-4">
                <h2 className="font-bold text-base text-gray-900">Join Our Newsletter</h2>
                <p className="text-sm text-gray-700">
                Stay informed about updates and new features.
                </p>
                <form method="post" className="space-y-3">
                <input
                    type="email"
                    name="email"
                    className="w-full bg-white p-3 rounded-lg border border-blue-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                />
                <Button
                    onClick={(e) => { e.stopPropagation(); /* Add form submission logic here */ }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                >
                    Subscribe Now
                </Button>
                </form>
                <p className="text-xs text-gray-600">
                We respect your privacy.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Full Width Border and Content) */}
      <div className="border-t border-blue-200 bg-blue-50">
        {/* Inner Container for Bottom Content (Same Max-Width and padding) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm text-gray-700">
                
                {/* Copyright and Legal Links */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                    <p>© {CURRENT_YEAR} MasterOne. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link href={SIGN_UP_PATH} className="hover:text-blue-600 transition">Privacy</Link>
                        <Link href={SIGN_UP_PATH} className="hover:text-blue-600 transition">Terms</Link>
                    </div>
                </div>
                
                {/* Social Icons */}
                <div className="flex items-center space-x-5">
                    <Link href={SIGN_UP_PATH} className="text-gray-600 hover:text-blue-600 transition">
                        <InstagramLogoIcon className="h-5 w-5" />
                    </Link>
                    <Link href={SIGN_UP_PATH} className="text-gray-600 hover:text-blue-600 transition">
                        <LinkedInLogoIcon className="h-5 w-5" />
                    </Link>
                    <Link href={SIGN_UP_PATH} className="text-gray-600 hover:text-blue-600 transition">
                        <TwitterLogoIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}