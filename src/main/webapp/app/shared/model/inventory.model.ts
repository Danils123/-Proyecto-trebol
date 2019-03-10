import { IProduct } from 'app/shared/model/product.model';

export interface IInventory {
    id?: number;
    products?: IProduct[];
}

export class Inventory implements IInventory {
    constructor(public id?: number, public products?: IProduct[]) {}
}
