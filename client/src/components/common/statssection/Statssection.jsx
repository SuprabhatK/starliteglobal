import React from "react";
import "./Statssection.scss";

const StatsSection = () => {
  const stats = [
    { number: "5+", label: "Years in Service" },
    { number: "10+", label: "Covered Countries" },
    { number: "590+", label: "Shipments" },
    { number: "950+", label: "Clients" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-box" key={index} >
            <h1>{stat.number}</h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
