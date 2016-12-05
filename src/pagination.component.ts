
import { Component, Input, Output, EventEmitter } from '@angular/core';

export class Pagination {
  page: number;
  pageSize: number;
  rowCount: number;
  pageCount: number;
}

@Component({
  selector: 'ionc-pagination',
  template: `
  <ion-grid>
    <ion-row>
      <ion-col text-left width-10>
        <button ion-button (click)="clickBeginning.next()" icon-only [color]="color" [disabled]="pagination.page === 1">
          <ion-icon name="rewind"></ion-icon>
        </button>
      </ion-col>
      <ion-col text-left width-10>
        <button ion-button (click)="clickPrevious.next()" icon-only [color]="color" [disabled]="pagination.page === 1">
          <ion-icon name="arrow-dropleft"></ion-icon>
        </button>
      </ion-col>
      <ion-col pagination-center-text>{{ currentPageItemsMin }}-{{ currentPageItemsMax }} of {{ maxItems }}</ion-col>
      <ion-col text-right width-10>
        <button ion-button (click)="clickNext.next()" icon-only [color]="color" [disabled]="pagination.page === pagination.pageCount">
          <ion-icon name="arrow-dropright"></ion-icon>
        </button>
      </ion-col>
      <ion-col text-right width-10>
        <button ion-button (click)="clickEnd.next()" icon-only [color]="color" [disabled]="pagination.page === pagination.pageCount">
          <ion-icon name="fastforward"></ion-icon>
        </button>
      </ion-col>
    </ion-row>
  </ion-grid>
`,
  styles: [`
    [pagination-center-text] {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class PaginationComponent {
  @Input() pagination: Pagination;
  @Input() color: string;
  @Output() clickBeginning = new EventEmitter();
  @Output() clickPrevious = new EventEmitter();
  @Output() clickNext = new EventEmitter();
  @Output() clickEnd = new EventEmitter();

  get currentPageItemsMin() {
    return Math.max(1, (this.pagination.page - 1) * this.pagination.pageSize);
  }

  get currentPageItemsMax() {
    return Math.min((this.pagination.page) * this.pagination.pageSize, this.maxItems);
  }

  get maxItems() {
    return this.pagination.rowCount;
  }

  constructor() {}

}
