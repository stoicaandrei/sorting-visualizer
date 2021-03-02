export type SortingState = { [key: string]: number };

export type SortingFunction = (
  array: number[]
) => IterableIterator<SortingState>;

export type SortingPoints = { [key: number]: string };
