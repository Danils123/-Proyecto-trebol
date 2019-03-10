import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ICommerce } from 'app/shared/model/commerce.model';
import { CommerceService } from './commerce.service';
import { IInventory } from 'app/shared/model/inventory.model';
import { InventoryService } from 'app/entities/inventory';
import { IScheduleCommerce } from 'app/shared/model/schedule-commerce.model';
import { ScheduleCommerceService } from 'app/entities/schedule-commerce';

@Component({
    selector: 'jhi-commerce-update',
    templateUrl: './commerce-update.component.html'
})
export class CommerceUpdateComponent implements OnInit {
    commerce: ICommerce;
    isSaving: boolean;

    inventories: IInventory[];

    schedules: IScheduleCommerce[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected commerceService: CommerceService,
        protected inventoryService: InventoryService,
        protected scheduleCommerceService: ScheduleCommerceService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ commerce }) => {
            this.commerce = commerce;
        });
        this.inventoryService
            .query({ filter: 'commerce-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IInventory[]>) => mayBeOk.ok),
                map((response: HttpResponse<IInventory[]>) => response.body)
            )
            .subscribe(
                (res: IInventory[]) => {
                    if (!this.commerce.inventory || !this.commerce.inventory.id) {
                        this.inventories = res;
                    } else {
                        this.inventoryService
                            .find(this.commerce.inventory.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IInventory>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IInventory>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IInventory) => (this.inventories = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.scheduleCommerceService
            .query({ filter: 'commerce-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IScheduleCommerce[]>) => mayBeOk.ok),
                map((response: HttpResponse<IScheduleCommerce[]>) => response.body)
            )
            .subscribe(
                (res: IScheduleCommerce[]) => {
                    if (!this.commerce.schedule || !this.commerce.schedule.id) {
                        this.schedules = res;
                    } else {
                        this.scheduleCommerceService
                            .find(this.commerce.schedule.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IScheduleCommerce>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IScheduleCommerce>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IScheduleCommerce) => (this.schedules = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.commerce.id !== undefined) {
            this.subscribeToSaveResponse(this.commerceService.update(this.commerce));
        } else {
            this.subscribeToSaveResponse(this.commerceService.create(this.commerce));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICommerce>>) {
        result.subscribe((res: HttpResponse<ICommerce>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackInventoryById(index: number, item: IInventory) {
        return item.id;
    }

    trackScheduleCommerceById(index: number, item: IScheduleCommerce) {
        return item.id;
    }
}
