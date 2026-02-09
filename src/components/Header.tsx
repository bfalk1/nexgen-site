"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company#about-us" },
      { label: "Commitments", href: "/company/commitments" },
      { label: "Management", href: "/company#management-team" },
      { label: "Board of Directors", href: "/company#board-of-directors" },
      { label: "Corporate Governance", href: "/company#corporate-governance" },
    ],
  },
  {
    label: "Sustainability",
    children: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "Our Commitment", href: "/sustainability#our-commitment" },
      { label: "Sustainability Report", href: "/sustainability#esg" },
      { label: "Stewardship", href: "/sustainability#stewardship" },
      { label: "Our Sustainability Practice", href: "/sustainability#practice" },
      { label: "Indigenous & Community Relations", href: "/sustainability#indigenous" },
    ],
  },
  {
    label: "Rook I Project",
    children: [
      { label: "Rook I Project", href: "/rook-1-project" },
      { label: "Current Development Stage", href: "/rook-1-project#current-development" },
      { label: "Economic Benefits", href: "/rook-1-project#economic-benefits" },
      { label: "Mineral Reserves", href: "/rook-1-project#mineral-reserves" },
    ],
  },
  {
    label: "Assets",
    children: [
      { label: "Overview", href: "/assets" },
      { label: "Arrow", href: "/assets/arrow" },
      { label: "PCE", href: "/assets/pce" },
      { label: "Bow", href: "/assets/bow" },
      { label: "Harpoon", href: "/assets/harpoon" },
      { label: "South Arrow", href: "/assets/south-arrow" },
      { label: "SW1", href: "/assets/sw1" },
      { label: "SW2", href: "/assets/sw2" },
      { label: "SW3", href: "/assets/sw3" },
      { label: "IsoEnergy", href: "/assets/isoenergy" },
    ],
  },
  {
    label: "Investor Center",
    children: [
      { label: "Investor Overview", href: "/investor-center#overview" },
      { label: "Corporate Presentations", href: "/investor-center#presentations" },
      { label: "Reports and Filings", href: "/investor-center#reports" },
      { label: "US Shareholders", href: "/investor-center#us-shareholders" },
      { label: "Stock Information", href: "/investor-center#stock" },
      { label: "Share Structure", href: "/investor-center#share-structure" },
      { label: "Events & Webcasts", href: "/investor-center#events" },
      { label: "Analyst Coverage", href: "/investor-center#analyst" },
      { label: "Proxy Voting", href: "/investor-center/proxy-voting" },
    ],
  },
  { label: "Clean Energy", href: "/clean-energy" },
  { label: "News", href: "/news" },
  {
    label: "Careers and Contact",
    children: [
      { label: "Career Centre", href: "/careers" },
      { label: "Connect With Us", href: "/contact" },
      { label: "Email Alerts", href: "/email-alerts" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://s28.q4cdn.com/891672792/files/design/logo-mobile.png"
                alt="NexGen Energy Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              className="p-2 text-[#001F48] hover:text-[#77bc1f] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="https://s28.q4cdn.com/891672792/files/design/logo-mobile.png"
              alt="NexGen Energy Logo"
              width={120}
              height={35}
              className="h-8 w-auto"
            />
            <button
              className="p-2 text-[#001F48] hover:text-[#77bc1f] transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="overflow-y-auto h-[calc(100vh-80px)] py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-6 py-4 text-[#001F48] font-medium cursor-pointer hover:bg-[#F8FAFC] transition-colors">
                      {item.label}
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="bg-[#F8FAFC] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-8 py-3 text-gray-600 hover:text-[#77bc1f] transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="block px-6 py-4 text-[#001F48] font-medium hover:bg-[#F8FAFC] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Search in Menu */}
            <div className="px-6 py-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#77bc1f]"
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
