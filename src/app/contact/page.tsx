"use client";

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Get in touch with our team. We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-[#001F48] mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-[#001F48] mb-2">Head Office</h3>
                  <p className="text-gray-600">
                    Suite 3150 - 1021 West Hastings Street<br />
                    Vancouver, BC V6E 0C3<br />
                    Canada
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#001F48] mb-2">Saskatchewan Office</h3>
                  <p className="text-gray-600">
                    Suite 200 - 3530 Millar Avenue<br />
                    Saskatoon, SK S7P 0B6<br />
                    Canada
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#001F48] mb-2">General Inquiries</h3>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +1 604 428 4112<br />
                    <strong>Email:</strong> info@nexgenenergy.ca
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#001F48] mb-2">Investor Relations</h3>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +1 604 428 4112<br />
                    <strong>Email:</strong> investors@nexgenenergy.ca
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#001F48] mb-2">Media Inquiries</h3>
                  <p className="text-gray-600">
                    <strong>Email:</strong> media@nexgenenergy.ca
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F8FAFC] p-8 rounded-lg">
              <h2 className="text-2xl font-light text-[#001F48] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f]">
                    <option>General Inquiry</option>
                    <option>Investor Relations</option>
                    <option>Media Inquiry</option>
                    <option>Community Relations</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#77bc1f]"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#001F48] text-white py-3 font-semibold hover:bg-[#002F6C] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-8 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light text-[#001F48] mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-[#001F48] rounded-full flex items-center justify-center text-white hover:bg-[#77bc1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#001F48] rounded-full flex items-center justify-center text-white hover:bg-[#77bc1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#001F48] rounded-full flex items-center justify-center text-white hover:bg-[#77bc1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
