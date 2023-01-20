
import axios from "axios";
import { BaseModel } from "../models/api/BaseModel";
import {IBaseService} from './IBaseService'


export class BaseService implements IBaseService{
    async getİnfo(url:string): Promise<BaseModel[]> {
        let response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
        let res: BaseModel[] = response.data;
        return res;
    }
}
