import { Component, inject, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { TranslateServiceService } from '../../services/translate-service.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent implements AfterViewInit {

  translateService = inject(TranslateServiceService);

  ngAfterViewInit(): void {
    this.scrollToTop();
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
