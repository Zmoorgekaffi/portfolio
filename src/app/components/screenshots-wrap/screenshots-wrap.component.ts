import { Component } from '@angular/core';
import { ProjectComponentComponent } from './project-component/project-component.component';

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

  projects = [
    {
      imgSrc: '/assets/imgs/project-imgs/join.png',
      title: 'join',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks \
                    using drag and drop functions, assign users and categories.',
      url: '',
      github:''
    },
    {
      imgSrc: '/assets/imgs/project-imgs/Pollo loco 1.png',
      title: 'El Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. \
                    Help Pepe to find coins and salsa bottles to fight against the big chicken.',
      url: '',
      github:''
    },
    {
      imgSrc: '/assets/imgs/project-imgs/pokedex.png',
      title: 'Pokedex',
      tech: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      url: '',
      github:''
    },
  ];
}
