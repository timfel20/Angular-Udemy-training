import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {  
  @Input() userInfo: { name: string, status: boolean } = { name: '', status: false };
  @Input() id: number = 0;

  @Output() statusChanged = new EventEmitter<{id:number, status: boolean}>()

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus( newId: number, newStatus: boolean){
    this.statusChanged.emit(
      {id: newId, status: newStatus}
      )
  }
}
