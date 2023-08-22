import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  supportedLanguages: string[] = ['en', 'es', 'nl', 'ar'];
  currentLang: string;
  isRtl: boolean = false; // Initialize isRtl property

  constructor(
    private translate: TranslateService,
    private dir: Directionality
  ) {
    this.currentLang = this.translate.currentLang || 'en';
    this.setLanguageDirection();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.setLanguageDirection();
  }

  setLanguageDirection() {
    const currentLang = this.translate.currentLang;
    this.isRtl = currentLang === 'ar'; // Assuming Arabic is RTL
  }
}