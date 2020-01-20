export type SortDirection = 'asc' | 'desc' | '';
export const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
    column: string;
    direction: SortDirection;
    sort: boolean
}


export interface FieldOptions {
    sort: string,
    classname: string,
}

export interface ConfigFields {
    [key: string]: FieldOptions
}

export interface DataObj {

}

export interface TableConfig {
    config: ConfigFields,
    data: DataObj[]
}