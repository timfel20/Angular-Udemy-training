import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  displayMe: string = '';
  displayControl : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.displayMe = "Now display this";
    this.displayControl = true;
  }

}
