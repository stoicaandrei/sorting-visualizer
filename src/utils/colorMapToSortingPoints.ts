import { ColorMap, SortingPoints } from 'types';

const colorMapToSortingPoints = (colorMap: ColorMap): SortingPoints => {
  const result = {} as SortingPoints;

  Object.values(colorMap).forEach((point) => {
    result[point] = 'red';
  });

  return result;
};

export default colorMapToSortingPoints;
