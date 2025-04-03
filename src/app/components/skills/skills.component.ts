import { Component, inject } from '@angular/core';
import { TranslateServiceService } from '../../services/translate-service.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  iconPaths = [
    'assets/imgs/icons/skills/angular.svg',
    'assets/imgs/icons/skills/javascript.svg',
    'assets/imgs/icons/skills/typescript.svg',
    'assets/imgs/icons/skills/firebase.svg',
    'assets/imgs/icons/skills/html.svg',
    'assets/imgs/icons/skills/css.svg',
    'assets/imgs/icons/skills/git.svg',
    'assets/imgs/icons/skills/material.svg',
    'assets/imgs/icons/skills/rest-api.svg',
    'assets/imgs/icons/skills/scrum.svg',
    'assets/imgs/icons/skills/webflow.svg',
  ];

  translateService = inject(TranslateServiceService);

  description:string = 'I have gained experience in building projects with various front end technologies and concepts.';
  descriptionDe:string = 'Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.';
  
}
