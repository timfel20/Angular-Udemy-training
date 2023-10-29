import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() userInfo: { name: string, status: boolean } = { name: '', status: false };
  id: number = 0;

  @Output() statusChanged = new EventEmitter<{id: number, status: boolean}>()


  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(getId: number, getStatus: boolean){
    this.statusChanged.emit(
      {id: getId, status: getStatus}
    )
    console.log("hfgf"+getId)

  }
}
