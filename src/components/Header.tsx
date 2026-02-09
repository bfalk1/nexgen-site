"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Homepage", href: "/" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-[#001f48] font-bold text-2xl tracking-tight">
              <span className="font-light">Nex</span>Gen
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0f5ca3] transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0f5ca3] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 rounded-md py-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0f5ca3] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-[#0f5ca3] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer">
                      {item.label}
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0f5ca3]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0f5ca3]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
