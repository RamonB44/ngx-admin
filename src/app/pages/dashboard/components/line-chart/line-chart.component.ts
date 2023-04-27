// line-chart.component.ts
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPluginsOptions } from 'chart.js';

@Component({
  selector: 'ngx-app-line-chart',
  styleUrls: ['./line-chart.component.css'],
  template: `
    <div echarts
        [options]="option"
        [merge]="option"
        class="echart"
        (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class LineChartComponent implements AfterViewInit, OnDestroy {
  private alive = true;

  // @Input() data: ElectricityChart[];

  option: any;
  echartsIntance: any;
  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
