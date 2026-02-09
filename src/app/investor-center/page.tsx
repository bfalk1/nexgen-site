"use client";

import Link from "next/link";

export default function InvestorCenterPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">Investor Center</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Access financial reports, stock information, presentations, and investor resources.
          </p>
        </div>
      </section>

      {/* Investor Overview */}
      <section id="overview" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Investor Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-4">Why Invest in NexGen?</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• World-class Arrow deposit</li>
                <li>• Tier-1 jurisdiction (Canada)</li>
                <li>• Experienced management team</li>
                <li>• Strong balance sheet</li>
                <li>• Growing uranium demand</li>
              </ul>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-4">Listed Exchanges</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">TSX</span>
                  <span className="font-semibold text-[#001F48]">NXE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NYSE</span>
                  <span className="font-semibold text-[#001F48]">NXE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ASX</span>
                  <span className="font-semibold text-[#001F48]">NXG</span>
                </div>
              </div>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-4">Investor Contact</h3>
              <p className="text-gray-600 text-sm mb-4">
                For investor inquiries, please contact our Investor Relations team.
              </p>
              <p className="text-sm">
                <strong>Email:</strong> investors@nexgenenergy.ca<br />
                <strong>Phone:</strong> +1 604 428 4112
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Information */}
      <section id="stock" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Stock Information</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">TSX: NXE</p>
                <p className="text-4xl font-light text-[#001F48]">$15.76</p>
                <p className="text-[#77bc1f] font-semibold mt-2">+$0.72 (+4.79%)</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">NYSE: NXE</p>
                <p className="text-4xl font-light text-[#001F48]">$11.63</p>
                <p className="text-[#77bc1f] font-semibold mt-2">+$0.58 (+5.25%)</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">ASX: NXG</p>
                <p className="text-4xl font-light text-[#001F48]">$15.83</p>
                <p className="text-[#77bc1f] font-semibold mt-2">+$0.23 (+1.47%)</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Stock prices are delayed. See exchange websites for real-time quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Share Structure */}
      <section id="share-structure" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Share Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-6">Outstanding Shares</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600">Common Shares Outstanding</span>
                  <span className="font-semibold text-[#001F48]">~540 million</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600">Options Outstanding</span>
                  <span className="font-semibold text-[#001F48]">~12 million</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fully Diluted</span>
                  <span className="font-semibold text-[#001F48]">~552 million</span>
                </div>
              </div>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-6">Top Shareholders</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Institutional Investors</span>
                  <span className="font-semibold text-[#001F48]">~45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Retail Investors</span>
                  <span className="font-semibold text-[#001F48]">~35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insiders & Management</span>
                  <span className="font-semibold text-[#001F48]">~5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Other</span>
                  <span className="font-semibold text-[#001F48]">~15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports and Filings */}
      <section id="reports" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Reports & Filings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#001F48] mb-4">Annual Reports</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">2025 Annual Report</span>
                  <a href="#" className="text-[#77bc1f] hover:underline">PDF</a>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">2024 Annual Report</span>
                  <a href="#" className="text-[#77bc1f] hover:underline">PDF</a>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">2023 Annual Report</span>
                  <a href="#" className="text-[#77bc1f] hover:underline">PDF</a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#001F48] mb-4">Quarterly Reports</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Q4 2025</span>
                  <a href="#" className="text-[#77bc1f] hover:underline">PDF</a>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Q3 2025</span>
                  <a href="#" className="text-[#77bc1f] hover:underline">PDF</a>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Q2 2025</span>
                  <a href="#" className="text-[#77bc1f] hover:underline">PDF</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Events & Webcasts</h2>
          <div className="space-y-4">
            <div className="bg-[#F8FAFC] p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#77bc1f] font-semibold">UPCOMING</p>
                <h3 className="font-semibold text-[#001F48]">Q4 2025 Earnings Call</h3>
                <p className="text-gray-600 text-sm">February 15, 2026 at 10:00 AM ET</p>
              </div>
              <button className="bg-[#001F48] text-white px-6 py-2 text-sm font-semibold hover:bg-[#002F6C] transition-colors">
                Register
              </button>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 font-semibold">PAST EVENT</p>
                <h3 className="font-semibold text-[#001F48]">Q3 2025 Earnings Call</h3>
                <p className="text-gray-600 text-sm">November 10, 2025</p>
              </div>
              <button className="border border-[#001F48] text-[#001F48] px-6 py-2 text-sm font-semibold hover:bg-[#001F48] hover:text-white transition-colors">
                Watch Replay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Analyst Coverage */}
      <section id="analyst" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Analyst Coverage</h2>
          <p className="text-gray-600 mb-8">
            NexGen is covered by the following research analysts. Please note that any opinions, 
            estimates, or forecasts made by these analysts are theirs alone.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["BMO Capital Markets", "Canaccord Genuity", "CIBC Capital Markets", 
              "National Bank Financial", "Raymond James", "RBC Capital Markets",
              "Scotiabank", "TD Securities", "UBS"].map((firm) => (
              <div key={firm} className="bg-white p-4 rounded-lg text-center">
                <span className="text-[#001F48] font-medium">{firm}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
