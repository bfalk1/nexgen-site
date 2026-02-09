"use client";

import Link from "next/link";

export default function RookIProjectPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#001F48] text-white py-32 px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/rook-bg.jpg')" }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">PROJECT</p>
          <h1 className="text-5xl font-light mb-6">Rook I Project</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            A proposed uranium mine and mill development located in Saskatchewan&apos;s 
            southwestern Athabasca Basin.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-[#001F48] mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Rook I Project will be a significant supplier of uranium to meet growing global 
                demand for a zero emission clean energy source. Located in the uranium-rich Athabasca 
                Basin of northern Saskatchewan, the project is designed to set new standards in 
                environmental performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The project hosts Arrow, the largest development-stage high-grade uranium deposit 
                in the world, with exceptional grades and scale that position it as a tier-one 
                global uranium asset.
              </p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-[#001F48] mb-6">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold text-[#001F48]">Saskatchewan, Canada</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600">Deposit</span>
                  <span className="font-semibold text-[#001F48]">Arrow</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold text-[#001F48]">Underground Mine & Mill</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-[#77bc1f]">Development Stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Development */}
      <section id="current-development" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Current Development Stage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#77bc1f] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-[#001F48] mb-3">Regulatory Approvals</h3>
              <p className="text-gray-600">
                Final Environmental Impact Statement submitted. Working through federal and provincial 
                licensing processes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#77bc1f] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-[#001F48] mb-3">Engineering & Design</h3>
              <p className="text-gray-600">
                Detailed engineering advancing. Industry-leading environmental design incorporating 
                best available technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#77bc1f] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-[#001F48] mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Deep partnerships with Indigenous communities and local stakeholders. Impact benefit 
                agreements in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Benefits */}
      <section id="economic-benefits" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-12 text-center">Economic Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-[#77bc1f] mb-2">$5B+</div>
              <p className="text-gray-600">Total Economic Contribution</p>
            </div>
            <div>
              <div className="text-4xl font-light text-[#77bc1f] mb-2">500+</div>
              <p className="text-gray-600">Construction Jobs</p>
            </div>
            <div>
              <div className="text-4xl font-light text-[#77bc1f] mb-2">300+</div>
              <p className="text-gray-600">Permanent Operations Jobs</p>
            </div>
            <div>
              <div className="text-4xl font-light text-[#77bc1f] mb-2">$2B+</div>
              <p className="text-gray-600">Tax & Royalty Revenues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mineral Reserves */}
      <section id="mineral-reserves" className="py-20 px-8 bg-[#001F48] text-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Mineral Reserves & Resources</h2>
          <div className="bg-white/10 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Proven & Probable Reserves</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="opacity-80">Tonnes</span>
                    <span className="font-semibold">4.57 million</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="opacity-80">Grade</span>
                    <span className="font-semibold">2.37% U₃O₈</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Contained U₃O₈</span>
                    <span className="font-semibold">239.6 Mlbs</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Measured & Indicated Resources</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="opacity-80">Tonnes</span>
                    <span className="font-semibold">5.19 million</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="opacity-80">Grade</span>
                    <span className="font-semibold">2.14% U₃O₈</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Contained U₃O₈</span>
                    <span className="font-semibold">245.5 Mlbs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
