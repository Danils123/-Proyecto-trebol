import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrebolSharedModule } from 'app/shared';
import {
    InventoryComponent,
    InventoryDetailComponent,
    InventoryUpdateComponent,
    InventoryDeletePopupComponent,
    InventoryDeleteDialogComponent,
    inventoryRoute,
    inventoryPopupRoute
} from './';

const ENTITY_STATES = [...inventoryRoute, ...inventoryPopupRoute];

@NgModule({
    imports: [TrebolSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        InventoryComponent,
        InventoryDetailComponent,
        InventoryUpdateComponent,
        InventoryDeleteDialogComponent,
        InventoryDeletePopupComponent
    ],
    entryComponents: [InventoryComponent, InventoryUpdateComponent, InventoryDeleteDialogComponent, InventoryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrebolInventoryModule {}
