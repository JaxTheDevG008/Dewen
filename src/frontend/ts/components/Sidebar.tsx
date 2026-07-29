export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarHeaderRow1">
          <div className="hamburgerBtn">
            <img src="/Images/Hamburger-Icon.png" className="hamburgerIcon" />
          </div>
        </div>
        <div className="sidebarHeaderRow2">
          <button className="themeBtn"></button>
          <div className="agentBtnDiv">
            <button className="agentBtn">
              <img src="/Images/Agent-Icon.png" className="agentIcon" />
            </button>

            <div className="aiOptionsDiv">
              <ul className="aiOptionsList">
                <li className="prioritySuggestionOption">
                  Priority Suggestion
                </li>
                <li className="scheduleSuggestionOption">Daily Schedule</li>
                <li className="riskReportOption">Risk Report</li>
              </ul>
            </div>
          </div>

          <button className="decrastinatorBtn">
            <img
              src="/Images/Decrastinator-Icon.png"
              className="decrastinatorIcon"
            />
          </button>

          <button className="customizeBtn">Customize</button>
        </div>
      </div>
      <div className="sidebarBtns">
        <button className="dashboardBtn">
          <img src="/Images/Dashboard-Icon.png" className="dashboardIcon" />
          Dashboard
        </button>
        <button className="whiteboardBtn">
          <img src="/Images/Whiteboard-Icon.png" className="whiteboardIcon" />
          Whiteboard
        </button>
        <button className="calendarBtn">
          <img src="/Images/Date-Icon.png" className="calendarIcon" />
          Calendar
        </button>
        <button className="settingsBtn">
          <img src="/Images/Settings-Icon.png" className="settingsIcon" />
          Settings
        </button>
      </div>
    </nav>
  );
}
