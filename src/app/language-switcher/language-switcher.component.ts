import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Directionality } from '@angular/cdk/bidi';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  supportedLanguages: string[] = ['en', 'es', 'nl', 'ar'];
  currentLang: string;
  isRtl: boolean = false;
  currentTime: string = ''; 

  constructor(
    private _adapter: DateAdapter<any>,
    private translate: TranslateService,
    private dir: Directionality
  ) {
    this.currentLang = this.translate.currentLang || 'en';
    this.setLanguageDirection();
    this.updateCurrentTime(); 
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.setLanguageDirection();
    this._adapter.setLocale(lang);
    this.updateCurrentTime(); 
  }

  setLanguageDirection() {
    const currentLang = this.translate.currentLang;
    this.isRtl = currentLang === 'ar';
  }

  updateCurrentTime() {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' } as Intl.DateTimeFormatOptions;
    this.currentTime = new Intl.DateTimeFormat(this.currentLang, options).format(new Date());
  }
}