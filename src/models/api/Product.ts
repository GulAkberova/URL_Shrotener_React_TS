import { BaseModel } from "./BaseModel";

export interface Product extends BaseModel {
  short_link: string;
  original_link: string;
}
