"use client";

const newsItems = [
  {
    date: "January 22, 2026",
    title: "NexGen Establishes Partnership with Indigenous Communities to Develop a New Hotel in La Loche",
    category: "Community",
  },
  {
    date: "January 15, 2026",
    title: "NexGen Announces Expansion of High-Grade Subdomain at Patterson Corridor East (PCE)",
    category: "Exploration",
  },
  {
    date: "January 8, 2026",
    title: "NexGen Provides Corporate Update and 2026 Outlook",
    category: "Corporate",
  },
  {
    date: "December 15, 2025",
    title: "NexGen Reports Positive Results from Ongoing Optimization Studies at Rook I",
    category: "Project Development",
  },
  {
    date: "December 1, 2025",
    title: "NexGen Completes $200 Million Bought Deal Financing",
    category: "Financing",
  },
  {
    date: "November 20, 2025",
    title: "NexGen Files Updated Technical Report for the Rook I Project",
    category: "Technical",
  },
  {
    date: "November 10, 2025",
    title: "NexGen Reports Q3 2025 Financial Results",
    category: "Financial",
  },
  {
    date: "October 25, 2025",
    title: "NexGen Receives Key Environmental Approval Milestone for Rook I Project",
    category: "Regulatory",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">News & Updates</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Stay informed with the latest news, press releases, and announcements from NexGen Energy.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <article 
                key={index} 
                className="border-b border-gray-200 py-8 hover:bg-[#F8FAFC] px-4 -mx-4 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="text-xs bg-[#F8FAFC] text-[#001F48] px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-medium text-[#001F48] hover:text-[#77bc1f] transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="border-2 border-[#001F48] text-[#001F48] px-8 py-3 font-semibold hover:bg-[#001F48] hover:text-white transition-colors">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-8 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light text-[#001F48] mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive news and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f] w-full sm:w-80"
            />
            <button className="bg-[#77bc1f] text-white px-6 py-3 font-semibold hover:bg-[#68AE18] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
