import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IScheduleCommerce } from 'app/shared/model/schedule-commerce.model';
import { ScheduleCommerceService } from './schedule-commerce.service';

@Component({
    selector: 'jhi-schedule-commerce-update',
    templateUrl: './schedule-commerce-update.component.html'
})
export class ScheduleCommerceUpdateComponent implements OnInit {
    scheduleCommerce: IScheduleCommerce;
    isSaving: boolean;

    constructor(protected scheduleCommerceService: ScheduleCommerceService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ scheduleCommerce }) => {
            this.scheduleCommerce = scheduleCommerce;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.scheduleCommerce.id !== undefined) {
            this.subscribeToSaveResponse(this.scheduleCommerceService.update(this.scheduleCommerce));
        } else {
            this.subscribeToSaveResponse(this.scheduleCommerceService.create(this.scheduleCommerce));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IScheduleCommerce>>) {
        result.subscribe((res: HttpResponse<IScheduleCommerce>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
