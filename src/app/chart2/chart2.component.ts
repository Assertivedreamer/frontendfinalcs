import {Component, OnInit} from '@angular/core';
import {Chart, ChartOptions} from "chart.js";
import {ApiService} from "../Service/api.service";

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  barData: any;
  barDatavalues = [];
  barDatacountries: any;

  constructor(private api: ApiService) {
  }

  public chart?: Chart;

  ngOnInit() {

    this.getbar2();

  }


  getbar2() {

    this.api.getbar2().subscribe((res) => {
      this.barData = res;
      this.barDatavalues = this.barData.values;
      this.barDatacountries = this.barData.countries;

      console.log(this.barDatacountries);
      console.log(this.barDatavalues);
      this.getstat();
    });

  }

  getstat() {
    this.chart = new Chart("canvas", {
      type: "pie",
      data: {
        labels: this.barDatacountries,
        datasets: [
          {
            label: "continents",
            data: this.barDatavalues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],

            borderWidth: 1
          }
        ]
      },

    });

  }


}
