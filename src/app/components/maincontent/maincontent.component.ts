import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AtfSectionComponent } from '../atf-section/atf-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    HeaderComponent,
    AtfSectionComponent,
    AboutMeComponent
],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
