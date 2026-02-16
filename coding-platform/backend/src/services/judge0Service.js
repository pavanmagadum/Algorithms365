import axios from 'axios';
import { env } from '../config/env.js';
import { ApiError } from '../utils/ApiError.js';

const languageMap = {
  c: 50,
  python: 71,
  java: 62
};

const judge0Client = axios.create({
  baseURL: env.judge0BaseUrl,
  timeout: 20000,
  headers: env.judge0ApiKey
    ? {
        'X-RapidAPI-Key': env.judge0ApiKey,
        'X-RapidAPI-Host': env.judge0ApiHost
      }
    : {}
});

export const runCodeWithJudge0 = async ({ sourceCode, stdin, language, cpuTimeLimit, memoryLimit, timeoutSeconds }) => {
  const language_id = languageMap[language];
  if (!language_id) {
    throw new ApiError(400, 'Unsupported language. Use c, python or java');
  }

  const payload = {
    source_code: sourceCode,
    stdin,
    language_id,
    cpu_time_limit: cpuTimeLimit,
    memory_limit: memoryLimit,
    wall_time_limit: timeoutSeconds
  };

  try {
    const { data } = await judge0Client.post('/submissions?base64_encoded=false&wait=true', payload);
    return data;
  } catch (error) {
    throw new ApiError(502, 'Code execution provider error', error.response?.data || error.message);
  }
};
