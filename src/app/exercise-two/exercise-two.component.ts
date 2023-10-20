import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {
  secreteWord:boolean = false;
  count:number = 0;
  numbers:any = [];
  applyRed:string = 'red_style';

  constructor() { }

  ngOnInit(): void {
  }

  toggleWord(){
    //this.secreteWord = !this.secreteWord
    this.count ++
    this.numbers.push(this.count)
    console.log(this.numbers)
  }

}
