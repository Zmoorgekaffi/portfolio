import { Component, inject } from '@angular/core';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { TranslateServiceService } from '../../services/translate-service.service';


@Component({
  selector: 'app-screenshots-wrap',
  standalone: true,
  imports: [
    ProjectComponentComponent
  ],
  templateUrl: './screenshots-wrap.component.html',
  styleUrl: './screenshots-wrap.component.scss'
})
export class ScreenshotsWrapComponent {

  translateService = inject(TranslateServiceService);

  projects = [
    {
      imgSrc: 'assets/imgs/project-imgs/join.png',
      title: 'join',
      tech: 'Javascript | HTML | CSS | Api',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks \
                    using drag and drop functions, assign users and categories.',
      descriptionDe: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      url: 'https://gruppe-812.developerakademie.net/index.html',
      github: 'https://github.com/Zmoorgekaffi/join',
    },
    {
      imgSrc: 'assets/imgs/project-imgs/Pollo loco 1.png',
      title: 'El Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. \
                    Help Pepe to find coins and salsa bottles to fight against the big chicken.',
      descriptionDe: 'Ein simples Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Salsa-Flaschen zu finden, um gegen das große Huhn zu kämpfen.',
      url: 'https://andre-karyoti.com/el-pollo-locco',
      github: 'https://github.com/Zmoorgekaffi/el-pollo-locco',
    },
    {
      imgSrc: 'assets/imgs/project-imgs/pokedex.png',
      title: 'Pokedex',
      tech: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      descriptionDe: 'Eine einfache Bibliothek basierend auf der PokéAPI. Bietet und katalogisiert Pokémon-Informationen.',
      url: 'https://andre-karyoti.com/pokedex/',
      github: 'https://github.com/Zmoorgekaffi/pokedex',
    },
    {
      imgSrc: 'assets/imgs/project-imgs/kleine-schwimmer.webp',
      title: 'Kleine Schwimmer',
      tech: 'JavaScript | HTML | CSS | Api | Webflow | Swiper',
      description: 'For the "Kleine Schwimmer", I had the pleasure of developing a beautiful website through the company Kombro. I built it completely from scratch using webflow, ensuring a smooth, functional, and user-friendly experience.',
      descriptionDe: 'Für „Kleine Schwimmer“ hatte ich das Vergnügen, über die Firma Kombro eine wunderschöne Website zu entwickeln. Ich habe sie von Grund auf mit Webflow erstellt und dabei eine reibungslose, funktionale und benutzerfreundliche Erfahrung sichergestellt.',
      url: 'https://kleine-schwimmer.ch',
      github: '',
      webflow: 'https://webflow.com/@andre-karyoti'
    },
    {
      imgSrc: 'assets/imgs/project-imgs/enzo.webp',
      title: 'ENZO',
      tech: 'JavaScript | HTML | CSS | Webflow | Swiper',
      description: 'Enzo is a young Swiss musician, and I had the opportunity to develop his website entirely from scratch using webflow. The goal was to create a sleek and engaging online presence that reflects his artistry and passion for music.',
      descriptionDe: 'Enzo ist ein junger Schweizer Musiker, und ich hatte die Möglichkeit, seine Website komplett von Grund auf mit Webflow zu entwickeln. Ziel war es, eine elegante und ansprechende Online-Präsenz zu schaffen, die seine Kunst und Leidenschaft für Musik widerspiegelt.',
      url: 'https://www.enzomusic.ch/',
      github: '',
      webflow: 'https://webflow.com/@andre-karyoti'
    },
    {
      imgSrc: 'assets/imgs/project-imgs/arnet-gartenbau.webp',
      title: 'Arnet Gartenbau',
      tech: 'JavaScript | HTML | CSS | Webflow | Swiper',
      description: 'For Arnet Gartenbau, a landscaping company, I had the chance to develop their website from the ground up using webflow. This project was particularly exciting as the site is structured around a dynamic tagging system, making it both interactive and user-friendly.',
      descriptionDe: 'Für Arnet Gartenbau, ein Landschaftsbauunternehmen, hatte ich die Chance, deren Website von Grund auf mit Webflow zu entwickeln. Besonders spannend war dieses Projekt, da die Seite auf einem dynamischen Tagging-System basiert, was sie interaktiv und benutzerfreundlich macht.',
      url: 'https://www.arnetgartenbau.ch/',
      github: '',
      webflow: 'https://webflow.com/@andre-karyoti'
    },
    {
      imgSrc: 'assets/imgs/project-imgs/solarhub.webp',
      title: 'Solarhub',
      tech: 'JavaScript | HTML | CSS | Webflow | Swiper',
      description: 'For Solarhub, a solar panel installation company, I built a lead generation website from scratch using webflow. The focus was on optimizing performance and user flow to efficiently connect potential customers with the right solutions.',
      descriptionDe: 'Für Solarhub, ein Unternehmen für Solaranlagen-Installation, habe ich eine Lead-Generierungs-Website von Grund auf mit Webflow erstellt. Der Fokus lag auf der Optimierung von Performance und Nutzerführung, um potenzielle Kunden effizient mit den richtigen Lösungen zu verbinden.',
      url: 'https://www.solarhub-pro.ch/',
      github: '',
      webflow: 'https://webflow.com/@andre-karyoti'
    },
  ];
}
