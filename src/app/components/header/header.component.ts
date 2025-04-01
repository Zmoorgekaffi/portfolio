import { Component, HostListener, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent{
  windowWidth = window.innerWidth;
  mobileToggle = false;
  lastScrollPosition:number = 0;
  showHeader:boolean = true;
  domTop:boolean = true;
  
  constructor(private router: Router){}

  //hostlistener variables
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  @ViewChild('desktopHeader') desktopHeader!: ElementRef;

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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.showHeaderLogic()
    this.lookIfViewIsOnTopOfDom()
    if(!this.domTop){
      this.desktopHeader.nativeElement.classList.remove('border-radius-if-vp-is-top');
    } else if(this.domTop) {
      this.desktopHeader.nativeElement.classList.add('border-radius-if-vp-is-top');
    }
  }

  //conpmonent functions
  lookIfViewIsOnTopOfDom(): void {
    this.domTop = window.scrollY === 0; // Ist true, wenn man ganz oben ist
  }

  showHeaderLogic() {
    const currentScrollPosition = window.scrollY;
    if(currentScrollPosition < this.lastScrollPosition) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
      if(this.mobileToggle == true) {
        this.closeMobileMenu();      
      }
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  closeMobileMenu() {
    this.mobileMenu.nativeElement.classList.remove('d-none');
    this.mobileMenu.nativeElement.classList.remove('mobile-menu_show-animation');
    if(this.mobileToggle == true) {
      this.mobileMenu.nativeElement.classList.add('mobile-menu_hide-animation');      
    }
    this.addDNone();
    this.mobileToggle = false;
  }

  toggleMobileNav() {
    if(this.mobileToggle === true) {
      this.mobileMenu.nativeElement.classList.remove('d-none');
      this.mobileMenu.nativeElement.classList.remove('mobile-menu_show-animation');
      this.mobileMenu.nativeElement.classList.add('mobile-menu_hide-animation');
      this.addDNone();
      this.mobileToggle = false;
    } else {
      this.mobileMenu.nativeElement.classList.remove('d-none');
      this.mobileMenu.nativeElement.classList.remove('mobile-menu_hide-animation');
      this.mobileMenu.nativeElement.classList.add('mobile-menu_show-animation');
      this.mobileToggle = true;
    }
  }

  addDNone() {
    setTimeout(() => {
      this.mobileMenu.nativeElement.classList.add('d-none');
    }, 300);
  }

  scrollTo(id:string) {
    switch (id) {
      case 'about-me':
        this.ScrollToElementId(`${id}`);
        break;
      case 'my-skills':
        this.ScrollToElementId(`${id}`);
        break;
      case 'portfolio':
        this.ScrollToElementId(`${id}`);
        break;
      case 'contact':
        this.ScrollToElementId(`${id}`);
        break;
      }
  }

  ScrollToElementId(id:string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


