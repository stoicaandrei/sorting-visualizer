export type ColorMap = { [key: string]: number[] };

export type SortingFunction = (array: number[]) => IterableIterator<ColorMap>;

export type SortingPoints = { [key: number]: string };
