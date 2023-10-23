import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0
  intervalCounter!:any;

  @Output() createGame = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.intervalCounter = setInterval(()=>{
      this.count++
      this.createGame.emit(this.count)
      console.log(this.count)
    }, 1000)
   
  }

  stopGame(){
 clearInterval(this.intervalCounter)
  }
}
