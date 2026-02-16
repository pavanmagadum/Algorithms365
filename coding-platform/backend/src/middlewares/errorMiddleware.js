import { ApiError } from '../utils/ApiError.js';

export const notFoundMiddleware = (req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
};

export const errorMiddleware = (err, req, res, _next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message, details: err.details });
  }

  req.log?.error({ err }, 'Unhandled error');
  return res.status(500).json({ message: 'Internal server error' });
};
