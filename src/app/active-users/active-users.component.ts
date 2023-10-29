import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {  
  @Input() userInfo: { name: string, status: boolean } = { name: '', status: false };
  @Input() id: number = 0;

 /*  @Output() statusChanged = new EventEmitter<{id:number, status: boolean}>() */


  constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
  }

  changeStatus( newId: number, newStatus: boolean){
    let info: { id: number, status: boolean } = {
      id: newId,
      status: newStatus    
    };
   /*  this.statusChanged.emit(
      {id: newId, status: newStatus}
      ) */
      this.userService.onchangetoInactive(info)
  }
}
