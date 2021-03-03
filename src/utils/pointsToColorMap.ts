import { ColorMap } from 'types';

type Input = number[] | { [key: string]: number | number[] };
const defaultColor = 'orange';

const pointsToColorMap = (points: Input): ColorMap => {
  if (Array.isArray(points)) {
    return { [defaultColor]: points };
  }

  Object.keys(points).map((key) => {
    if (typeof points[key] === 'number') points[key] = [points[key] as number];
  });

  return points as ColorMap;
};

export default pointsToColorMap;
