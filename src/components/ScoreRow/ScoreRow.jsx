import React from "react";
import "./ScoreRow.scss";
import ProgressBar from "../ProgressBar";
function ScoreRow({ data }) {
  const {
    title,
    image_url: imageUrl,
    score_color: scoreColor,
    percentage_score: percentage,
  } = data.data;
  return (
    <div className="score-row">
      <div className="score-row__container">
        <span>&</span>
        <ProgressBar percentage={percentage} status={scoreColor} />
      </div>
      <div className="score-row__container">
        <span className="score-row__title">{title}</span>
        <img src={imageUrl} alt="score" className="score-row__icon" />
      </div>
    </div>
  );
}
export default ScoreRow;
