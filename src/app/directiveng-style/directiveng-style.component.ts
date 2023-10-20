import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveng-style',
  templateUrl: './directiveng-style.component.html',
  styleUrls: ['./directiveng-style.component.css']
})
export class DirectivengStyleComponent implements OnInit {
 onlineStatus:string = '';
 onlineStatus2:string = '';
 statusColor: string = '';
 statusColor2: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  switchMode(){
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    var randomNumber2 = Math.floor(Math.random() * 10) + 1; 
    this.onlineStatus = randomNumber > 5 ? 'online' : 'offline';

    this.statusColor = this.onlineStatus === 'online' ? 'green' : 'red';
    this.onlineStatus2 = randomNumber2 > 5 ? 'online' : 'offline';
    this.statusColor2 = this.onlineStatus2 === 'online' ? 'green' : 'red';


    console.log(randomNumber);
    console.log(this.onlineStatus)
  }

}
