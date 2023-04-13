import { NgModule } from '@angular/core';
import { NbTabsetModule, NbCardModule, NbLayoutModule, NbListModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { WeatherWidgetMainComponent } from '../components/weather-widget-main/weather-widget-main.component';
import { LineChartComponent } from '../components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbLayoutModule,
    ChartsModule,
    NbTabsetModule,
    NbListModule,
  ],
  declarations: [
    DashboardComponent,
    WeatherWidgetMainComponent,
    LineChartComponent,
  ],
})
export class DashboardModule { }
