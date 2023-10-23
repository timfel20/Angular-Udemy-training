import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component_data_binding_exercise';
  countFromChild:number = 0;

  parentEvenNumber!: number
  parentEvensList: number[] = []

  parentOddsList: number[] = []

  getCreateGame(count: number){
    this.countFromChild = count;
    console.log("count" + this.countFromChild)
    if (this.countFromChild % 2 === 0){
      this.parentEvensList.push(this.countFromChild)
    }
    else{
      this.parentOddsList.push(this.countFromChild)
    }
  }
}
