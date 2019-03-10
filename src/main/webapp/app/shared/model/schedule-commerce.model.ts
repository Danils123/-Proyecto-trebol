export interface IScheduleCommerce {
    id?: number;
    day?: string;
    openTime?: string;
    closingTime?: string;
}

export class ScheduleCommerce implements IScheduleCommerce {
    constructor(public id?: number, public day?: string, public openTime?: string, public closingTime?: string) {}
}
