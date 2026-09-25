import { useEffect, useRef, useState } from "react";

import TitleHeader from "../components/TitleHeader";
import {
  whatsappNumber,
  pricingTabs,
  pricingWebsitePackages,
  pricingCustomPlatformBar,
  pricingQAIntro,
  pricingQAPackages,
  pricingAuditFixBar,
  pricingCarePlan,
  pricingAddOns,
  pricingFooterNote,
} from "../constants";

const TAB_IDS = pricingTabs.map((tab) => tab.id);

const HASH_TAB_MAP = {
  "pricing-websites": "websites",
  "pricing-qa": "qa",
  "pricing-support": "support",
};

const goToWhatsApp = (packageName) => {
  const text = `Hi James, I'm interested in the ${packageName} package. Here's a bit about my project:`;
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer"
  );
};

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 mt-1 text-white-50"
  >
    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
    <path
      d="M4.5 8.2L6.8 10.5L11.5 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PackageButton = ({ text, style, onClick }) =>
  style === "primary" ? (
    <button type="button" onClick={onClick} className="cta-wrapper w-full">
      <div className="cta-button group w-full">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  ) : (
    <button type="button" onClick={onClick} className="pricing-secondary-btn w-full">
      {text}
    </button>
  );

const PricingCard = ({ pkg, liveContent }) => (
  <div
    className={`pricing-card ${pkg.popular ? "popular order-first md:order-none" : ""}`}
  >
    {pkg.popular && <span className="pricing-badge">Most popular</span>}

    <div>
      <h3 className="text-white text-xl md:text-2xl font-semibold">{pkg.name}</h3>
      <p className="text-white-50 text-sm mt-2">{pkg.tagline}</p>
    </div>

    <div className="pricing-price">
      {pkg.hasFrom && <span className="from">from</span>}
      <span className="amount">KES {pkg.price}</span>
      {pkg.period && <span className="period">{pkg.period}</span>}
    </div>

    <div className="pricing-divider" />

    <ul className="pricing-included">
      {pkg.included.map((item) => (
        <li key={item}>
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-col gap-2">
      {pkg.delivery && (
        <p className="text-white-50 text-xs md:text-sm">
          <span className="text-white-50/70">Delivery: </span>
          {pkg.delivery}
        </p>
      )}
      {liveContent}
    </div>

    <PackageButton
      text={pkg.buttonText}
      style={pkg.buttonStyle}
      onClick={() => goToWhatsApp(pkg.name)}
    />
  </div>
);

const PricingBar = ({ bar }) => (
  <div className="pricing-bar">
    <div>
      <h3 className="text-white text-lg md:text-xl font-semibold">{bar.title}</h3>
      <p className="text-white-50 text-sm md:text-base mt-2 max-w-xl">{bar.text}</p>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
      <span className="text-white text-lg font-semibold">{bar.price}</span>
      <button
        type="button"
        onClick={() => goToWhatsApp(bar.title)}
        className="pricing-secondary-btn"
      >
        {bar.buttonText}
      </button>
    </div>
  </div>
);

const WebsiteLive = ({ sites }) => (
  <p className="text-white-50 text-xs md:text-sm">
    <span className="text-white-50/70">See it live: </span>
    {sites.map(({ name, href }, index) => {
      const external = href.startsWith("http");
      return (
        <span key={name}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="underline hover:text-white transition-colors duration-300"
          >
            {name}
          </a>
          {index < sites.length - 1 ? ", " : ""}
        </span>
      );
    })}
  </p>
);

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("websites");
  const tabRefs = useRef([]);

  const activeTabRef = useRef(activeTab);

  const selectTab = (tabId) => {
    if (activeTabRef.current === tabId) return;
    activeTabRef.current = tabId;
    setActiveTab(tabId);
  };

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      const tabId = HASH_TAB_MAP[hash];
      if (tabId) {
        selectTab(tabId);
        requestAnimationFrame(() => {
          document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
        });
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const delta = e.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + delta + TAB_IDS.length) % TAB_IDS.length;
      tabRefs.current[nextIndex]?.focus();
      selectTab(TAB_IDS[nextIndex]);
    }
  };

  return (
    <section id="pricing" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Services & Pricing" sub="💰 Transparent pricing" />
        <p className="text-white-50 text-center md:text-lg mt-5 max-w-2xl mx-auto">
          Clear starting prices. Every project gets a detailed quote after a short call.
        </p>

        <div
          role="tablist"
          aria-label="Pricing categories"
          className="pricing-tabs mt-10"
        >
          {pricingTabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              type="button"
              id={`pricing-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`pricing-panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`pricing-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => selectTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          key={activeTab}
          id={`pricing-panel-${activeTab}`}
          aria-labelledby={`pricing-tab-${activeTab}`}
          className="pricing-panel mt-10 min-h-[680px] md:min-h-[560px]"
        >
          {activeTab === "websites" && (
            <>
              <div className="grid-3-cols items-stretch">
                {pricingWebsitePackages.map((pkg) => (
                  <PricingCard
                    key={pkg.name}
                    pkg={pkg}
                    liveContent={
                      pkg.liveNames?.length ? <WebsiteLive sites={pkg.liveNames} /> : null
                    }
                  />
                ))}
              </div>
              <div className="mt-6">
                <PricingBar bar={pricingCustomPlatformBar} />
              </div>
            </>
          )}

          {activeTab === "qa" && (
            <>
              <p className="text-white-50 text-sm md:text-base text-center mb-8">
                {pricingQAIntro}
              </p>
              <div className="grid-3-cols items-stretch">
                {pricingQAPackages.map((pkg) => (
                  <PricingCard
                    key={pkg.name}
                    pkg={pkg}
                    liveContent={
                      pkg.liveText ? (
                        <p className="text-white-50 text-xs md:text-sm">
                          <span className="text-white-50/70">See it live: </span>
                          {pkg.liveText}
                        </p>
                      ) : null
                    }
                  />
                ))}
              </div>
              <div className="mt-6">
                <PricingBar bar={pricingAuditFixBar} />
              </div>
            </>
          )}

          {activeTab === "support" && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
              <PricingCard pkg={pricingCarePlan} liveContent={null} />

              <div className="pricing-card">
                <h3 className="text-white text-xl md:text-2xl font-semibold">Add-ons</h3>
                <ul className="flex flex-col mt-2">
                  {pricingAddOns.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-black-50 last:border-b-0 text-white-50 text-sm md:text-base"
                    >
                      <span>{item.name}</span>
                      <span className="text-white font-medium text-right">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <p className="pricing-footer-note">{pricingFooterNote}</p>
      </div>
    </section>
  );
};

export default Pricing;
