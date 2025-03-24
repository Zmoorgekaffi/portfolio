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
     
  intro:string = 'I am a passionate frontend developer with a completed career change training in this field. Currently, I am planning to expand my knowledge further through additional training in backend development.';
  introExp:string = 'During my training, I gained valuable experience in web development—both through school projects and my work at Kombro, a marketing company that creates websites. There, I was responsible for various projects and had the opportunity to further develop my skills in practice.';
  introFuture:string = 'Now, I am excited for the next challenge: stepping into a developer role. I am highly motivated to keep learning, growing, and applying my knowledge to exciting projects.';

  windowWidth;
  constructor() {
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;    
  }
}
