import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions  } from "chart.js";

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements OnInit {

  constructor() { }

  public chart3?: Chart;

  ngOnInit() {
    this.chart3 = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["countinent1", "countinent2","countinent3","countinent4","countinent5","countinent6","countinent7"],
        datasets: [
          {
            label: "# of Votes",
            data: [24,20,17,12,8,9,5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 0, 0, 0.2)",
              "rgba(0, 255, 0, 0.2)",
              "rgba(0, 0, 255, 0.2)",
              "rgba(255, 255, 0, 0.2)",
              "rgba(255, 0, 255, 0.2)"


            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 0, 0, 0.2)",
              "rgba(0, 255, 0, 0.2)",
              "rgba(0, 0, 255, 0.2)",
              "rgba(255, 255, 0, 0.2)",
              "rgba(255, 0, 255, 0.2)"


            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true
        //       }
        //     }
        //   ]
        // }
      }
    });
  }

}
