import { ColorMap, SortingPoints } from 'types';

const colorMapToSortingPoints = (colorMap: ColorMap): SortingPoints => {
  const result: SortingPoints = {};

  Object.entries(colorMap).forEach((entry) => {
    const [color, points] = entry;

    points.forEach((point) => (result[point] = color));
  });

  return result;
};

export default colorMapToSortingPoints;
