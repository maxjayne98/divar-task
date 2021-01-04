import React, { useEffect } from "react";
import Widget from "../Widget";
import { fetchWidgets } from "../../redux/shared/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectWidgets } from "../../redux/shared/selector";
import "./Widgets.scss";

function Widgets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWidgets());
  }, []);
  const widgetList = useSelector(selectWidgets);
  const widgets = widgetList.map((item, index) => (
    <Widget key={index} data={item} />
  ));
  return <div>{widgets}</div>;
}
export default Widgets;
