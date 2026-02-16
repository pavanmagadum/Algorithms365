# Online Coding Test Platform (VS Code Style)

Production-ready starter for a scalable coding assessment platform using React + Monaco + Node/Express and Judge0 secure code execution.

## Project Structure

```text
coding-platform/
├── backend/
│   ├── src/
│   │   ├── config/            # env + logger
│   │   ├── controllers/       # MVC controllers
│   │   ├── middlewares/       # auth, errors, rate limit, logging
│   │   ├── models/            # user data abstraction
│   │   ├── routes/            # REST routes
│   │   ├── services/          # judge0 + complexity + execution logic
│   │   ├── tests/             # node:test unit examples
│   │   └── utils/             # ApiError, async handler
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── api/               # API client layer
│   │   ├── components/        # Timer, panels, login
│   │   ├── hooks/             # exam guard events
│   │   ├── styles/            # VS Code-like theme
│   │   └── App.jsx            # IDE shell
│   └── Dockerfile
├── docs/
│   └── deployment-guide.md
├── docker-compose.yml
└── .env.example
```

## Feature Coverage
- Monaco editor with dark VS Code theme.
- Supports **C, Python, Java**.
- Input, output, error, compile-error and execution stats panels.
- Exam timer + fullscreen support.
- Copy/paste/cut/right-click blocking + tab switch detection.
- JWT auth and protected run endpoint.
- Helmet, CORS, rate limiting and centralized logging.
- Judge0 secure execution with CPU/memory/timeout controls.
- Execution time and complexity trend estimation.
- Dockerized frontend/backend with compose.

## Local Setup

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Default credentials:
- `candidate@example.com / SecurePass123!`


## Quick Start (From Repository Root)
```bash
cd /workspace/Algorithms365/coding-platform
cp backend/.env.example backend/.env
# set JWT_SECRET and JUDGE0_API_KEY in backend/.env
./scripts-run-local.sh
```
Then open `http://localhost:5173`.

If you prefer two terminals:
```bash
# terminal 1
cd /workspace/Algorithms365/coding-platform/backend
cp .env.example .env
npm install
npm run dev
```
```bash
# terminal 2
cd /workspace/Algorithms365/coding-platform/frontend
npm install
npm run dev
```

## Docker Setup
```bash
cd coding-platform
cp .env.example backend/.env
docker compose up --build
```


## Troubleshooting
- **`npm ERR! 403` during install**: your network or npm mirror is blocking package downloads. Switch to a network with npm registry access, or configure npm to use `https://registry.npmjs.org/`.
- **Frontend can’t call backend**: verify `VITE_API_BASE_URL` points to `http://localhost:4000/api/v1`.
- **Run endpoint returns provider error**: set `JUDGE0_API_KEY` and `JUDGE0_API_HOST` in `backend/.env`.
- **CORS error**: set `CORS_ORIGIN=http://localhost:5173` in `backend/.env`.

## REST API
- `POST /api/v1/auth/login`
- `POST /api/v1/submissions/run` (Bearer token required)
- `GET /api/v1/health`

### Run Payload Example
```json
{
  "sourceCode": "print(input())",
  "stdin": "hello",
  "language": "python",
  "cpuTimeLimit": 2,
  "memoryLimit": 128000,
  "timeoutSeconds": 5,
  "benchmarkSamples": [
    { "n": 100, "timeMs": 3 },
    { "n": 500, "timeMs": 11 },
    { "n": 1000, "timeMs": 22 }
  ]
}
```

## Security Hardening Checklist
- [ ] Replace in-memory users with DB + hashed passwords (bcrypt/argon2).
- [ ] Use HTTPS everywhere, HSTS and secure cookies if sessions are used.
- [ ] Configure strict CORS whitelist.
- [ ] Add WAF and IP reputation checks.
- [ ] Add audit logging and SIEM forwarding.
- [ ] Add captcha/step-up auth for repeated login failures.
- [ ] Rotate JWT secret and Judge0 key via secret manager.
- [ ] Add SAST/DAST and dependency scanning in CI.
- [ ] Add server-side exam violation policy enforcement.

## Notes on Scalability
- Stateless backend allows horizontal scaling behind load balancer.
- Judge0 offloads execution sandbox from API nodes.
- Add queue (BullMQ/SQS) for very high submission volume.
- Add Redis for token revocation lists and short-lived cache.

For deployment details, see `docs/deployment-guide.md`.
