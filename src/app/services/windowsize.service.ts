import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowsizeService {
  private windowWidth = new BehaviorSubject<number>(window.innerWidth);
  windowWidth$ = this.windowWidth.asObservable(); // Observable für Komponenten
  windowWithAsNumber = 0;

  constructor() {
    this.initializeService();
    this.listenToResize();
  }

  private listenToResize() {
    window.addEventListener('resize', () => {
      this.windowWidth.next(window.innerWidth);
    });
  }

  private initializeService() {
    this.windowWithAsNumber = window.innerWidth;
  }
}
