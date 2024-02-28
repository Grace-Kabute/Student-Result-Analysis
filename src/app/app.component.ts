import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ReportComponent } from './report/report.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceComponent } from './performance/performance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent, ReportComponent, CoursesComponent, DashboardComponent, PerformanceComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
