import { Component, ViewChildren, QueryList, Input } from '@angular/core';
import { SortableHeader } from './table-sort.directive';
import { compare, SortEvent, TableConfig } from './constants';
@Component({
    selector: 'custom-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {
    @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;
    @Input() config: TableConfig;

    onSort({ column, direction, sort }: SortEvent) {
        this.headers.forEach(header => {
            if (!sort || header.sortable !== column) {
                header.direction = '';
            }
        });
        if (sort && direction !== '') {
            this.config.data = [...this.config.data].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    }
}