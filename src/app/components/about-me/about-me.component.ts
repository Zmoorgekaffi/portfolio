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
     
  intro:string = 'Ich bin ein leidenschaftlicher Frontend-Entwickler mit einer abgeschlossenen Umschulung in diesem Bereich. Derzeit plane ich, mein Wissen durch eine Weiterbildung im Backend-Development weiter auszubauen.';
  introExp:string = 'Während meiner Ausbildung konnte ich wertvolle Erfahrungen in der Entwicklung von Webprojekten sammeln - sowohl durch Schulprojekte als auch durch meine Arbeit bei Kombro, einer Marketingfirma, die Webseiten erstellt. Dort war ich für verschiedene Projekte verantwortlich und konnte meine Fähigkeiten in der Praxis weiterentwickeln.';
  introFuture:string = 'Nun freue ich mich auf die nächste Herausforderung: den Einstieg in eine Entwicklerrolle. Ich bin motiviert, kontinuierlich dazuzulernen, mich weiterzuentwickeln und mein Wissen in spannenden Projekten anzuwenden.';

  windowWidth;
  constructor() {
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;    
  }
}
