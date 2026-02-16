const users = [
  { id: '1', email: 'candidate@example.com', password: 'SecurePass123!', role: 'candidate' },
  { id: '2', email: 'admin@example.com', password: 'AdminPass123!', role: 'admin' }
];

export const findByEmail = (email) => users.find((user) => user.email === email);
