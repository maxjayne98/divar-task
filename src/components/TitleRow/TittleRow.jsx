import React from "react";
import "./TitleRow.scss";

function TitleRow({ data }) {
  const { text } = data.data;
  return (
    <div className="title-row">
      <span className="title-row__text">{text}</span>
    </div>
  );
}
export default TitleRow;
