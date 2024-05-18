import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PCFullData} from "../models/PCFullData";

@Injectable({
  providedIn: 'root'
})
export class PcService {
  collectionName: string = "PCFull";

  constructor(private afs: AngularFirestore) {
  }

  create(pc: PCFullData) {
    pc.id = this.afs.createId();
    this.afs.collection<PCFullData>(this.collectionName).doc(pc.id).set(pc).then(() => {
      console.log("PC saved!")
    }).catch(err => {
      console.error(err)
    });
  }

  update(pc: PCFullData) {
    this.afs.collection(this.collectionName).doc(pc.id).set(pc)
      .then(() => console.log("Updated!"))
      .catch(err => {
        console.error(err)
      });
  }

  delete(pc: PCFullData) {
    this.afs.collection(this.collectionName).doc(pc.id).delete()
      .then(r => console.log("PC " + pc.id + " deleted!"))
      .catch(err => {
        console.error(err)
      });
  }

  findAllForUser(userID: string) {
    return this.afs.collection<PCFullData>(this.collectionName, ref => ref.where('userID', '==', userID)).valueChanges();
  }
}
