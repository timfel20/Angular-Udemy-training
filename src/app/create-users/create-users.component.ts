import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
})
export class CreateUsersComponent implements OnInit {

/*   @Output() createdUser = new EventEmitter<{name: string, status: boolean}>()
 */  
constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
  }
  createUser(inputName: string, inputStatus: boolean) {
    // Create a new user object using the provided input
    const newUser = {
      name: inputName,
      status: inputStatus,
    };
  
    // Call the service method to add the new user
    this.userService.createUsers(newUser);
  }
  

}
