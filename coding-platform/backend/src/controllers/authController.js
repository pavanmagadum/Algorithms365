import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { findByEmail } from '../models/userStore.js';
import { ApiError } from '../utils/ApiError.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = findByEmail(email);

  if (!user || user.password !== password) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn
  });

  res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
};
