import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';
  constructor(private fs: AngularFirestore) { }

  create(user:User){
    return this.fs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  read(){}
  getAll(){}
  update(){}

}
