import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CourseMaterial } from '../course-material';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-report',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
@Input() CourseMaterial!:CourseMaterial;
}
