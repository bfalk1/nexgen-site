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
      <div className="bg-img-1"></div>
      <div className="bg-img-2"></div>
      <h1 className="f-light">Securing the Energy Transition</h1>
      <p className="commitmentsCTA">
        <button className="more">
          <Link href="/rook-1-project">See progress at ROOK I</Link>
        </button>
      </p>
    </section>
  );
}

// Engagement Headline Section
function EngagementHeadline() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="engagement-1 fade" id="home_section-3">
      <h1 className="f-light">
        Setting elite standards for a cleaner more sustainable world
      </h1>
    </section>
  );
}

// Engagement Details Section
function EngagementDetails() {
  const ref = useFadeIn();

  return (
    <div className="engagements">
      <section className="engagement-2 fade" id="home_section-4" ref={ref}>
        <div className="engagement_wrap" id="e1">
          <div className="info-section">
            <div className="figure-section">
              <Image 
                src="https://s28.q4cdn.com/891672792/files/design/homepage/Icon.png" 
                alt="Environmental icon"
                width={100}
                height={100}
                className="single-figure single-figure_first"
              />
            </div>
            <div className="divider"></div>
            <div className="single-text_wrapper">
              <div className="single-text single-text_first">
                <h4 className="title">Industry leading environmental performance</h4>
                <p className="subheading">
                  NexGen&apos;s projects are designed ensuring the highest levels of environmental
                  performance incorporating &quot;absolute minimalistic expression&quot;, progressive real time
                  reclamation and advanced closure management design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="engagement-3 fade" id="home_section-5">
        <div className="engagement_wrap added-top" id="e2">
          <div className="info-section">
            <div className="figure-section">
              <Image 
                src="https://s28.q4cdn.com/891672792/files/design/homepage/Frame.png" 
                alt="Legacy icon"
                width={100}
                height={100}
                className="single-figure"
              />
            </div>
            <div className="divider"></div>
            <div className="single-text_wrapper">
              <div className="single-text">
                <h4 className="title">Lasting legacy beyond life-of-mine</h4>
                <p className="subheading">
                  Focused on maximizing value to all stakeholders, NexGen is leveraging
                  its strong portfolio of projects to deliver generational benefits for Canada and the
                  global environment that continue long after closure and reclamation of its projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Rook I Project Section
function RookSection() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="rook fade" id="home_section-6">
      <div className="texts">
        <h4 className="caption">PROJECT</h4>
        <h1 className="f-light">A leading global project</h1>
        <p className="subheading">
          Rook I is a proposed uranium mine and mill development located in Saskatchewan&apos;s 
          southwestern Athabasca Basin. It will be a significant supplier of uranium to meet 
          growing global demand for a zero emission clean energy source.
        </p>
        <button className="more">
          <Link href="/rook-1-project">Learn more about Rook I</Link>
        </button>
      </div>
      <div className="bg_wrap full-screen">
        <div className="bg-img zoomed full-screen"></div>
      </div>
    </section>
  );
}

// Highlights Section
function HighlightsSection() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="engagement-4 fade" id="highlights">
      <div className="corporate-presentations-wrapper engagement_wrap" id="e4">
        <div className="texts">
          <div className="text-left">
            <h2>NexGen Team Profile</h2>
            <p>Proven leadership and execution experience powering NexGen from development to production.</p>
          </div>
        </div>
        <div className="text-center">
          <Image 
            src="https://s28.q4cdn.com/891672792/files/images/2026/01/Approved-Homepage-blue.png" 
            alt="NexGen Team Profile"
            width={1000}
            height={500}
            className="highlights-image"
          />
        </div>
      </div>
    </section>
  );
}

// Responsibility / Video Section
function ResponsibilitySection() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="responsibility fade" id="home_section-7">
      <div className="texts" id="video">
        <div style={{ paddingBottom: '60px' }}>
          <h2 className="f-light center">
            Canadian Nuclear Safety Commission Hearing<br />
            Rook I Project Presentation Videos
          </h2>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/3vtvRyXjUCU?si=B3M82-P4xuaZ86NT" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/wgQQfatDxoU?si=0WMuxSPxNWme_Qq6" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
          <p style={{ marginTop: '30px' }}>
            For more videos on our industry-leading approach to responsible development,{' '}
            <a href="https://www.nexgenenergy.ca/sustainability/default.aspx#environmental-stewardship" target="_blank" rel="noopener noreferrer">
              click here
            </a>.
          </p>
          <button className="more">
            <Link href="/sustainability#environmental-stewardship">
              OUR IMPACT<br />VIDEOS
            </Link>
          </button>
        </div>

        <h2 className="f-light center">Creating as much positivity as possible</h2>
        <p>Delivering clean energy solutions while leaving lasting economic, social, and environmental benefits</p>
      </div>

      {/* Community Cards with Background Images */}
      <div className="community-cards-section">
        <div className="community-cards-grid">
          <div 
            className="community-card-new"
            style={{ backgroundImage: "url('https://s28.q4cdn.com/891672792/files/images/2025/image.png')" }}
          >
            <div className="card-overlay">
              <h3>Community Programs</h3>
            </div>
          </div>

          <div 
            className="community-card-new"
            style={{ backgroundImage: "url('https://s28.q4cdn.com/891672792/files/images/2025/image-1.png')" }}
          >
            <div className="card-overlay">
              <h3>Indigenous &amp;<br />Community<br />Engagement</h3>
            </div>
          </div>

          <div 
            className="community-card-new"
            style={{ backgroundImage: "url('https://s28.q4cdn.com/891672792/files/design/homepage/health.png')" }}
          >
            <div className="card-overlay">
              <h3>Health &amp;<br />Safety</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Investors Section
function InvestorsSection() {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="investors fade">
      <div className="bg-white" id="home_section-9">
        <h2 className="headline">Future supplier of clean energy fuel</h2>

        {/* News Module */}
        <div className="module-news">
          <h3 className="title f-bold">Investor News</h3>
          <div className="module_container module_container--widget">
            <div className="module_container--content" id="newsList">
              <div className="module_item">
                <div className="module_date-time">January 22, 2026</div>
                <a className="module_headline-link" href="#">
                  NexGen Establishes Partnership with Indigenous Communities to Develop a New Hotel in La Loche to Support the Communities and Rook I Project
                </a>
              </div>
              <div className="module_item">
                <div className="module_date-time">January 15, 2026</div>
                <a className="module_headline-link" href="#">
                  NexGen Announces Expansion of High-Grade Subdomain at Patterson Corridor East (PCE) and Commencement of 2026 Exploration Program Totalling 45,500 Meters
                </a>
              </div>
              <div className="link-to-more link-to-more_news">
                <Image 
                  src="https://s28.q4cdn.com/891672792/files/design/svg/plus.svg" 
                  alt="More"
                  width={20}
                  height={20}
                  className="plus-icon"
                />
                <Link href="/news">More News</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Module */}
        <div className="module-stock">
          <h3 className="f-bold stock-title">NXE Stock info</h3>
          <div className="module-stock-quote">
            <div className="module_container--tsx">
              <div className="row">
                <div className="module-stock-quote_exchange-cont--desktop">
                  <h2 className="module-stock_lookup-title">TSX</h2>
                </div>
                <div className="module-stock-quote_last-cont">
                  <h6 className="subtitle last">Last</h6>
                  <h2 className="module-stock_price">$15.76</h2>
                </div>
                <div className="module-stock-quote_caret-cont">
                  <span className="module-stock_change-symbol module-stock_up"></span>
                </div>
                <div className="module-stock-quote_change-cont">
                  <h6 className="subtitle change">Change</h6>
                  <h2 className="module-stock_change">$0.72</h2>
                </div>
              </div>
            </div>

            <div className="module_container--nyse">
              <div className="row">
                <div className="module-stock-quote_exchange-cont--desktop">
                  <h2 className="module-stock_lookup-title">NYSE</h2>
                </div>
                <div className="module-stock-quote_last-cont">
                  <h6 className="subtitle last">Last</h6>
                  <h2 className="module-stock_price">$11.63</h2>
                </div>
                <div className="module-stock-quote_caret-cont">
                  <span className="module-stock_change-symbol module-stock_up"></span>
                </div>
                <div className="module-stock-quote_change-cont">
                  <h6 className="subtitle change">Change</h6>
                  <h2 className="module-stock_change">$0.58</h2>
                </div>
              </div>
            </div>

            <div className="module_container--asx">
              <div className="row">
                <div className="module-stock-quote_exchange-cont--desktop">
                  <h2 className="module-stock_lookup-title">ASX</h2>
                </div>
                <div className="module-stock-quote_last-cont">
                  <h6 className="subtitle last">Last</h6>
                  <h2 className="module-stock_price">$15.83</h2>
                </div>
                <div className="module-stock-quote_caret-cont">
                  <span className="module-stock_change-symbol module-stock_up"></span>
                </div>
                <div className="module-stock-quote_change-cont">
                  <h6 className="subtitle change">Change</h6>
                  <h2 className="module-stock_change">$0.23</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="link-to-more link-to-more_stock">
            <Image 
              src="https://s28.q4cdn.com/891672792/files/design/svg/plus.svg" 
              alt="More"
              width={20}
              height={20}
              className="plus-icon"
            />
            <Link href="/investor-center#stock-information">Stock Details</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Homepage
export default function Home() {
  return (
    <div className="homepage pt-20">
      <HeroSection />
      <EngagementHeadline />
      <EngagementDetails />
      <RookSection />
      <HighlightsSection />
      <ResponsibilitySection />
      <InvestorsSection />
    </div>
  );
}
