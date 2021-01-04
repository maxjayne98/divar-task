import React from "react";
import "./ProgressBar.scss";
function ProgressBar({ percentage, status }) {
  function selectColor() {
    console.log(status);
    switch (status) {
      case "SUCCESS_PRIMARY":
        return "success";
      case "WARNING_SECONDARY":
        return "warning";
      default:
        return null;
    }
  }
  return (
    <div className="progress-bar">
      <div
        className={`progress-bar__background progress-bar__background--${selectColor(
          status
        )}`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="progress-bar__levels">
        <div className="progress-bar__level"></div>
        <div className="progress-bar__level"></div>
        <div className="progress-bar__level"></div>
        <div className="progress-bar__level"></div>
      </div>
    </div>
  );
}
export default ProgressBar;
