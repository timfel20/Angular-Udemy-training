import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() userInfo: { name: string, status: boolean } = { name: '', status: false };
  id: number = 0;

  /* @Output() statusChanged = new EventEmitter<{id: number, status: boolean}>() */


  constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
  }

  changeStatus(getId: number, getStatus: boolean){
   /*  this.statusChanged.emit(
      {id: getId, status: getStatus}
    ) */

    let info: { id: number, status: boolean } = {
      id: getId,
      status: getStatus
    };
    
    this.userService.onchangetoActive(info)
  }
}
