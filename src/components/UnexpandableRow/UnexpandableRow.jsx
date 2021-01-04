import React from "react";
import "./UnexpandableRow.scss";
function UnexpandableRow({ data }) {
  const { title, value } = data.data;
  return (
    <div className="unexpandable-row">
      <span className="unexpandable-row__vlue">{value}</span>
      <span className="unexpandable-row__title">{title}</span>
    </div>
  );
}
export default UnexpandableRow;
