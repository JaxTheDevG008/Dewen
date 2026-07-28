export default function MiniAnalytics() {
  return (
    <div className="miniAnalyticsDiv">
      <div className="expandMiniAnalytics">
        <button className="expandMiniAnalyticsBtn">
          <img
            src="/Images/CollapseExpand Icon.png"
            className="expandMiniAnalyticsIcon"
          />
        </button>

        <div className="expandMiniAnalyticsTooltip">
          <span className="expandMiniAnalyticsTooltipText">
            Expand Mini Analytics
          </span>
        </div>
      </div>
      <div className="miniAnalytics">
        <div className="miniAnalytic numberOfTasksDoneDiv">
          <p className="tasksDoneHeader">TASKS DONE</p>
          <p className="numberOfTasksTotal">of 0 total</p>
          <img
            src="/Images/Checkmark.png"
            className="checkmarkImage"
            alt="Checkmark"
          />
        </div>

        <div className="miniAnalytic riskReportDiv">
          <p className="riskReportHeader">RISK REPORT</p>
          <div className="riskReportItems">
            <p className="numberOfTasksOverdue"></p>
            <p className="numberOfTasksDueToday"></p>
          </div>
          <p className="riskReportFooter"></p>
          <img
            src="/Images/Risk_Report_Icon.png"
            className="riskReportIcon"
            alt="Risk Report"
          />
        </div>

        <div className="miniAnalytic momentumDiv">
          <p className="momentumHeader">MOMENTUM</p>
          <div className="momentumItems">
            <p className="numberOfTasksDone">0</p>
          </div>
          <img
            src="/Images/Decrastinator-Icon.png"
            className="lightningImage"
            alt="Lightning Icon"
          />
        </div>

        <div className="miniAnalytic freeTimeDiv">
          <p className="freeTimeHeader">FREE TIME</p>
          <p className="numberOfFreeTime">0</p>
          <p className="freeTimeFooter">available</p>
          <img
            src="/Images/Date-Icon.png"
            className="dateImage"
            alt="Date Icon"
          />
        </div>
      </div>
    </div>
  );
}
