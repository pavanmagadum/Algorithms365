# Deployment Guide

## Option A: AWS EC2 (Docker)
1. Launch Ubuntu EC2 instance and allow inbound ports 22, 80, 443, 4000.
2. Install Docker and Docker Compose.
3. Clone repository and copy `coding-platform/.env.example` to `coding-platform/backend/.env`.
4. Set strong `JWT_SECRET` and Judge0 key values.
5. Run `docker compose up --build -d` from `coding-platform/`.
6. Optional: put Nginx/ALB in front with TLS cert (Let's Encrypt or ACM).

## Option B: Render
1. Create a **Web Service** for backend (Docker runtime, context `coding-platform/backend`).
2. Add environment variables from `.env.example`.
3. Create a **Static Site** for frontend and set `VITE_API_BASE_URL` to backend URL + `/api/v1`.
4. Configure custom domain and force HTTPS.

## Production Hardening
- Set `NODE_ENV=production`.
- Restrict `CORS_ORIGIN` to exact UI URL.
- Rotate JWT secret and API keys regularly.
- Enable centralized logs and alarms.
- Run container image scans in CI pipeline.
