import React from "react";
import Widget from "../Widget";
import "./Widgets.scss";
const widgetList = [
  {
    widget_type: "TITLE_ROW",
    data: {
      text: "کیا اسپورتیج 2400cc",
      text_color: "TEXT_PRIMARY",
    },
  },
  {
    widget_type: "UNEXPANDABLE_ROW",
    data: {
      title: "تاریخ انجام کارشناسی",
      value: "۹۹/۰۵/۱۲",
    },
  },
  {
    widget_type: "SECTION_DIVIDER_ROW",
  },
  {
    widget_type: "SCORE_ROW",
    data: {
      action: {
        type: "SHOW_INSPECTION_ITEM",
        payload: {
          slug: "YmFkYW5l",
        },
      },
      title: "بدنه",
      percentage_score: 88,
      score_color: "SUCCESS_PRIMARY",
      image_url: "https://s100.divarcdn.com/static/icons/4/ic_vehicles.png",
      image_color: "ICON_SECONDARY",
      has_divider: true,
      icon: {
        image_url_dark:
          "https://s100.divarcdn.com/static/imgs/widget-icons/dark/icon_secondary/car_body.png",
        image_url_light:
          "https://s100.divarcdn.com/static/imgs/widget-icons/light/icon_secondary/car_body.png",
        icon_name: "CAR_BODY",
        icon_color: "ICON_SECONDARY",
      },
    },
  },
  {
    widget_type: "SCORE_ROW",
    data: {
      action: {
        type: "LOAD_PAGE",
        payload: {
          slug: "Esdqwe232=",
        },
      },
      title: "لاستیک و رینگ‌ها",
      percentage_score: 60,
      score_color: "WARNING_SECONDARY",
      image_url: "https://s100.divarcdn.com/static/icons/4/ic_car_tires.png",
      image_color: "ICON_SECONDARY",
      has_divider: true,
      icon: {
        image_url_dark:
          "https://s100.divarcdn.com/static/imgs/widget-icons/dark/icon_secondary/car_tires.png",
        image_url_light:
          "https://s100.divarcdn.com/static/imgs/widget-icons/light/icon_secondary/car_tires.png",
        icon_name: "CAR_TIRES",
        icon_color: "ICON_SECONDARY",
      },
    },
  },
];
function Widgets() {
  console.log("widgetss");
  const widgets = widgetList.map((item, index) => (
    <Widget key={index} data={item} />
  ));
  return <div>{widgets}</div>;
}
export default Widgets;
