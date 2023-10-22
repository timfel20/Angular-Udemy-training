import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { InputAndButtonComponent } from './input-and-button/input-and-button.component';
import { InputAndButtonRepeatToPracticeComponent } from './input-and-button-repeat-to-practice/input-and-button-repeat-to-practice.component';
import { LocalReferencesComponent } from './local-references/local-references.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    InputAndButtonComponent,
    InputAndButtonRepeatToPracticeComponent,
    LocalReferencesComponent
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
