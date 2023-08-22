import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRtl: boolean = false; // Initialize isRtl property

  constructor(
    private translate: TranslateService,
    private dir: Directionality
  ) {
    translate.setDefaultLang('en');
    this.setLanguageDirection();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.setLanguageDirection();
  }

  setLanguageDirection() {
    const currentLang = this.translate.currentLang;
    this.isRtl = currentLang === 'ar'; // Assuming Arabic is RTL
  }
}