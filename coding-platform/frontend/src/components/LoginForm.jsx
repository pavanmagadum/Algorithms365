import { useState } from 'react';

const LoginForm = ({ onLogin, loading }) => {
  const [email, setEmail] = useState('candidate@example.com');
  const [password, setPassword] = useState('SecurePass123!');

  const submit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className="login-card" onSubmit={submit}>
      <h2>Secure Login</h2>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button disabled={loading} type="submit">
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
};

export default LoginForm;
