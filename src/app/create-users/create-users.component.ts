import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  @Output() createdUser = new EventEmitter<{name: string, status: boolean}>()
  constructor() { }

  ngOnInit(): void {
  }
  createUser(inputName: string, inputStatus: boolean ){
    this.createdUser.emit(
      {name: inputName, status: inputStatus}
    )
  }

}
