import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-year-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './year-modal.component.html',
  styleUrl: './year-modal.component.scss'
})
export class YearModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() yearSelected = new EventEmitter<number>();
  @Input() yearNumber!: number;

  selectedYear: number = new Date().getFullYear();

  ngOnInit(): void {
    this.selectedYear = this.yearNumber;
  }

  confirmYear() {
    this.yearSelected.emit(this.selectedYear);
    this.close.emit();
  }

  cancel() {
    this.close.emit();
  }
}
