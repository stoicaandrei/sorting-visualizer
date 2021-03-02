type Interval = [number, number];

export default function ValueMapper(
  originalInterval: Interval,
  targetInterval: Interval
) {
  const [low1, high1] = originalInterval;
  const [low2, high2] = targetInterval;

  return (value: number) => {
    const val = low2 + ((value - low1) * (high2 - low2)) / (high1 - low1);

    return Math.round(val);
  };
}
