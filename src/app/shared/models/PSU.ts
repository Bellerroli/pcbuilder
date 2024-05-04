import {PCPart} from "./PCPart";

export interface PSU extends PCPart{
  voltage: number;
  output: number;
}
