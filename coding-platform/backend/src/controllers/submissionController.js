import { runSubmission } from '../services/executionService.js';
import { estimateComplexityTrend } from '../services/complexityService.js';

export const runCode = async (req, res) => {
  const { sourceCode, stdin = '', language = 'python', cpuTimeLimit, memoryLimit, timeoutSeconds, benchmarkSamples = [] } = req.body;

  const executionResult = await runSubmission({
    sourceCode,
    stdin,
    language,
    cpuTimeLimit,
    memoryLimit,
    timeoutSeconds
  });

  const complexity = estimateComplexityTrend(benchmarkSamples);

  res.json({
    ...executionResult,
    complexityTrend: complexity,
    executor: 'Judge0'
  });
};
