"use client";

export default function CleanEnergyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">Clean Energy</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Nuclear energy is essential to achieving global climate goals and powering a sustainable future.
          </p>
        </div>
      </section>

      {/* Why Nuclear */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8 text-center">Why Nuclear Energy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#77bc1f] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#001F48] mb-4">Reliable Baseload Power</h3>
              <p className="text-gray-600">
                Nuclear provides consistent, 24/7 electricity generation regardless of weather conditions, 
                unlike intermittent renewable sources.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#77bc1f] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#001F48] mb-4">Zero Emissions</h3>
              <p className="text-gray-600">
                Nuclear power produces virtually zero greenhouse gas emissions during operation, 
                making it essential for decarbonization.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#77bc1f] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#001F48] mb-4">Small Land Footprint</h3>
              <p className="text-gray-600">
                Nuclear plants require far less land than wind or solar farms to produce the same 
                amount of electricity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Demand */}
      <section className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Growing Global Demand</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The world is recognizing nuclear energy as essential to meeting climate goals. 
                Countries across the globe are extending the life of existing reactors and planning 
                new nuclear capacity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At COP28, over 20 countries pledged to triple nuclear energy capacity by 2050. 
                This commitment signals a significant increase in uranium demand in the coming decades.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                NexGen is positioned to be a leading supplier of uranium to fuel this clean energy future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">440+</div>
                <p className="text-gray-600 text-sm">Reactors Operating Worldwide</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">60+</div>
                <p className="text-gray-600 text-sm">Reactors Under Construction</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">100+</div>
                <p className="text-gray-600 text-sm">Reactors Planned</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">10%</div>
                <p className="text-gray-600 text-sm">Of Global Electricity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uranium Supply */}
      <section className="py-20 px-8 bg-[#001F48] text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">The Uranium Supply Challenge</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            Global uranium supply has not kept pace with growing demand. New mines are needed 
            to fuel the expansion of nuclear energy worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Supply Deficit</h3>
              <p className="opacity-80">
                Primary mine production covers less than 75% of reactor requirements. 
                The gap is filled by secondary supplies that are depleting.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">New Mines Needed</h3>
              <p className="opacity-80">
                Existing mines are aging and new production is required. Few new large-scale, 
                high-grade deposits have been discovered.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Arrow&apos;s Role</h3>
              <p className="opacity-80">
                NexGen&apos;s Arrow deposit is uniquely positioned to fill the supply gap with 
                its exceptional grade and scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
