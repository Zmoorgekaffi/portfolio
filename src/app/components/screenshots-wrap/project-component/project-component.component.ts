import { Component, Input } from '@angular/core';

interface ProjectInfo {
  imgSrc: string;
  title: string;
  tech: string;
  description: string,
  url:string,
  github:string
}


@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss'
})
export class ProjectComponentComponent {
  @Input() projectInfo:ProjectInfo = {
    imgSrc: '',
    title: '',
    tech: '',
    description:'',
    url:'',
    github:''
  };

  @Input() parentIndex:number = 0;
}
