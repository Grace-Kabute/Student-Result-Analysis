import { Component } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { CourseMaterial } from '../course-material';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from '../performance/performance.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoursesComponent, CommonModule, PerformanceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
Materials:CourseMaterial[] =[
  {
    "course": 'Algebra',
    "id": 1,
    "material": 'get course material',
    "completed": true,
    "duration": 'sep 02, 2023 to Jan 21, 2024',
    "photo": '../../assets/math.jpg'
  },
  {
    "course": 'lab',
    "id": 2,
    "material": 'get course material',
    "completed": true,
    "duration": 'sep 02, 2023 to Jan 21, 2024',
    "photo": '../../assets/lab.jpg'

  },
  {
    "course": 'languages',
    "id": 3,
    "material": 'get course material',
    "completed": true,
    "duration": 'sep 02, 2023 to Jan 21, 2024',
    "photo": '../../assets/A.jpg'

  },
  {
    "course": 'gym',
    "id": 4,
    "material": 'get course material',
    "completed": true,
    "duration": 'sep 02, 2023 to Jan 21, 2024',
    "photo": '../../assets/gym.jpg'

  },
  {
    "course": 'python',
    "id": 5,
    "material": 'get course material',
    "completed": true,
    "duration": 'sep 02, 2023 to Jan 21, 2024',
    "photo": '../../assets/cs.jpg'

  },
  {
    "course": 'communication',
    "id": 6,
    "material": 'get course material',
    "completed": true,
    "duration": 'sep 02, 2023 to Jan 21, 2024',
    "photo": '../../assets/communication.jpg'

  }
]
}
