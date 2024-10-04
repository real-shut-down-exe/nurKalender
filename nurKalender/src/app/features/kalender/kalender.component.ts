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

  currentDate: Date = new Date();
  daysInMonth: number[] = [];
  firstDayOfMonth: number = 0;
  lastDayOfMonth: number = 0;
  totalDays: (number | null)[] = [];


  ngOnInit(): void {
    this.loadCalendar(this.currentDate);
  }

  loadCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Ayın gün sayısını al
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Ayın ilk günü (0: Pazar, 1: Pazartesi, ..., 6: Cumartesi)
    this.firstDayOfMonth = new Date(year, month, 1).getDay();
    this.lastDayOfMonth = new Date(year, month + 1, 0).getDay();

    // Boş günleri ekle
    const emptySlotsBefore = Array.from({ length: this.firstDayOfMonth }, () => null);
    const emptySlotsAfter = Array.from({ length: 6 - this.lastDayOfMonth }, () => null);

    // Tüm günleri birleştir
    this.totalDays = [...emptySlotsBefore, ...this.daysInMonth, ...emptySlotsAfter];
  }

  changeMonth(direction: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + direction);
    this.loadCalendar(this.currentDate);
  }
}
