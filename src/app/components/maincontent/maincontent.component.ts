import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AtfSectionComponent } from '../atf-section/atf-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ScreenshotsWrapComponent } from '../screenshots-wrap/screenshots-wrap.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    HeaderComponent,
    AtfSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    ScreenshotsWrapComponent
],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
