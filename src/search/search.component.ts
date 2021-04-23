import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class searchComponent {
    @Output() searchEvent = new EventEmitter<string>();
    @Output() clearEvent = new EventEmitter<string>();
    searchText: string = "";
    constructor() { }

    applyFilter() {
        this.searchEvent.emit(this.searchText);
    }

    clear() {
        this.searchText = '';
        this.clearEvent.emit(this.searchText);

    }

}