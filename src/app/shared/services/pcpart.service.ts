import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PCPart} from "../models/PCPart";
import {flatMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PcpartService {
  collection: string = "CPU";

  constructor(private afs: AngularFirestore) {}

  create(partType: string, part: PCPart) {
    part.id = this.afs.createId();
    this.afs.collection(partType).doc(part.id).set(part).then(()=>{console.log("Part saved!")}).catch(err=>{console.error(err)});
  }

  update(partType: string, part: PCPart) {
  }

  delete(partType: string, part: PCPart) {
  }

  findAll(partType: string) {
    return this.afs.collection(partType).valueChanges();
  }

  findByID(type: string, id: string){
    return this.afs.collection(type, ref => ref.where('id','==', id)
      .limit(1)).valueChanges();
  }
}
