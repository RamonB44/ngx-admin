// line-chart.component.ts
import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPluginsOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [34, 31, 28, 29, 32, 31, 30, 24], label: 'Sensor A' },
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  // Define chart options
  lineChartOptions = {
    legend: {
      display : false,
    },
    responsive: true,
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          suggestedMin: 15,
          suggestedMax: 45,
          stepSize: 1,
          type: 'logarithmic',
        }
      }],
      xAxes: [{
        display: false,
      }]
    },
    annotation: {
      annotations: [{
        drawTime: 'afterDraw', // overrides annotation.drawTime if set
        id: 'l-min', // optional
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: '20',
        borderColor: 'red',
        borderWidth: 1,
        label: {
          backgroundColor: "transparent",
          fontColor: "red",
          enabled: true,
          content: "Minimun 20.00 C°",
          yAdjust: -10,
          position: 'left',
        },
        // Fires when the user clicks this annotation on the chart
        // (be sure to enable the event in the events array below).
        onClick: function (e) {
          // `this` is bound to the annotation element
        }
      },
      {
        drawTime: 'afterDraw', // overrides annotation.drawTime if set
        id: 'l-average', // optional
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: '30',
        borderColor: 'orange',
        borderWidth: 1,
        label: {
          backgroundColor: "transparent",
          fontColor: "black",
          content: "Average 30.00 C°",
          enabled: true,
          yAdjust: -10,
          position: 'left',
        },
        // Fires when the user clicks this annotation on the chart
        // (be sure to enable the event in the events array below).
        onClick: function (e) {
          // `this` is bound to the annotation element
        }
      },
      {
        drawTime: 'afterDraw', // overrides annotation.drawTime if set
        id: 'l-max', // optional
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: '40',
        borderColor: 'red',
        borderWidth: 1,
        label: {
          backgroundColor: "transparent",
          fontColor: "red",
          content: "Maximun 40.00 C°",
          enabled: true,
          yAdjust: -10,
          position: 'left',
        },
        // Fires when the user clicks this annotation on the chart
        // (be sure to enable the event in the events array below).
        onClick: function (e) {
          // `this` is bound to the annotation element
        }
      }]
    }
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [
    {
      // dark grey
      backgroundColor: 'transparent',
      borderColor: 'rgba(8, 8, 54)',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [ChartAnnotation]

  // events
  chartClicked(event): void {
    console.log(event);
  }

  chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }
}
