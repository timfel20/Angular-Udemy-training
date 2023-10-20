import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveng-stylebetter',
  templateUrl: './directiveng-stylebetter.component.html',
  styleUrls: ['./directiveng-stylebetter.component.css']
})
export class DirectivengStylebetterComponent implements OnInit {

  statuses: any[] = [
    {status: 'online', color: 'green'},
    {status: 'offline', color: 'red'},
]

  constructor() { }

  ngOnInit(): void {
  }

  switchMode(){
    this.statuses.forEach(status => {
      var randomNumber = Math.floor(Math.random() * 10) + 1;
      //randomNumber > 5? status.status = 'online' :  status.status = 'offline'
      status.status = randomNumber > 5 ? 'online' : 'offline';
      status.color = randomNumber > 5 ? 'green' : 'red';
      console.log(randomNumber);
      console.log(status.status) 
    });
  }

}

