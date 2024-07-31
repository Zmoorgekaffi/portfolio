import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
 
  windowWidth;
  constructor() {
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth);
    
  }
}
