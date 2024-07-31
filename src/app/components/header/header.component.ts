import { Component, HostListener, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  windowWidth = window.innerWidth;
  mobileToggle = false;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {    
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 860) {
      if(this.mobileToggle === true) {
        this.mobileMenu.nativeElement.classList.remove('mobile-menu_show-animation');
        this.mobileMenu.nativeElement.classList.add('d-none');
      }
      this.mobileToggle = false;    
    }   
  }

  toggleMobileNav() {
    if(this.mobileToggle === true) {
      this.mobileToggle = false;
      this.mobileMenu.nativeElement.classList.remove('d-none');
      this.mobileMenu.nativeElement.classList.remove('mobile-menu_show-animation');
      this.mobileMenu.nativeElement.classList.add('mobile-menu_hide-animation');
      this.addDNone();
    } else {
      this.mobileToggle = true;
      this.mobileMenu.nativeElement.classList.remove('d-none');
      this.mobileMenu.nativeElement.classList.remove('mobile-menu_hide-animation');
      this.mobileMenu.nativeElement.classList.add('mobile-menu_show-animation');
    }
  }

  addDNone() {
    setTimeout(() => {
      this.mobileMenu.nativeElement.classList.add('d-none');
    }, 300);
  }
}


