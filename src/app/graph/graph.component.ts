import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min.js'
import { CryptonatorAPIService } from '../cryptonator-api.service';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private id: string;
  private dataPoints: any;
  private chart: any;

  constructor(
    private _crypto: CryptonatorAPIService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.dataPoints = [];

    this.chart = new CanvasJS.Chart('chartContainer', {
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
      },
      data: [{
        type: "spline",
        dataPoints: this.dataPoints,
        xValueType: "dateTime",
        color: "#F08080",
      }]
    });

    function updateChart(graphComp) {
      graphComp._crypto.findOneFull(graphComp.id).subscribe(crypto => {
        graphComp.dataPoints.push({ x: (crypto.timestamp * 1000), y: parseInt(crypto.price) });
        if (graphComp.dataPoints.length > 20) {
          graphComp.dataPoints.shift();
        }
        graphComp.chart.render();
      });
    }

    function createInterval(graphComp, interval) {
      setInterval(
        function () {
          updateChart(graphComp);
        },
        interval
      );
    }
    updateChart(this);
    createInterval(this, 60000);
  }

}
