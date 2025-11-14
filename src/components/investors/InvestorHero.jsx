import React from "react";

const InvestorHero = () => {
  return (
    <div id="investor_hero">
      <div id="investor_hero_container">
        <div id="investor_hero_title">
          <h4>Investors</h4>
          <p>
            Disclosure under Regulation 46 of the SEBI (LODR) Regulations, 2015
          </p>
          <div id="investor_filter_wrap">
            <div id="investor_filters">
              <div className="investor_filter_drop">
                <span>Financial Details</span>
              </div>
              <div className="investor_filter_drop">
                <span>Corporate Details</span>
              </div>
              <div className="investor_filter_drop">
                <span>Investor Information</span>
              </div>
              <div className="investor_filter_drop">
                <span>Archives</span>
              </div>
              <div className="investor_filter_drop">
                <span>Corporate Announcements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHero;
