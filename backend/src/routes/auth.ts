import { Router } from "express";
import { supabase } from "../lib/supabase.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required." });
    return;
  }
  if (!supabase) {
    res.status(503).json({ error: "Auth service unavailable — configure Supabase env vars." });
    return;
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.session) {
    res.status(401).json({ error: error?.message ?? "Invalid credentials." });
    return;
  }
  res.json({ token: data.session.access_token });
});

export default router;
