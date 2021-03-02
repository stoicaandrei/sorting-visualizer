export type SortingState = { array: number[]; [key: string]: unknown };

export type SortingFunction = (
  array: number[]
) => IterableIterator<SortingState>;

export type SortingPoints = { [key: number]: string };
