import {CPU} from "./CPU";
import {GPU} from "./GPU";
import {Motherboard} from "./Motherboard";
import {Drive} from "./Drive";
import {PCCase} from "./PCCase";
import {RAM} from "./RAM";
import {PSU} from "./PSU";

export interface PC{
  id: string,
  userID: string,
  cpu: string;
  gpu: string;
  motherboard: string;
  drive: string;
  driveNumber: number;
  case: string;
  ram: string;
  ramNumber: number;
  psu: string;
}
