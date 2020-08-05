import "./styles/index.scss";
import { csv } from "d3";

import renderBarChart from "./scripts/barchart";
import renderBarChart_2 from "./scripts/barchart-2";
import renderLinear from "./scripts/linear_chart";

csv("data.csv").then((data) => {
  data.forEach((d) => {
    // debugger;
    d.GHIm = +d.GHIm; //parseInt
    d.WS = +d.WS; //parseInt
    d.RH = +d.RH; //parseInt
    d.TEMP = +d.TEMP; //parseInt
    d.Month = +d.Month;
    d.Year = +d.Year;
  });
  renderBarChart(data);
  renderBarChart_2(data);
});

csv("hourly_data.csv").then((data) => {
  data.forEach((d) => {
    d.TEMPT = +d.TEMP;
    d.Time = new Date(
      d.Date.split(".")[1] +
        " " +
        d.Date.split(".")[0] +
        " " +
        d.Date.split(".")[2] +
        " " +
        d.Time
    );
  });
  renderLinear(data);
});
