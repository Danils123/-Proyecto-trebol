import { IInventory } from 'app/shared/model/inventory.model';
import { IScheduleCommerce } from 'app/shared/model/schedule-commerce.model';

export interface ICommerce {
    id?: number;
    identification?: number;
    name?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
    email?: string;
    ranking?: number;
    photograph?: string;
    state?: number;
    phone?: string;
    inventory?: IInventory;
    schedule?: IScheduleCommerce;
}

export class Commerce implements ICommerce {
    constructor(
        public id?: number,
        public identification?: number,
        public name?: string,
        public address?: string,
        public latitude?: string,
        public longitude?: string,
        public email?: string,
        public ranking?: number,
        public photograph?: string,
        public state?: number,
        public phone?: string,
        public inventory?: IInventory,
        public schedule?: IScheduleCommerce
    ) {}
}
