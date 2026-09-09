import React, { useState } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Chip from "@mui/material/Chip";
import { useLanguage } from "../context/LanguageContext";
import {
  timelineTranslations,
  timelineDataI18n,
} from "../translations/content";
import "../assets/styles/Timeline.scss";

type TimelineFilter = "all" | "tech" | "other";

function Timeline() {
  const { lang } = useLanguage();
  const t = timelineTranslations[lang];

  const [filter, setFilter] = useState<TimelineFilter>("all");

  const filteredTimeline = timelineDataI18n.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <div id="history">
      <div className="items-container">
        <div className="timeline-header-wrapper">
          <span className="section-subtitle">{t.subtitle}</span>
          <h1>{t.heading}</h1>
          <p className="section-description">{t.description}</p>

          {/* Timeline Filter Controls */}
          <div className="timeline-filter-buttons">
            <button
              className={`t-filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              {t.tabAll} ({timelineDataI18n.length})
            </button>
            <button
              className={`t-filter-btn ${filter === "tech" ? "active" : ""}`}
              onClick={() => setFilter("tech")}
            >
              {t.tabTech} ({timelineDataI18n.filter((i) => i.type === "tech").length})
            </button>
            <button
              className={`t-filter-btn ${filter === "other" ? "active" : ""}`}
              onClick={() => setFilter("other")}
            >
              {t.tabOther} ({timelineDataI18n.filter((i) => i.type === "other").length})
            </button>
          </div>
        </div>

        <VerticalTimeline>
          {filteredTimeline.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className={`vertical-timeline-element--work ${item.type === "other" ? "other-role" : ""}`}
              contentStyle={{
                background: item.type === "tech" ? "#161b22" : "#0f231c",
                color: "#ffffff",
                border: item.type === "tech" ? "1px solid rgba(157, 78, 221, 0.3)" : "1px solid rgba(16, 185, 129, 0.3)",
              }}
              contentArrowStyle={{
                borderRight: item.type === "tech" ? "7px solid #161b22" : "7px solid #0f231c",
              }}
              date={item.date[lang]}
              iconStyle={{ background: item.iconBg, color: "#ffffff" }}
              icon={<FontAwesomeIcon icon={item.icon as any} />}
            >
              <div className="timeline-badge-row">
                <span className={`role-type-badge ${item.type}`}>
                  {item.type === "tech" ? t.badgeTech : t.badgeOther}
                </span>
                <span className="location-text">{item.location[lang]}</span>
              </div>

              <h3 className="vertical-timeline-element-title">{item.title[lang]}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle[lang]}</h4>
              <p className="timeline-desc">{item.description[lang]}</p>

              <ul className="timeline-bullets">
                {item.bullets[lang].map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="timeline-skills">
                {item.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    label={skill}
                    size="small"
                    className={`t-skill-chip ${item.type}`}
                  />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
