import {User} from "./User";
import {CPU} from "./CPU";
import {GPU} from "./GPU";
import {Motherboard} from "./Motherboard";
import {Drive} from "./Drive";
import {PCCase} from "./PCCase";
import {RAM} from "./RAM";
import {PSU} from "./PSU";

export interface PCFullData{
  id: string;
  userID: string;
  cpu: CPU;
  gpu: GPU;
  motherboard: Motherboard;
  drive: Drive;
  driveNumber: number;
  case: PCCase;
  ram: RAM;
  ramNumber: number;
  psu: PSU;
}

// export class PCFullData{
//   id: string = '';
//   user: User | undefined;
//   cpu: CPU | undefined;
//   gpu: GPU | undefined;
//   motherboard: Motherboard | undefined;
//   drive: Drive | undefined;
//   driveNumber: number | undefined;
//   case: PCCase | undefined;
//   ram: RAM | undefined;
//   ramNumber: number | undefined;
//   psu: PSU | undefined;
// }
