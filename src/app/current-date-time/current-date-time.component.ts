import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-date-time',
  templateUrl: './current-date-time.component.html',
  styleUrls: ['./current-date-time.component.css']
})
export class CurrentDateTimeComponent implements OnInit {
  formattedDateTime: string = '';

  constructor(
    private translate: TranslateService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.translate.onLangChange.subscribe(() => {
      this.updateDateTime();
    });
  }

  updateDateTime() {
    const currentDateTime = new Date();
    const language = this.translate.currentLang || 'en';

    this.formattedDateTime = this.datePipe.transform(currentDateTime, 'short', undefined, language) || ''; 
  }
}

