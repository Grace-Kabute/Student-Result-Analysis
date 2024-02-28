import { Component, Input } from '@angular/core';
import { CourseMaterial } from '../course-material';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
@Input() CourseMaterial!:CourseMaterial;


}
