import { useMemo, useState } from 'react';
import Editor from '@monaco-editor/react';
import { login, runCode } from './api/client';
import Timer from './components/Timer';
import Panel from './components/Panel';
import LoginForm from './components/LoginForm';
import { useExamGuard } from './hooks/useExamGuard';

const templates = {
  python: 'n = int(input())\nprint(n * 2)',
  c: '#include <stdio.h>\nint main() { int n; scanf("%d", &n); printf("%d", n * 2); return 0; }',
  java: 'import java.util.*;\npublic class Main { public static void main(String[] args){ Scanner sc = new Scanner(System.in); int n = sc.nextInt(); System.out.println(n * 2); }}'
};

const App = () => {
  const [token, setToken] = useState('');
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(templates.python);
  const [stdin, setStdin] = useState('5');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [compileError, setCompileError] = useState('');
  const [stats, setStats] = useState('');
  const [loading, setLoading] = useState(false);
  const { tabSwitchCount } = useExamGuard();

  const monacoLanguage = useMemo(() => {
    if (language === 'python') return 'python';
    if (language === 'java') return 'java';
    return 'c';
  }, [language]);

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await login(email, password);
      setToken(response.token);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRun = async () => {
    if (!token) {
      setError('Please login first');
      return;
    }

    try {
      setLoading(true);
      const benchmarkSamples = [
        { n: 100, timeMs: 3 },
        { n: 500, timeMs: 14 },
        { n: 1000, timeMs: 31 }
      ];

      const result = await runCode(token, {
        sourceCode: code,
        stdin,
        language,
        cpuTimeLimit: 2,
        memoryLimit: 128000,
        timeoutSeconds: 5,
        benchmarkSamples
      });

      setOutput(result.stdout || '');
      setError(result.stderr || '');
      setCompileError(result.compileOutput || '');
      setStats(
        `Status: ${result.status}\nExecution Time: ${result.executionTimeMs} ms\nMemory: ${result.memoryKb} KB\nComplexity: ${result.complexityTrend?.complexity} (${result.complexityTrend?.confidence})`
      );
    } catch (err) {
      setError(err.response?.data?.message || 'Execution failed');
    } finally {
      setLoading(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (!token) {
    return (
      <main className="auth-page">
        <LoginForm onLogin={handleLogin} loading={loading} />
        <Panel title="Authentication errors">{error}</Panel>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <header className="toolbar">
        <h1>Online Coding Test IDE</h1>
        <div className="toolbar-controls">
          <select
            value={language}
            onChange={(e) => {
              const next = e.target.value;
              setLanguage(next);
              setCode(templates[next]);
            }}
          >
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="java">Java</option>
          </select>
          <Timer initialSeconds={3600} onExpire={() => setError('Exam time expired')} />
          <span className="warning">Tab switches: {tabSwitchCount}</span>
          <button onClick={toggleFullscreen} type="button">Fullscreen</button>
          <button onClick={handleRun} disabled={loading} type="button">
            {loading ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </header>

      <section className="workspace">
        <div className="editor-wrapper">
          <Editor
            height="100%"
            theme="vs-dark"
            language={monacoLanguage}
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
          />
        </div>
        <aside className="panels-wrapper">
          <section className="panel input-panel">
            <header>Input</header>
            <textarea value={stdin} onChange={(e) => setStdin(e.target.value)} rows={5} />
          </section>
          <Panel title="Output">{output}</Panel>
          <Panel title="Error">{error}</Panel>
          <Panel title="Compiler/Error Details">{compileError}</Panel>
          <Panel title="Execution Stats">{stats}</Panel>
        </aside>
      </section>
    </main>
  );
};

export default App;
