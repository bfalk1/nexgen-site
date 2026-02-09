"use client";

const openings = [
  { title: "Senior Mine Engineer", location: "Saskatoon, SK", type: "Full-time" },
  { title: "Environmental Scientist", location: "Saskatoon, SK", type: "Full-time" },
  { title: "Community Relations Coordinator", location: "La Loche, SK", type: "Full-time" },
  { title: "Health & Safety Specialist", location: "Saskatoon, SK", type: "Full-time" },
  { title: "Project Geologist", location: "Saskatoon, SK", type: "Full-time" },
  { title: "Financial Analyst", location: "Vancouver, BC", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">Careers</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Join our team and help shape the future of clean energy.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8 text-center">Why Join NexGen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#77bc1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#001F48] mb-2">Meaningful Work</h3>
              <p className="text-gray-600 text-sm">Contribute to the global clean energy transition</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#77bc1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#001F48] mb-2">Great Team</h3>
              <p className="text-gray-600 text-sm">Work with experienced industry professionals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#77bc1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#001F48] mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">Develop your career as we grow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Current Openings</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div>
                  <h3 className="font-semibold text-[#001F48] text-lg">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location} • {job.type}</p>
                </div>
                <button className="bg-[#001F48] text-white px-6 py-2 text-sm font-semibold hover:bg-[#002F6C] transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8 text-center">Benefits & Perks</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#F8FAFC] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-[#001F48] mb-2">Health Benefits</h3>
              <p className="text-gray-600 text-sm">Comprehensive health, dental, and vision coverage</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-[#001F48] mb-2">RRSP Matching</h3>
              <p className="text-gray-600 text-sm">Company matching contributions to retirement savings</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-[#001F48] mb-2">Paid Time Off</h3>
              <p className="text-gray-600 text-sm">Generous vacation and personal days</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg text-center">
              <h3 className="font-semibold text-[#001F48] mb-2">Stock Options</h3>
              <p className="text-gray-600 text-sm">Participate in company success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
