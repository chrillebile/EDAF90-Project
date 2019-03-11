import { Component, OnInit, Input } from '@angular/core';
//import * as CanvasJS from '../../assets/canvasjs.min.js';
import { CryptonatorCrypto } from '../cryptonator-crypto';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  //@Input() crypto : CryptonatorCrypto;
  constructor() { }

  ngOnInit() {
    //let dataPoints = [];
    //let dpsLength = 0;
    /*let chart = new CanvasJS.Chart('chartContainer', {
      exportEnabled: true,
      title: {
        text: 'test'
      },
      data: [{
        type: 'spline',
        dataPoints
      }]
    });

    dataPoints.push({ x: 1, y: 2 });
    dpsLength = dataPoints.length
    chart.render()
    updateChart()
    function updateChart() {

    }*/
  }
}
