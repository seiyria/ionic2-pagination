import { EventEmitter } from '@angular/core';
export declare class Pagination {
    page: number;
    pageSize: number;
    rowCount: number;
    pageCount: number;
}
export declare class PaginationComponent {
    pagination: Pagination;
    color: string;
    clickBeginning: EventEmitter<{}>;
    clickPrevious: EventEmitter<{}>;
    clickNext: EventEmitter<{}>;
    clickEnd: EventEmitter<{}>;
    readonly currentPageItemsMin: number;
    readonly currentPageItemsMax: number;
    readonly maxItems: number;
    constructor();
}
