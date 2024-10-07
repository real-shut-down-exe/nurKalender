import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-month-modal',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './month-modal.component.html',
  styleUrl: './month-modal.component.scss'
})
export class MonthModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() monthSelected = new EventEmitter<number>();
  @Input() monthNumber!: number;

  selectedMonth: number = new Date().getMonth(); // Default to the current month

  months: { id: number; name: string }[] = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' }
  ];

  ngOnInit(): void {
    this.selectedMonth = this.monthNumber;
  }

  confirmMonth() {
    this.monthSelected.emit(this.selectedMonth);
    this.close.emit();
  }

  cancel() {
    this.close.emit();
  }
}
