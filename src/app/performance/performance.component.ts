import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';


@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css'
})
export class PerformanceComponent implements OnInit{

  multi!: any[];
  view: [number, number] = [700, 500];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateView();
  }

  updateView() {
    if (window.innerWidth <= 800) {
      this.view = [400, 300];
    } else {
      this.view = [700, 500];
    }
  }

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Average';
  legendTitle: string = 'Skills';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { multi })
  }

 onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
ngOnInit():void{

}
}