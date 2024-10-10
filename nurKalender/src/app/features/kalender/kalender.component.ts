import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { YearModalComponent } from '../../shared/Modals/year-modal/year-modal.component';
import { MonthModalComponent } from "../../shared/Modals/month-modal/month-modal.component";
import { NONE_TYPE } from '@angular/compiler';
import { TooltipComponent } from '../../shared/Tooltips/tooltip/tooltip.component';

@Component({
  selector: 'app-kalender',
  standalone: true,
  imports: [NgFor, NgIf, YearModalComponent, MonthModalComponent, TooltipComponent],
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

  currentMonthName: string = "";
  currentYearName: string = "";
  currentMonthNumber: number = -1;
  currentYearNumber: number = -1;

  isYearModalOpen: boolean = false;
  isMonthModalOpen: boolean = false;

  show = false;

  ngOnInit(): void {
    this.loadCalendar(this.currentDate);
  }

  loadCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    this.currentMonthName = this.getMonthName(month);
    this.currentYearName = String(year);
    this.currentMonthNumber = month;
    this.currentYearNumber = year;

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

  getMonthName(month: number): string {
    const monthNames: string[] = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  }

  changeMonth(direction: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + direction);
    this.loadCalendar(this.currentDate);
  }

  openYearModal() {
    this.isYearModalOpen = true;
  }


  closeYearModal() {
    this.isYearModalOpen = false;
  }

  onYearSelected(year: number) {
    this.currentDate.setFullYear(year);
    this.loadCalendar(this.currentDate);
    this.closeYearModal();
  }

  openMonthModal() {
    this.isMonthModalOpen = true;
  }

  closeMonthModal() {
    this.isMonthModalOpen = false;
  }

  onMonthSelected(month: number) {
    this.currentDate.setMonth(month);
    this.loadCalendar(this.currentDate);
    this.closeMonthModal();
  }

  isToday(day: number | null): boolean {
    if (day === null) {
      return false;
    }

    const today = new Date();
    return (
      day === today.getDate() &&
      this.currentMonthNumber === today.getMonth() &&
      this.currentYearNumber === today.getFullYear()
    );
  }
  
  dayId: any = null; // dayId değeri

  showTooltip(currentDay:any) {
    if (currentDay) {
      this.dayId = currentDay;
      this.show = true;
    }
  }

  hideTooltip(currentDay:any) {
    if (currentDay) {
      this.show = false;
    }
  }
}

