import { Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { PerformanceComponent } from './performance/performance.component';


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
      },
    {
        path: 'report',
        component: ReportComponent,
      },
    {
        path: 'performance',
        component: PerformanceComponent,
      }
];

const routerOptions : ExtraOptions ={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
}
export default routeConfig