import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions  } from "chart.js";

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  constructor() { }

  public chart2?: Chart;

  ngOnInit() {
    this.chart2 = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["Contienent1", "Contienent1"],
        datasets: [
          {
            label: "# of Votes",
            data: [21,19],
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
