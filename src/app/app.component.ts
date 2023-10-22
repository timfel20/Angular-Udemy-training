import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-to-custom-properties';

  personFeatures = [{name: "tata", eyeColor: "black", age: 23}]

  createData(data: { userName: string, userEyeColor: string }) {
    this.personFeatures.push({
      name: data.userName,
      eyeColor: data.userEyeColor,
      age: 26
    });
    console.log(this.personFeatures);
  }
  
 /*  createData(data: {userName: string, userEyeColor: string}){
    this.personFeatures.push({
      name: data.userName,
      eyeColor: data.userEyeColor,
      age: 26  
    })
  } */
}
