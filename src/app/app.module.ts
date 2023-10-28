import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight.directive';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { TemplateForBasicComponent } from './template-for-basic/template-for-basic.component';
import { TemplateForBetterComponent } from './template-for-better/template-for-better.component';
import { UnlessDirectiveDirective } from './unless-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
    TemplateForBasicComponent,
    TemplateForBetterComponent,
    UnlessDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
