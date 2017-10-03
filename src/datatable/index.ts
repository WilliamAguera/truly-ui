import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TlDatatable } from './datatable';
import { TlDatatableColumn } from './parts/datatable-column';
import { TlDatatableNormalMode } from './modes/normal/datatable-normal-mode';
import { TlDatatableScrollableMode } from './modes/scrollable/datatable-scrollable-mode';
import { TlDatatablePaginatorMode } from './modes/paginator/datatable-paginator-mode';
import { LoadingModule } from '../loading/index';

export * from './datatable';
export * from './parts/datatable-column';
export * from './services/datatable-datasource.service';
export * from './services/datatable-filter.service';
export * from './configs/datatable-filter-options';
export * from './modes/normal/datatable-normal-mode';
export * from './modes/paginator/datatable-paginator-mode';
export * from './modes/scrollable/datatable-scrollable-mode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule
    ],
    declarations: [
        TlDatatable,
        TlDatatableColumn,
        TlDatatableNormalMode,
        TlDatatablePaginatorMode,
        TlDatatableScrollableMode,
    ],
    exports: [
        TlDatatable,
        TlDatatableColumn,
        TlDatatableNormalMode,
        TlDatatablePaginatorMode,
        TlDatatableScrollableMode,
    ]
})
export class DatatableModule {}
