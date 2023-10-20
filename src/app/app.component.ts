import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-to-custom-properties';

  personFeatures = [{name : 'Thomas', eyeColor: 'brown', age: 26 }, {name : 'Lila', eyeColor: 'brown', age: 26 }]
}
