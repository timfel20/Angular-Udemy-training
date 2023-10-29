import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: { name: string, status: boolean }[] = [];
  inactiveUsers: { name: string, status: boolean }[] = [];
  
  createUsers(newUsers: {name: string, status: boolean}){
    if(newUsers.status === true){
      this.activeUsers.push(newUsers)

    }
    else{this.inactiveUsers.push(newUsers)}
  }

  onchangetoActive(info:{id: number, status: boolean}){
    console.log('Index:', info.id); // Log the index (id)
    this.inactiveUsers[info.id].status = true

   this.activeUsers.push(this.inactiveUsers[info.id])

   console.log(this.activeUsers[info.id]);

   this.inactiveUsers.splice(info.id, 1)

   console.log(this.activeUsers)
   console.log("stsu"+this.inactiveUsers[info.id].status)


  }

  onchangetoInactive(info: {id: number, status: boolean}){
    this.activeUsers[info.id].status = false

    this.inactiveUsers.push(this.activeUsers[info.id])

    this.activeUsers.splice(info.id, 1)

    console.log(this.inactiveUsers[info.id]);
    console.log("stsu"+this.inactiveUsers[info.id].status)

    console.log(this.inactiveUsers)
   

  }
  
}
