import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'category',
                loadChildren: './category/category.module#TrebolCategoryModule'
            },
            {
                path: 'sub-category',
                loadChildren: './sub-category/sub-category.module#TrebolSubCategoryModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#TrebolProductModule'
            },
            {
                path: 'inventory',
                loadChildren: './inventory/inventory.module#TrebolInventoryModule'
            },
            {
                path: 'commerce',
                loadChildren: './commerce/commerce.module#TrebolCommerceModule'
            },
            {
                path: 'schedule-commerce',
                loadChildren: './schedule-commerce/schedule-commerce.module#TrebolScheduleCommerceModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrebolEntityModule {}
