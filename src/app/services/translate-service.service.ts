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

  changeLanguage(language:string):void {
    switch (language) {
      case 'en':
        this.language = Language.en
        this.setLanguageToLocalstorage(Language.en);
        break;
      
      case 'de':
          this.language = Language.de
          this.setLanguageToLocalstorage(Language.de);
          break;
  
      default:
        break;
    }
  }

  initLanguageFromLocalStorage():void {
    let localstorageLanguage = localStorage.getItem('language');
    if(localstorageLanguage) {
      this.changeLanguage(localstorageLanguage);
    } else {
      this.setLanguageToLocalstorage(Language.en);
    }
  }

  setLanguageToLocalstorage(language:string):void {
    localStorage.setItem('language', language);
  }
}
