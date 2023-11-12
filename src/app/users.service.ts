import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {id: 0, name: 'John', status: true},
    {id: 1, name: 'Bisi', status: false},
    {id: 2, name: 'Tally', status: true},
    {id: 3, name: 'Larry', status: true},
    {id: 4, name: 'Bigi', status: false}
  ]
  
  getUsers(id: number){
    return this.users
  }

  getUser(id: number){
    const actualUser = this.users.find(user =>{
      return user.id === id
    })
    return actualUser
  }
 /*  both return statements in the getUser function are returning the same thing, which is the entire user object, not just the id.
  The find method returns the user object that matches the condition (user.id === id). When the find method finds a matching user, the first return statement inside the find callback function returns that user object. The second return statement, which is outside the find method, also returns the same user object because it's returning the value of the actualUser variable, which holds the user object.
  So, both return statements return the entire user object when there's a match, and they return undefined when there's no match. */

  //finds returns a boolean value that's why we're reusing it like that in the second function 
  updateUser( id: number, userUpdate: {id: number, name: string, status: boolean}){
     let userToUpdate = this.getUser(id) 
    if(userToUpdate){
      userToUpdate.name = userUpdate.name
      userToUpdate.status = userUpdate.status
    }
  }
  constructor() { }
}
