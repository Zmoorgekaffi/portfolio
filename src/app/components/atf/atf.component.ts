import { sanitizeIdentifier } from '@angular/compiler';
import { Component, Sanitizer, HostListener, OnInit  } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent implements OnInit {
  vektor1:SafeHtml;
  vektor2:SafeHtml;
  vektor3:SafeHtml;
  viewportWidth:number = 0;

    constructor(private sanitizer: DomSanitizer) {
      this.onResize()

      this.vektor1 = this.sanitizer.bypassSecurityTrustHtml(
      '\
      <svg width="100%" height="100%" viewBox="0 0 554 794" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <g filter="url(#filter0_f_97220_3817)">\
          <path d="M93.5168 330.454C153.843 199.398 192.023 154.004 203.572 147.689C203.572 147.689 240.767 17.8586 271.847 158.276C302.927 298.693 425.211 100.883 425.211 100.883L460.877 330.454L321.757 413.887L460.877 464.742L396.678 701L176.568 500.961L321.757 413.887L93.5168 330.454Z" fill="#9747FF"/>\
        </g>\
        <defs>\
          <filter id="filter0_f_97220_3817" x="0.516846" y="0" width="553.36" height="794" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\
            <feGaussianBlur stdDeviation="46.5" result="effect1_foregroundBlur_97220_3817"/>\
          </filter>\
        </defs>\
      </svg>\
    ')

    this.vektor2 = this.sanitizer.bypassSecurityTrustHtml(
    '\
      <svg width="100%" height="100%" viewBox="0 0 598 689" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <g filter="url(#filter0_f_97220_3816)">\
          <path d="M155.24 380.593C-17.922 332.739 228.928 93.0498 228.928 93.0498C228.928 93.0498 287.734 296.791 368.79 202.22C449.847 107.648 393.172 296.793 466.972 383.117C540.773 469.441 481.902 494.502 481.902 494.502C481.902 494.502 405.161 637.011 342.61 584.297C280.06 531.584 207.425 498.25 179.921 451.85C155.12 410.01 171.65 395.036 197.644 391.925C185.258 388.749 171.178 384.998 155.24 380.593Z" fill="#70E61C"/>\
        </g>\
        <defs>\
          <filter id="filter0_f_97220_3816" x="0.631348" y="0.0498047" width="596.516" height="688.947" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\
            <feGaussianBlur stdDeviation="46.5" result="effect1_foregroundBlur_97220_3816"/>\
          </filter>\
        </defs>\
      </svg>\
    ')

    this.vektor3 = this.sanitizer.bypassSecurityTrustHtml(
      '\
        <svg style="position:relative;" width="100%" height="100%" viewBox="0 0 1442 1079" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\
          <path d="M1442 0V712.4C1417.8 724.3 1393 735.9 1367.7 747.3C1174.2 834.1 943.8 908.2 682.9 967.3C404.9 1030.3 152.1 1063 2 1078.6L0 421.5C236 441.5 353.4 434.372 569.5 385C984 290.3 1281.7 152.1 1442 0Z" fill="url(#paint0_radial_535_3084)"/>\
            <defs>\
            <radialGradient id="paint0_radial_535_3084" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(674 42.5) rotate(82.2154) scale(887.756 1492.19)">\
            <stop offset="0.00372417" stop-color="#1A2743"/>\
            <stop offset="0.135417" stop-color="#27334B"/>\
            <stop offset="0.719125" stop-color="#141D2F"/>\
            </radialGradient>\
            </defs>\
        </svg>\
      ')
    }

    ngOnInit(): void {
      this.onResize();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: Event): void {
      this.viewportWidth = window.innerWidth;
    }
  }
