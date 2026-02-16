import { performance } from 'node:perf_hooks';
import { ApiError } from '../utils/ApiError.js';
import { runCodeWithJudge0 } from './judge0Service.js';

const DANGEROUS_PATTERNS = [
  /\b(system|exec|fork|popen)\b/i,
  /\bimport\s+os\b/i,
  /\bRuntime\.getRuntime\(\)/i,
  /#include\s*<unistd\.h>/i
];

export const runSubmission = async ({ sourceCode, stdin, language, cpuTimeLimit = 2, memoryLimit = 128000, timeoutSeconds = 5 }) => {
  if (!sourceCode?.trim()) {
    throw new ApiError(400, 'sourceCode is required');
  }

  if (DANGEROUS_PATTERNS.some((pattern) => pattern.test(sourceCode))) {
    throw new ApiError(400, 'Potentially dangerous code pattern detected');
  }

  const start = performance.now();
  const result = await runCodeWithJudge0({
    sourceCode,
    stdin,
    language,
    cpuTimeLimit,
    memoryLimit,
    timeoutSeconds
  });
  const end = performance.now();

  return {
    stdout: result.stdout,
    stderr: result.stderr,
    compileOutput: result.compile_output,
    status: result.status?.description || 'Unknown',
    executionTimeMs: Number((end - start).toFixed(2)),
    memoryKb: result.memory || 0,
    token: result.token
  };
};
