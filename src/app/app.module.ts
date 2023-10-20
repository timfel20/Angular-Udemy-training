import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivengStyleComponent } from './directiveng-style/directiveng-style.component';
import { DirectivengStylebetterComponent } from './directiveng-stylebetter/directiveng-stylebetter.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    DirectivesComponent,
    DirectivengStyleComponent,
    DirectivengStylebetterComponent,
    ExerciseTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
