import { NgIf } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() text: string = '';
  x: number = 0;
  y: number = 0;
  visible: boolean = false; // Tooltip görünürlüğü için bir durum ekliyoruz

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX - 60; // Mouse'un hemen sağında
    this.y = event.clientY - 30; // Mouse'un hemen altında
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.visible = true; // Mouse içeri girdiğinde görünür yap
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.visible = false; // Mouse dışarı çıktığında gizle
  }
}
