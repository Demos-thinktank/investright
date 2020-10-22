// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const options = {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: 0,
//     plotShadow: false,
//     // styledMode: true,
//   },
//   title: {
//     text: "Browser<br>shares<br>2017",
//     align: "center",
//     verticalAlign: "middle",
//     y: 60,
//   },
//   tooltip: {
//     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
//   },
//   accessibility: {
//     point: {
//       valueSuffix: "%",
//     },
//   },
//   plotOptions: {
//     pie: {
//       dataLabels: {
//         enabled: true,
//         distance: -50,
//         style: {
//           fontWeight: "bold",
//           color: "white",
//         },
//       },
//       startAngle: -90,
//       endAngle: 90,
//       center: ["50%", "75%"],
//       size: "100%",
//     },
//   },
//   series: [
//     {
//       type: "pie",
//       name: "Browser share",
//       innerSize: "50%",
//       data: [
//         ["Chrome", 58.9],
//         ["Firefox", 13.29],
//         ["Internet Explorer", 13],
//         ["Edge", 3.78],
//         ["Safari", 3.42],
//         {
//           name: "Other",
//           y: 7.61,
//           dataLabels: {
//             enabled: false,
//           },
//         },
//       ],
//     },
//   ],
// };

// const ActionsResultChart = () => {
//   return (
//     // <div>
//     <HighchartsReact highcharts={Highcharts} options={options} />
//     // </div>
//   );
// };

// export default ActionsResultChart;

import React from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const data = {
  labels: ["Critical Funds", "Mediocre Funds", "Good Funds"],
  datasets: [
    {
      data: [2, 4, 1],
      backgroundColor: ["red", "orange", "green"],
      //   hoverBackgroundColor: ["", "", ""],
      borderColor: "#000",
      borderWidth: 4,
      //   animation: {
      //     animateScale: true,
      //   },
    },
  ],
};

const options = {
  circumference: Math.PI,
  rotation: Math.PI,
  legend: {
    display: false,
  },
  tooltips: {
    //   callbacks: {
    //     label: function (tooltipItem) {
    //       return tooltipItem.yLabel;
    //     },
    //   },
    // titleFontSize: 36,
    bodyFontSize: 16,
  },
  plugins: {
    datalabels: {
      display: true,
      color: "white",
      align: "end",
      //   backgroundColor: "#ccc",
      //   borderRadius: 3,
      font: {
        size: 30,
      },
    },
  },
};

export default function test() {
  //   displayName: "DoughnutExample",

  //   render() {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
  //   },
}
