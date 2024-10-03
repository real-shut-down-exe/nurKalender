import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kalender',
  standalone: true,
  imports: [NgFor],
  templateUrl: './kalender.component.html',
  styleUrl: './kalender.component.scss'
})
export class KalenderComponent {

  daysOfWeek: { id: number; name: string }[] = [
    { id: 1, name: "SUN" },
    { id: 2, name: "MON" },
    { id: 3, name: "TUE" },
    { id: 4, name: "WED" },
    { id: 5, name: "THU" },
    { id: 6, name: "FRI" },
    { id: 7, name: "SAT" }
  ];

  constructor() { }

}
