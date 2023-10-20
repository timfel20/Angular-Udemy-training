import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  /* using @Input() because properties from components(in this case feature) is only accessible inside the Component,
  to be able to use it outside this component and use external components to add data and sent it as the data of our feature Property,
  we use Input. Input is to open our property for modicication and receive the modified values.   */
  @Input()
  feature! : {
    name: string, 
    eyeColor: string, 
    age:number 
  }

  constructor() { }

  ngOnInit(): void {
  }

 

}
