import dotenv from 'dotenv';

dotenv.config();

const required = ['JWT_SECRET'];
required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 4000),
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '2h',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  judge0BaseUrl: process.env.JUDGE0_BASE_URL || 'https://judge0-ce.p.rapidapi.com',
  judge0ApiKey: process.env.JUDGE0_API_KEY || '',
  judge0ApiHost: process.env.JUDGE0_API_HOST || 'judge0-ce.p.rapidapi.com',
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 60000),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX || 100)
};
