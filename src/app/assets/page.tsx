"use client";

import Link from "next/link";

const assets = [
  { name: "Arrow", description: "World's largest development-stage high-grade uranium deposit", status: "Development", href: "/assets/arrow" },
  { name: "PCE", description: "Patterson Corridor East - High-grade discovery with significant exploration upside", status: "Exploration", href: "/assets/pce" },
  { name: "Bow", description: "Discovery with high-grade uranium mineralization", status: "Exploration", href: "/assets/bow" },
  { name: "Harpoon", description: "Prospective target with strong geological indicators", status: "Exploration", href: "/assets/harpoon" },
  { name: "South Arrow", description: "Extension target south of the Arrow deposit", status: "Exploration", href: "/assets/south-arrow" },
  { name: "SW1", description: "Southwest exploration target", status: "Exploration", href: "/assets/sw1" },
  { name: "SW2", description: "Southwest exploration target", status: "Exploration", href: "/assets/sw2" },
  { name: "SW3", description: "Southwest exploration target", status: "Exploration", href: "/assets/sw3" },
];

export default function AssetsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">Our Assets</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            NexGen controls a portfolio of uranium assets in the world-class Athabasca Basin, 
            Saskatchewan, Canada.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Asset Portfolio</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl">
            Our 100%-owned Rook I property hosts multiple uranium deposits and discovery targets. 
            The flagship Arrow deposit is the cornerstone of our development plans, with additional 
            exploration upside across the property.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <Link 
                key={asset.name} 
                href={asset.href}
                className="bg-[#F8FAFC] p-6 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#001F48] group-hover:text-[#77bc1f] transition-colors">
                    {asset.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    asset.status === "Development" 
                      ? "bg-[#77bc1f] text-white" 
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {asset.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{asset.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8 text-center">Property Location</h2>
          <div className="bg-[#001F48] rounded-lg p-8 text-center text-white">
            <p className="text-lg opacity-90 mb-4">
              Located in the southwestern Athabasca Basin, Saskatchewan, Canada
            </p>
            <p className="opacity-70">
              The Athabasca Basin hosts the world&apos;s highest-grade uranium deposits and has been 
              producing uranium for over 50 years.
            </p>
          </div>
        </div>
      </section>

      {/* IsoEnergy */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">IsoEnergy Investment</h2>
          <div className="bg-[#F8FAFC] p-8 rounded-lg">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              NexGen holds a significant equity stake in IsoEnergy Ltd. (TSXV: ISO), a uranium 
              exploration and development company with projects in the eastern Athabasca Basin.
            </p>
            <p className="text-gray-600">
              IsoEnergy&apos;s flagship Hurricane deposit represents one of the highest-grade uranium 
              discoveries in the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
