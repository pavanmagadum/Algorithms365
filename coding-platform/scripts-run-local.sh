#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"

if [[ ! -f "$BACKEND_DIR/.env" ]]; then
  cp "$BACKEND_DIR/.env.example" "$BACKEND_DIR/.env"
  echo "[info] Created backend/.env from backend/.env.example"
fi

echo "[info] Installing backend dependencies..."
(cd "$BACKEND_DIR" && npm install)

echo "[info] Installing frontend dependencies..."
(cd "$FRONTEND_DIR" && npm install)

echo "[info] Starting backend on :4000 and frontend on :5173"

echo "[hint] Default login: candidate@example.com / SecurePass123!"

(cd "$BACKEND_DIR" && npm run dev) &
BACK_PID=$!

cleanup() {
  echo "[info] Stopping backend process..."
  kill "$BACK_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT

(cd "$FRONTEND_DIR" && npm run dev)
