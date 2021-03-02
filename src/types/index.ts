export type SortingState = number[];

export type SortingFunction = (
  array: number[]
) => IterableIterator<SortingState>;

export type SortingPoints = { [key: number]: string };
