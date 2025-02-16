import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ScreenshotsWrapComponent } from '../screenshots-wrap/screenshots-wrap.component';
import { AtfComponent } from '../atf/atf.component';
import { ContactComponent } from '../contact/contact.component';
import { WindowsizeService } from '../../services/windowsize.service';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    CommonModule,
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
  windowWidth:number = 0;

  constructor(private windowsizeService: WindowsizeService) {
    this.windowsizeService.windowWidth$.subscribe(width => {
      this.windowWidth = width;
    });
  }
}
