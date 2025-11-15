import { reportData } from "@/helpers/investorsData";
import React, { useState } from "react";

const ReportSection = () => {
  const categoryKeys = Object.keys(reportData);

  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);
  const [activeSub, setActiveSub] = useState(
    reportData[categoryKeys[0]].subCategories[0].key
  );

  const currentCategory = reportData[activeCategory];
  const currentSub = currentCategory.subCategories.find(
    (sub) => sub.key === activeSub
  );

  return (
    <div id="report_section">
      {/* ================= MAIN CATEGORY FILTER ================= */}
      <div id="investor_filter_wrap">
        <div id="investor_filters">
          {categoryKeys.map((key) => (
            <div
              key={key}
              className={`investor_filter ${
                activeCategory === key ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(key);
                setActiveSub(reportData[key].subCategories[0].key);
              }}
            >
              <span>{reportData[key].title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SUB CATEGORY FILTER ================= */}
      <div id="report_header">
        <h5>{currentSub.title}</h5>

        <div id="report_filter">
          {currentCategory.subCategories.map((sub) => (
            <span
              key={sub.key}
              className={activeSub === sub.key ? "active" : ""}
              onClick={() => setActiveSub(sub.key)}
            >
              {sub.title}
            </span>
          ))}
        </div>
      </div>

      {/* ================= UNIVERSAL REPORT RENDERER ================= */}
      <div id="report_table">
        {currentSub.data && currentSub.data.length > 0 ? (
          currentSub.data.map((block, idx) => (
            <div key={idx}>
              {/* TITLE RENDERING */}
              {block.title && (
                <div className="report_row_title">{block.title}</div>
              )}

              {/* 1) CASE: SINGLE HTML LABEL (Investor Assistance) */}
              {block.label && (
                <div className="report_row fullwidth">
                  <div
                    className="html_label"
                    dangerouslySetInnerHTML={{ __html: block.label }}
                  />
                </div>
              )}

              {/* 2) CASE: LIST STRUCTURE (Reports List) */}
              {block.reports &&
                block.reports.map((report, i) => (
                  <div
                    key={i}
                    className={`report_row ${i % 2 !== 0 ? "transparent" : ""}`}
                  >
                    <a href={report.link || "#"} target="_blank" rel="noopener noreferrer">
                      <span>{report.label}</span>
                    </a>
                  </div>
                ))}

              {/* 3) CASE: SIMPLE VALUE LIST (Annual Reports → {year, link}) */}
              {block.year && (
                <div
                  className={`report_row ${idx % 2 !== 0 ? "transparent" : ""}`}
                >
                  <a href={block.link || "#"} target="_blank" rel="noopener noreferrer">
                    <span>{block.year}</span>
                  </a>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="report_row">
            <span>No data available.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportSection;
