import {PCPart} from "./PCPart";
import {DriveType} from "../enums/DriveType";

export interface Drive extends PCPart{
  type: DriveType;
  size: number; //in gigs
}
