import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateServiceService } from '../../services/translate-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translateService = inject(TranslateServiceService);

  constructor(private router: Router){}

  ScrollToElementId(id:string) {
    document.getElementById(`${id}`)?.scrollIntoView({behavior: 'smooth'});
  }

  routeToImprint() {
    this.router.navigateByUrl('/imprint');
  }
}
