import { Product } from "../models/api/Product";
import { BaseService } from "./BaseService";
import { IBaseService } from "./IBaseService";
export class ProductService extends BaseService<Product>{
    constructor(){
        super (`your__url`)
    }
}