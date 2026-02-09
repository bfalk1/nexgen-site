"use client";

export default function SustainabilityPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">Sustainability</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Setting elite standards for environmental stewardship and community partnership.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section id="our-commitment" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NexGen is committed to developing the Rook I Project to the highest standards of 
                environmental performance. We are designing and will operate the project incorporating 
                &quot;absolute minimalistic expression&quot; — minimizing surface disturbance, emissions, and 
                long-term environmental impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach ensures that we not only meet but exceed regulatory requirements, setting 
                new benchmarks for the global uranium mining industry.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#F8FAFC] p-6 rounded-lg">
                <h3 className="font-semibold text-[#001F48] mb-2">Zero Long-Term Surface Tailings</h3>
                <p className="text-gray-600 text-sm">All tailings stored underground in mined-out areas</p>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-lg">
                <h3 className="font-semibold text-[#001F48] mb-2">Minimal Surface Footprint</h3>
                <p className="text-gray-600 text-sm">Industry-leading small surface disturbance area</p>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-lg">
                <h3 className="font-semibold text-[#001F48] mb-2">Progressive Reclamation</h3>
                <p className="text-gray-600 text-sm">Real-time rehabilitation throughout operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG / Sustainability Report */}
      <section id="esg" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Sustainability Report</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-600 mb-6">
              Our annual Sustainability Report provides comprehensive disclosure on our environmental, 
              social, and governance performance. We report in alignment with leading frameworks including 
              GRI, SASB, and TCFD.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">E</div>
                <h3 className="font-semibold text-[#001F48]">Environmental</h3>
                <p className="text-sm text-gray-600 mt-2">Climate, biodiversity, water stewardship</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">S</div>
                <h3 className="font-semibold text-[#001F48]">Social</h3>
                <p className="text-sm text-gray-600 mt-2">Communities, health & safety, diversity</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl font-light text-[#77bc1f] mb-2">G</div>
                <h3 className="font-semibold text-[#001F48]">Governance</h3>
                <p className="text-sm text-gray-600 mt-2">Ethics, transparency, risk management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship */}
      <section id="stewardship" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Environmental Stewardship</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#001F48] text-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Climate Action</h3>
              <p className="opacity-90 mb-4">
                Committed to minimizing greenhouse gas emissions throughout our operations. 
                Our underground mining approach and efficient processing design significantly 
                reduce our carbon footprint compared to conventional operations.
              </p>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• Low-emission mining methods</li>
                <li>• Energy efficiency programs</li>
                <li>• Renewable energy integration</li>
              </ul>
            </div>
            <div className="bg-[#001F48] text-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Water Management</h3>
              <p className="opacity-90 mb-4">
                Implementing best-in-class water management practices to protect water resources. 
                Our closed-loop water system minimizes water use and prevents any discharge to 
                the environment.
              </p>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• Closed-loop water systems</li>
                <li>• Zero discharge design</li>
                <li>• Continuous monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Indigenous Relations */}
      <section id="indigenous" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Indigenous & Community Relations</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NexGen is committed to building meaningful, lasting relationships with Indigenous 
                communities and all stakeholders. We believe that the success of our projects is 
                directly tied to the well-being of the communities in which we operate.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We have established Impact Benefit Agreements with local Indigenous communities, 
                ensuring they share in the benefits of the Rook I Project through employment, 
                training, and business opportunities.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Impact Benefit Agreements in place
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Local employment and training programs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Indigenous business procurement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Community investment programs
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#001F48] mb-6">Community Programs</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#77bc1f] pl-4">
                  <h4 className="font-semibold text-[#001F48]">Education</h4>
                  <p className="text-sm text-gray-600">Scholarships, training, and educational partnerships</p>
                </div>
                <div className="border-l-4 border-[#77bc1f] pl-4">
                  <h4 className="font-semibold text-[#001F48]">Health & Wellness</h4>
                  <p className="text-sm text-gray-600">Supporting community health initiatives</p>
                </div>
                <div className="border-l-4 border-[#77bc1f] pl-4">
                  <h4 className="font-semibold text-[#001F48]">Economic Development</h4>
                  <p className="text-sm text-gray-600">Building local business capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
