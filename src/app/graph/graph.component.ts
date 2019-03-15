import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min.js'
import { CryptonatorAPIService } from '../cryptonator-api.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private id: string;
  private dataPoints: Array<any>;
  private chart: CanvasJS;

  constructor(
    private _crypto: CryptonatorAPIService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.dataPoints = [];

    // Createing the chart
    this.chart = new CanvasJS.Chart('chartContainer', {
      theme: "light2",
      exportEnabled: true,
      title: {
        text: this.id.toUpperCase() + ' - USD'
      },
      axisX: {
        valueFormatString: "HH:mm:ss",
      },
      axisY: {
        includeZero: false,
        scaleBreaks: {
          autoCalculate: true
        },
        crosshair: {
          enabled: true,
          valueFormatString: "#.##"
        }
      },
      toolTip: {
        content: "Time: {x}</br>USD: {y}"
      },
      data: [{
        type: "spline",
        dataPoints: this.dataPoints,
        xValueType: "dateTime",
        color: "#F08080",
      }]
    });

    // Interval const for how often the chart should be updated
    const intervalCount = interval(60000);

    // Running one time when loading the first time before starting a timer for the update.
    this.updateChart();
    intervalCount.subscribe(n => {
      this.updateChart();
    })
  }

  // Update the chart
  updateChart() {
    this._crypto.findOneFull(this.id).subscribe(crypto => {
      this.dataPoints.push({ x: (crypto.timestamp * 1000), y: parseInt(crypto.price.toString()) });
      if (this.dataPoints.length > 20) {
        this.dataPoints.shift();
      }
      this.chart.render();
    });
  }
}
