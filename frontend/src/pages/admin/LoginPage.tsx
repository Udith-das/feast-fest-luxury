import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { api } from "@/lib/api";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const { token } = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("ff_admin_token", token);
      navigate("/admin");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Invalid credentials.");
    } finally {
      setBusy(false);
    }
  };

  const input = "w-full bg-noir/5 border border-[color:var(--border)] px-4 py-3 text-sm placeholder:text-cocoa/40 focus:outline-none focus:border-gold transition-colors";

  return (
    <div className="min-h-screen bg-noir flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img
            src="/images/Feast%20%26%20Fest%20Logo.png"
            alt="Feast & Fest"
            className="h-14 w-auto mx-auto brightness-0 invert"
          />
          <p className="mt-3 text-xs tracking-[0.3em] uppercase text-ivory/40">Admin</p>
        </div>

        <form onSubmit={onSubmit} className="bg-ivory p-8 md:p-10">
          <h1 className="font-display text-2xl mb-8">Sign in</h1>

          <div className="space-y-5">
            <label className="block">
              <span className="eyebrow !text-cocoa/60">Email</span>
              <input
                type="email"
                className={`${input} mt-2`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@feastandfest.com"
                required
              />
            </label>
            <label className="block">
              <span className="eyebrow !text-cocoa/60">Password</span>
              <input
                type="password"
                className={`${input} mt-2`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="mt-8 w-full py-4 bg-noir text-ivory text-[11px] tracking-[0.3em] uppercase hover:bg-cocoa transition-colors disabled:opacity-60"
          >
            {busy ? "Signing in…" : "Sign In"}
          </button>

        </form>
      </div>
    </div>
  );
}
