import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WindowsizeService } from './services/windowsize.service';
import { HeaderComponent } from './components/header/header.component';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  windowSizeService = inject(WindowsizeService);
  windowWidthAsNumber = this.windowSizeService.windowWithAsNumber

  ngOnInit():void {
    AOS.init();
  }
}

