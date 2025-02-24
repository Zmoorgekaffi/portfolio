import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  ScrollToElementId(id:string) {
    document.getElementById(`${id}`)?.scrollIntoView({behavior: 'smooth'});
  }
}
