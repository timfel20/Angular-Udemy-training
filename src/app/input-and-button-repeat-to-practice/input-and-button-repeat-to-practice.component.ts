import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-and-button-repeat-to-practice',
  templateUrl: './input-and-button-repeat-to-practice.component.html',
  styleUrls: ['./input-and-button-repeat-to-practice.component.css']
})
export class InputAndButtonRepeatToPracticeComponent implements OnInit {
  incomingUserEyeColor = '';
  incomingUserName = ''

  @Output() dataCreated = new EventEmitter<{userName: string, userEyeColor: string}>()

  constructor() { }

  ngOnInit(): void {
  }

  sendInputData(){
    this.dataCreated.emit({
      userName: this.incomingUserName,
      userEyeColor: this.incomingUserEyeColor
    })
  }
}
