import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');

    // Detect language and apply RTL class for Arabic
    if (translate.currentLang === 'ar') {
      document.body.classList.add('ar');
    }
  }
}