import {CPU} from "./CPU";
import {GPU} from "./GPU";
import {Motherboard} from "./Motherboard";
import {Drive} from "./Drive";
import {PCCase} from "./PCCase";
import {RAM} from "./RAM";
import {PSU} from "./PSU";

export interface PC{
  cpu: CPU;
  gpu: GPU;
  motherboard: Motherboard;
  drives: Array<Drive>;
  case: PCCase;
  rams: Array<RAM>;
  psu: PSU;
}
