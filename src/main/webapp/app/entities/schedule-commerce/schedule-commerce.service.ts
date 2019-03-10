import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IScheduleCommerce } from 'app/shared/model/schedule-commerce.model';

type EntityResponseType = HttpResponse<IScheduleCommerce>;
type EntityArrayResponseType = HttpResponse<IScheduleCommerce[]>;

@Injectable({ providedIn: 'root' })
export class ScheduleCommerceService {
    public resourceUrl = SERVER_API_URL + 'api/schedule-commerces';

    constructor(protected http: HttpClient) {}

    create(scheduleCommerce: IScheduleCommerce): Observable<EntityResponseType> {
        return this.http.post<IScheduleCommerce>(this.resourceUrl, scheduleCommerce, { observe: 'response' });
    }

    update(scheduleCommerce: IScheduleCommerce): Observable<EntityResponseType> {
        return this.http.put<IScheduleCommerce>(this.resourceUrl, scheduleCommerce, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IScheduleCommerce>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IScheduleCommerce[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
