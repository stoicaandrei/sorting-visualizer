import { ColorMap, SortingPoints } from 'types';

const colorMapToSortingPoints = (colorMap: ColorMap): SortingPoints => {
  const result = {} as SortingPoints;

  Object.entries(colorMap).forEach((entry) => {
    const [key, point] = entry;

    result[point] = 'red';
  });

  return result;
};

export default colorMapToSortingPoints;
