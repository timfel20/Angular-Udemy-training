import { Component, OnInit ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-and-button',
  templateUrl: './input-and-button.component.html',
  styleUrls: ['./input-and-button.component.css']
})
export class InputAndButtonComponent implements OnInit {
  incomingUserName = ''
  incomingUserEyeColor = ''

  @Output() dataCreated = new EventEmitter<{ userName: string; userEyeColor: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  sendInputData() {
    this.dataCreated.emit({ userName: this.incomingUserName, userEyeColor: this.incomingUserEyeColor });
  }

  
}
