import {PCPart} from "./PCPart";

export interface Drive extends PCPart{
  type: DriveType;
  size: number; //in gigs
}
