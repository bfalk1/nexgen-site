"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Intersection Observer hook for fade-in animations
function useFadeIn() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero">
      <h1 className="f-light px-4">Securing the Energy Transition</h1>
      <Link href="/rook-1-project" className="btn-primary">
        See progress at ROOK I
      </Link>
    </section>
  );
}

// Engagement Headline Section
function EngagementHeadline() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="engagement-section fade-in bg-white">
      <h1 className="f-light">
        Setting elite standards for a cleaner more sustainable world
      </h1>
    </section>
  );
}

// Engagement Details Section
function EngagementDetails() {
  const ref1 = useFadeIn();
  const ref2 = useFadeIn();

  return (
    <div className="bg-white">
      <section ref={ref1} className="engagement-wrap fade-in">
        <div className="figure-section">
          <div className="w-24 h-24 bg-[#0f5ca3]/10 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-[#0f5ca3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="divider hidden md:block"></div>
        <div className="single-text">
          <h4>Industry leading environmental performance</h4>
          <p>
            NexGen&apos;s projects are designed ensuring the highest levels of environmental
            performance incorporating &quot;absolute minimalistic expression&quot;, progressive real time
            reclamation and advanced closure management design.
          </p>
        </div>
      </section>

      <section ref={ref2} className="engagement-wrap fade-in">
        <div className="figure-section">
          <div className="w-24 h-24 bg-[#0f5ca3]/10 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-[#0f5ca3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
        <div className="divider hidden md:block"></div>
        <div className="single-text">
          <h4>Lasting legacy beyond life-of-mine</h4>
          <p>
            Focused on maximizing value to all stakeholders, NexGen is leveraging
            its strong portfolio of projects to deliver generational benefits for Canada and the
            global environment that continue long after closure and reclamation of its projects.
          </p>
        </div>
      </section>
    </div>
  );
}

// Rook I Project Section
function RookSection() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="rook-section fade-in">
      <div className="texts">
        <p className="caption">PROJECT</p>
        <h1 className="f-light">A leading global project</h1>
        <p className="subheading">
          Rook I is a proposed uranium mine and mill development located in Saskatchewan&apos;s 
          southwestern Athabasca Basin. It will be a significant supplier of uranium to meet 
          growing global demand for a zero emission clean energy source.
        </p>
        <Link href="/rook-1-project" className="btn-outline">
          Learn more about Rook I
        </Link>
      </div>
    </section>
  );
}

// Highlights Section
function HighlightsSection() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="highlights-section fade-in">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h2>NexGen Team Profile</h2>
          <p>
            Proven leadership and execution experience powering NexGen from development to production.
          </p>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-[#0f5ca3] mb-2">150+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-light text-[#0f5ca3] mb-2">200+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-light text-[#0f5ca3] mb-2">$10B+</div>
              <div className="text-gray-600">Project Development Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stock Quote Section
function StockSection() {
  return (
    <section className="stock-section">
      <div className="wrapper">
        <h2 className="f-light">Stock Information</h2>
        <div className="stock-row">
          <div className="stock-exchange">
            <span className="text-gray-400 text-sm block">TSX</span>
            NXE
          </div>
          <div className="stock-price">$12.45</div>
          <div className="stock-change up">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>+0.32 (+2.64%)</span>
          </div>
        </div>
        <div className="stock-row">
          <div className="stock-exchange">
            <span className="text-gray-400 text-sm block">NYSE</span>
            NXE
          </div>
          <div className="stock-price">$9.18</div>
          <div className="stock-change up">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>+0.24 (+2.68%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// News Section
function NewsSection() {
  const ref = useFadeIn();
  const news = [
    {
      date: "February 5, 2026",
      title: "NexGen Reports Q4 2025 Results and Provides 2026 Guidance",
      excerpt: "NexGen Energy Ltd. announces fourth quarter 2025 financial results and operational update.",
    },
    {
      date: "January 28, 2026",
      title: "NexGen Receives Key Regulatory Milestone for Rook I Project",
      excerpt: "Significant progress made in the permitting process for the Rook I uranium project.",
    },
    {
      date: "January 15, 2026",
      title: "NexGen Announces Appointment of New Board Member",
      excerpt: "Company strengthens board with appointment of industry veteran.",
    },
  ];

  return (
    <section ref={ref} className="news-section fade-in">
      <div className="wrapper">
        <h2>Latest News</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <article key={index} className="news-card">
              <div className="content">
                <p className="date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/news" 
            className="inline-block px-8 py-3 border-2 border-[#001f48] text-[#001f48] font-semibold hover:bg-[#001f48] hover:text-white transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Homepage
export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <EngagementHeadline />
      <EngagementDetails />
      <RookSection />
      <HighlightsSection />
      <StockSection />
      <NewsSection />
    </div>
  );
}
