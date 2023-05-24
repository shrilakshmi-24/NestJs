import { Injectable } from "@nestjs/common";
import { User } from "./users.entity";

@Injectable()
export class UserService{
  public users:User[]=[{
    username:"user1",
    password:"1234",
    email:"user1@gmail.com"
  },
  {
    username:"user2",
    password:"1234",
    email:"user2@gmail.com"
  },
  {
    username:"user3",
    password:"1234",
    email:"user3@gmail.com"
  }]
  getUserByName(username:string):User{
    return this.users.find((user:User)=>user.username===username)
  }

}