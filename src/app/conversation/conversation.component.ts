import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId:number;
  friends: User[];
  friend:User;

  price: number= 78.5465465465465;
  today:any = Date.now();

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    
    //Para traer el identificador de amigo
    this.friendId=this.activateRoute.snapshot.params['uid'];
    //console.log(this.friendId);

    //Para traer del servicio todos los amgios
    this.friends=this.userService.getFriends();
    //Selecciona el amigos entre los amigos.
    this.friend = this.friends.find((record)=>{
      return record.uid== this.friendId;
    });
    console.log(this.friend);

   }

  ngOnInit() {
  }

}
