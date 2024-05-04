import {PCPart} from "./PCPart";

export interface CPU extends PCPart{
  clockSpeed: number;
  cores: number;
}
