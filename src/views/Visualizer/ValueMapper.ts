export default function ValueMapper(
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return (value: number) => {
    // return value;
    const val = low2 + ((value - low1) * (high2 - low2)) / (high1 - low1);

    return Math.round(val);
  };
}
