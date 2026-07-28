import MiniAnalytics from "./MiniAnalytics";
import WhatToFocusOn from "./WhatToFocusOn";

export default function Header() {
  return (
    <div className="header">
      <div className="dashboardHeader">
        <div className="daySummary">
          <p className="currentDate"></p>
          <h1 className="greeting"></h1>
        </div>
      </div>

      <div className="aiDiv"></div>

      <div className="bottomRowOfHeader">
          <MiniAnalytics/>
          <WhatToFocusOn/>
      </div>
    </div>
  );
}
