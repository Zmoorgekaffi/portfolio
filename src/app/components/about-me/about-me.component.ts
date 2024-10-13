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
 
  lorem:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis nulla nisi mollitia molestiae,dolor unde, rerum reprehenderit fugiat, cum beatae eos magni libero expedita nesciunt earum eaque omnis  soluta?';        
               
  windowWidth;
  constructor() {
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;    
  }
}
