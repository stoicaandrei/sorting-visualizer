export type SortingState = {
  array: number[];
  points: {
    position: number;
    color?: string;
  }[];
};

export type SortingFunction = (
  array: number[]
) => IterableIterator<SortingState>;
