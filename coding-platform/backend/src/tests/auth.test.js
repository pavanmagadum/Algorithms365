import test from 'node:test';
import assert from 'node:assert/strict';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

test('JWT signing and verification works', () => {
  const token = jwt.sign({ id: '1', role: 'candidate' }, env.jwtSecret, { expiresIn: '1h' });
  const decoded = jwt.verify(token, env.jwtSecret);
  assert.equal(decoded.id, '1');
  assert.equal(decoded.role, 'candidate');
});
