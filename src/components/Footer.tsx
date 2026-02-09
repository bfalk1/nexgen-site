"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001f48] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Email Signup */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="https://s28.q4cdn.com/891672792/files/design/logo-white.svg"
                alt="NexGen Energy Logo"
                width={180}
                height={50}
                className="logo"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Join our email list. Select the updates you would like to receive.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <button className="bg-[#77bc1f] hover:bg-[#68AE18] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/70">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="/company#about-us" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company/commitments" className="text-gray-400 text-sm hover:text-white transition-colors">Commitments</Link></li>
              <li><Link href="/company#management-team" className="text-gray-400 text-sm hover:text-white transition-colors">Management</Link></li>
              <li><Link href="/company#board-of-directors" className="text-gray-400 text-sm hover:text-white transition-colors">Board of Directors</Link></li>
              <li><Link href="/company#corporate-governance" className="text-gray-400 text-sm hover:text-white transition-colors">Corporate Governance</Link></li>
            </ul>
          </div>

          {/* Sustainability Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/70">
              Sustainability
            </h4>
            <ul className="space-y-3">
              <li><Link href="/sustainability" className="text-gray-400 text-sm hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/sustainability#our-commitment" className="text-gray-400 text-sm hover:text-white transition-colors">Our Commitment</Link></li>
              <li><Link href="/sustainability#esg" className="text-gray-400 text-sm hover:text-white transition-colors">Sustainability Report</Link></li>
              <li><Link href="/sustainability#stewardship" className="text-gray-400 text-sm hover:text-white transition-colors">Stewardship</Link></li>
              <li><Link href="/sustainability#indigenous" className="text-gray-400 text-sm hover:text-white transition-colors">Indigenous Relations</Link></li>
            </ul>
          </div>

          {/* Investor Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/70">
              Investors
            </h4>
            <ul className="space-y-3">
              <li><Link href="/investor-center#overview" className="text-gray-400 text-sm hover:text-white transition-colors">Investor Overview</Link></li>
              <li><Link href="/investor-center#stock" className="text-gray-400 text-sm hover:text-white transition-colors">Stock Information</Link></li>
              <li><Link href="/investor-center#reports" className="text-gray-400 text-sm hover:text-white transition-colors">Reports & Filings</Link></li>
              <li><Link href="/investor-center#events" className="text-gray-400 text-sm hover:text-white transition-colors">Events & Webcasts</Link></li>
              <li><Link href="/news" className="text-gray-400 text-sm hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NexGen Energy Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
