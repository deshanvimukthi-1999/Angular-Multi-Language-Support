import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule, DatePipe } from '@angular/common'; // Import CommonModule and DatePipe
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MomentModule } from 'ngx-moment'; // Import MomentModule

import { AppComponent } from './app.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { CurrentDateTimeComponent } from './current-date-time/current-date-time.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
    DataEntryComponent,
    CurrentDateTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BidiModule,
    CommonModule, // Add CommonModule
    MomentModule, // Add MomentModule
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DatePipe], // Provide DatePipe here
  bootstrap: [AppComponent]
})
export class AppModule {}