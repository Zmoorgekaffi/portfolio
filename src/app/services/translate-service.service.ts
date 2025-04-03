import { Injectable } from '@angular/core';

enum Language {
  en = 'en',
  de = 'de'
}

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceService {
  language:Language = Language.en;

  constructor() { }

  changeLanguage(language:string) {
    switch (language) {
      case 'en':
        this.language = Language.en
        break;
      
      case 'de':
          this.language = Language.de
          break;
  
      default:
        break;
    }
  }
}
