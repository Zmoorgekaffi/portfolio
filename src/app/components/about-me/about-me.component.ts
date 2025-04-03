import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateServiceService } from '../../services/translate-service.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
 
  translateService = inject(TranslateServiceService);

  intro:string = 'I am a passionate frontend developer with a completed career change training in this field. Currently, I am planning to expand my knowledge further through additional training in backend development.';
  introExp:string = 'During my training, I gained valuable experience in web development—both through school projects and my work at Kombro, a marketing company that creates websites. There, I was responsible for various projects and had the opportunity to further develop my skills in practice.';
  introFuture:string = 'Now, I am excited for the next challenge: stepping into a developer role. I am highly motivated to keep learning, growing, and applying my knowledge to exciting projects.';
  introDe: string = 'Ich bin ein leidenschaftlicher Frontend-Entwickler mit einer abgeschlossenen Umschulung in diesem Bereich. Derzeit plane ich, mein Wissen durch zusätzliche Schulungen in der Backend-Entwicklung weiter auszubauen.';  
  introExpDe: string = 'Während meiner Ausbildung habe ich wertvolle Erfahrungen in der Webentwicklung gesammelt - sowohl durch Schulprojekte als auch durch meine Arbeit bei Kombro, einer Marketingfirma, die Websites erstellt. Dort war ich für verschiedene Projekte verantwortlich und hatte die Möglichkeit, meine Fähigkeiten in der Praxis weiterzuentwickeln.';  
  introFutureDe: string = 'Jetzt freue ich mich auf die nächste Herausforderung: den Einstieg in eine Entwicklerrolle. Ich bin hochmotiviert, weiter zu lernen, zu wachsen und mein Wissen in spannenden Projekten anzuwenden.'; 

  windowWidth;
  constructor() {
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;    
  }
}
