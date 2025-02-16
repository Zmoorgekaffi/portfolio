import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowsizeService {
  private windowWidth = new BehaviorSubject<number>(window.innerWidth);
  windowWidth$ = this.windowWidth.asObservable(); // Observable für Komponenten

  constructor() {
    this.listenToResize();
  }

  private listenToResize() {
    window.addEventListener('resize', () => {
      this.windowWidth.next(window.innerWidth);
    });
  }
}
