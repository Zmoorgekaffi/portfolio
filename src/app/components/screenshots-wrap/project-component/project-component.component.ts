import { Component, Input, inject } from '@angular/core';
import { TranslateServiceService } from '../../../services/translate-service.service';

interface ProjectInfo {
  imgSrc: string;
  title: string;
  tech: string;
  description: string,
  descriptionDe: string,
  url:string,
  github:string,
  webflow?:string,
}


@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss'
})
export class ProjectComponentComponent {
  translateService = inject(TranslateServiceService);

  @Input() projectInfo:ProjectInfo = {
    imgSrc: '',
    title: '',
    tech: '',
    description:'',
    descriptionDe: '',
    url:'',
    github:''
  };

  @Input() parentIndex:number = 0;
}
