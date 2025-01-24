import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ScreenshotsWrapComponent } from '../screenshots-wrap/screenshots-wrap.component';
import { AtfComponent } from '../atf/atf.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    HeaderComponent,
    AtfComponent,
    AboutMeComponent,
    SkillsComponent,
    ScreenshotsWrapComponent,
    ContactComponent
],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
