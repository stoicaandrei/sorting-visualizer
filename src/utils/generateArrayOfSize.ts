import { shuffleArray } from './index';

export default function generateArrayOfSize(size: number) {
  const array = Array.from({ length: size }, (x, i) => i);

  return shuffleArray(array);
}
