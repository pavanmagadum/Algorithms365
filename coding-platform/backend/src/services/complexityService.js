const SAFE_COMPLEXITIES = ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)'];

export const estimateComplexityTrend = (samples = []) => {
  if (!Array.isArray(samples) || samples.length < 3) {
    return { complexity: 'Insufficient data', confidence: 0 };
  }

  const normalized = samples
    .filter((s) => Number(s?.n) > 0 && Number(s?.timeMs) >= 0)
    .sort((a, b) => a.n - b.n);

  if (normalized.length < 3) {
    return { complexity: 'Insufficient data', confidence: 0 };
  }

  const slopes = [];
  for (let i = 1; i < normalized.length; i += 1) {
    const prev = normalized[i - 1];
    const curr = normalized[i];
    slopes.push((curr.timeMs - prev.timeMs) / (curr.n - prev.n));
  }

  const meanSlope = slopes.reduce((sum, value) => sum + value, 0) / slopes.length;
  const variance = slopes.reduce((sum, value) => sum + (value - meanSlope) ** 2, 0) / slopes.length;

  let complexity = 'O(n)';
  const maxRatio = normalized[normalized.length - 1].timeMs / Math.max(normalized[0].timeMs, 1);
  const sizeRatio = normalized[normalized.length - 1].n / normalized[0].n;

  if (maxRatio < 1.3) complexity = 'O(1)';
  else if (maxRatio < Math.log2(sizeRatio) * 1.8) complexity = 'O(log n)';
  else if (maxRatio < sizeRatio * 1.6) complexity = 'O(n)';
  else if (maxRatio < sizeRatio * Math.log2(sizeRatio) * 1.8) complexity = 'O(n log n)';
  else if (maxRatio < sizeRatio ** 2 * 1.2) complexity = 'O(n^2)';
  else complexity = 'O(2^n)';

  return {
    complexity: SAFE_COMPLEXITIES.includes(complexity) ? complexity : 'O(n)',
    confidence: Number((1 / (1 + variance)).toFixed(2))
  };
};
