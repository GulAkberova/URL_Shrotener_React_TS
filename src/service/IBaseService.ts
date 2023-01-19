import { BaseModel } from "../models/api/BaseModel";

export interface IBaseService{
    getAll(your__url: string):Promise<BaseModel[]>
}