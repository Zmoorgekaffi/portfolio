import { Component, inject, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { TranslateServiceService } from '../../services/translate-service.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements AfterViewInit {
  translateService = inject(TranslateServiceService);

  ngAfterViewInit(): void {
    this.scrollToTop();
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
