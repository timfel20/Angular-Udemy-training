import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
   newUser: { name: string, status: boolean } = {
    name: '',
    status: false
  };


  activeUsers: { name: string, status: boolean }[] = [];
  inactiveUsers: { name: string, status: boolean }[] = [];

   
  createUsers(newUser: {name: string, status: boolean}){
    if(newUser.status === true){
      this.activeUsers.push(newUser)

    }
    else{this.inactiveUsers.push(newUser)}
  }

  
  onchangetoActive(info:{id: number, status: boolean}){
    console.log('Index:', info.id);
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

  constructor() { }
}
