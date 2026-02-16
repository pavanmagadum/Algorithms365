import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateComplexityTrend } from '../services/complexityService.js';

test('estimateComplexityTrend identifies near linear growth', () => {
  const result = estimateComplexityTrend([
    { n: 100, timeMs: 5 },
    { n: 500, timeMs: 23 },
    { n: 1000, timeMs: 50 },
    { n: 2000, timeMs: 100 }
  ]);

  assert.equal(result.complexity, 'O(n)');
  assert.ok(result.confidence > 0.2);
});
