import React, { useState, useEffect } from "react";
import summaryData from "./../summary.json";

function Summary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    setSummary(summaryData);
  }, []);

  return (
    <div>
      <div className="container-fluid-header">
        <a href="https://www.suse.com" id="home-logo">
          <img
            className="logo nonfed"
            alt="Suse Logo"
            src="https://www.suse.com/assets/img/suse-white-logo-green.svg"
          />
        </a>
      </div>
      <div id="container-fluid-id" className="container-fluid-section">
        <h1 className="container-fluid-title">About RMT</h1>
        <section>{summaryData.summary}</section>
        <h1 className="container-fluid-title">
          How do I set up clients to use RMT?
        </h1>
        <ul>
          {summaryData.clientUseSummary.map((item) => (
            <li className="list-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Summary;
