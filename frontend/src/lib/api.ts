const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

function token() {
  return localStorage.getItem("ff_admin_token");
}

function authHeaders() {
  const t = token();
  return t ? { Authorization: `Bearer ${t}` } : {};
}

async function handle(res: Response) {
  if (!res.ok) {
    const msg = await res.text().catch(() => "Request failed");
    throw new Error(msg);
  }
  return res.json();
}

export const api = {
  post: (path: string, body: unknown) =>
    fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(handle),

  get: (path: string) =>
    fetch(`${BASE}${path}`, { headers: authHeaders() }).then(handle),

  patch: (path: string, body: unknown) =>
    fetch(`${BASE}${path}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(body),
    }).then(handle),
};
