var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var Pagination = (function () {
    function Pagination() {
    }
    return Pagination;
}());
export var PaginationComponent = (function () {
    function PaginationComponent() {
        this.clickBeginning = new EventEmitter();
        this.clickPrevious = new EventEmitter();
        this.clickNext = new EventEmitter();
        this.clickEnd = new EventEmitter();
    }
    Object.defineProperty(PaginationComponent.prototype, "currentPageItemsMin", {
        get: function () {
            return Math.max(1, (this.pagination.page - 1) * this.pagination.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "currentPageItemsMax", {
        get: function () {
            return Math.min((this.pagination.page) * this.pagination.pageSize, this.maxItems);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "maxItems", {
        get: function () {
            return this.pagination.rowCount;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', Pagination)
    ], PaginationComponent.prototype, "pagination", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PaginationComponent.prototype, "color", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "clickBeginning", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "clickPrevious", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "clickNext", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "clickEnd", void 0);
    PaginationComponent = __decorate([
        Component({
            selector: 'ionc-pagination',
            template: "\n  <ion-grid>\n    <ion-row>\n      <ion-col text-left width-10>\n        <button ion-button (click)=\"clickBeginning.next()\" icon-only [color]=\"color\" [disabled]=\"pagination.page === 1\">\n          <ion-icon name=\"rewind\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col text-left width-10>\n        <button ion-button (click)=\"clickPrevious.next()\" icon-only [color]=\"color\" [disabled]=\"pagination.page === 1\">\n          <ion-icon name=\"arrow-dropleft\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col pagination-center-text>{{ currentPageItemsMin }}-{{ currentPageItemsMax }} of {{ maxItems }}</ion-col>\n      <ion-col text-right width-10>\n        <button ion-button (click)=\"clickNext.next()\" icon-only [color]=\"color\" [disabled]=\"pagination.page === pagination.pageCount\">\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col text-right width-10>\n        <button ion-button (click)=\"clickEnd.next()\" icon-only [color]=\"color\" [disabled]=\"pagination.page === pagination.pageCount\">\n          <ion-icon name=\"fastforward\"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n",
            styles: ["\n    [pagination-center-text] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
//# sourceMappingURL=pagination.component.js.map