import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PC} from "../models/PC";
import {collection} from "@angular/fire/firestore";
import {User} from "../models/User";
import {PCFullData} from "../models/PCFullData";

@Injectable({
  providedIn: 'root'
})
export class PcService {
  collectionName: string = "PCFull";

  constructor(private afs: AngularFirestore) { }

  create(pc: PCFullData){
    pc.id = this.afs.createId();
    this.afs.collection<PCFullData>(this.collectionName).doc(pc.id).set(pc).then(()=>{console.log("PC saved!")}).catch(err=>{console.error(err)});
  }
  update(pc:PC){}
  delete(pc:PC){}
  findAllForUser(userID: string) {
    return this.afs.collection<PCFullData>(this.collectionName, ref => ref.where('userID','==' ,userID)).valueChanges();
  }
}
