import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends:User[];

  constructor() {
    let myUser:User = {
      nick:'pvklein',
      subnick:'javi',
      age:39,
      email:'javi.mph@gmail.com',
      friend:true,
      uid:1
    };
    let myUser2:User = {
      nick:'Hobbs',
      subnick:'Carlos',
      age:38,
      email:'carlos.mph@gmail.com',
      friend:false,
      uid:2
    };
    this.friends=[myUser,myUser2];
   }

   getFriends(){
     return this.friends;
   }
}
