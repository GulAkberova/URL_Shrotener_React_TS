import axios from "axios";
import { BaseModel } from "../models/api/BaseModel";
import { axiosInstance } from "./axiosInstance";
import { IBaseService } from "./IBaseService";
export class BaseService <T extends  BaseModel>{
    private entityUrl: string=""

    constructor(url: string){
        this.entityUrl=url
    }

    async getAll(your__url: string): Promise<T[]> {
        // let response = await axios.get(
        //     `https://api.shrtco.de/v2/shorten?url=${your__url}`
        //   );

        let response = await axiosInstance.get(this.entityUrl);
        let res: T[] = response.data;


        return res;

    }


}