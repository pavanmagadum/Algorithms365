import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import submissionRoutes from './routes/submissionRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import { env } from './config/env.js';
import { apiRateLimiter } from './middlewares/rateLimitMiddleware.js';
import { errorMiddleware, notFoundMiddleware } from './middlewares/errorMiddleware.js';
import { loggingMiddleware } from './middlewares/loggingMiddleware.js';

export const app = express();

app.use(loggingMiddleware);
app.use(helmet());
app.use(
  cors({
    origin: env.corsOrigin,
    credentials: true
  })
);
app.use(morgan('combined'));
app.use(express.json({ limit: '1mb' }));
app.use(apiRateLimiter);

app.use('/api/v1/health', healthRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/submissions', submissionRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
