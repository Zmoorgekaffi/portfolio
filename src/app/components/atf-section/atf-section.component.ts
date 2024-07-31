import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atf-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atf-section.component.html',
  styleUrl: './atf-section.component.scss'
})
export class AtfSectionComponent {
  windowWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 820) {
      this.windowWidth = window.innerWidth;
    }   
  }
}
