import {PCPart} from "./PCPart";

export interface GPU extends PCPart{
  memorySize: number;
  clockSpeed: number;
}
