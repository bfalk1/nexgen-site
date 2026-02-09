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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://s28.q4cdn.com/891672792/files/design/NexGen-Logo.svg"
              alt="NexGen Energy Logo"
              width={160}
              height={45}
              className="h-10 w-auto"
              priority
            />
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
                  <button className="px-3 py-2 text-sm font-medium text-[#002F6C] hover:text-[#77bc1f] transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="px-3 py-2 text-sm font-medium text-[#002F6C] hover:text-[#77bc1f] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-2 border-[#77bc1f] py-2 mt-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-[#002F6C] hover:bg-[#F8FAFC] hover:text-[#77bc1f] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search Icon */}
            <button className="p-2 text-[#002F6C] hover:text-[#77bc1f] transition-colors ml-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#002F6C]"
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
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-3 text-sm font-medium text-[#002F6C] cursor-pointer hover:bg-[#F8FAFC] rounded">
                      {item.label}
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-[#77bc1f] ml-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[#77bc1f] hover:bg-[#F8FAFC] rounded"
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
                    className="block px-3 py-3 text-sm font-medium text-[#002F6C] hover:bg-[#F8FAFC] rounded"
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
