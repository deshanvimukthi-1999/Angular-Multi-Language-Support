import { Directionality } from '@angular/cdk/bidi';
import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  supportedLanguages: { code: string; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'ar', name: 'العربية' }
  ];
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
