import React from "react";
import TitleRow from "../TitleRow";
import UnexpandableRow from "../UnexpandableRow";
import SectionDividerRow from "../SectionDividerRow";
import ScoreRow from "../ScoreRow";
import "./Widget.scss";

function Widget({ data }) {
  function switchRender(params) {
    switch (data["widget_type"]) {
      case "TITLE_ROW":
        return <TitleRow data={data} />;
      case "UNEXPANDABLE_ROW":
        return <UnexpandableRow data={data} />;
      case "SECTION_DIVIDER_ROW":
        return <SectionDividerRow />;
      case "SCORE_ROW":
        return <ScoreRow data={data} />;
      default:
        return <div>noitem</div>;
    }
  }
  return <>{switchRender()}</>;
}
export default Widget;
