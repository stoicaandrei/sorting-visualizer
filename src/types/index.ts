export type ColorMap = { [key: string]: number };

export type ColorMapGenerator = IterableIterator<ColorMap>;

export type SortingFunction = (array: number[]) => ColorMapGenerator;

export type SortingPoints = { [key: number]: string };
