import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { SortDirection, SortEvent, rotate } from './constants';

@Directive({
    selector: 'th[sortable]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()'
    }
})

export class SortableHeader {
    @Input() sortable: string;
    @Input() direction: SortDirection = '';
    @Input() isSortable: boolean;
    @Output() sort = new EventEmitter<SortEvent>();
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction, sort: this.isSortable });
    }
}