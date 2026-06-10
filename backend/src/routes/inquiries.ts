import { Router } from "express";
import { supabase } from "../lib/supabase.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/", async (req, res) => {
  const { name, phone, email, eventType, eventDate, guests, location, message } = req.body ?? {};
  if (!name || !phone || !email || !eventType) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }
  if (!supabase) {
    res.status(503).json({ error: "Database unavailable — configure Supabase env vars." });
    return;
  }
  const { error } = await supabase.from("inquiries").insert({
    name,
    phone,
    email,
    event_type: eventType,
    event_date: eventDate,
    guests,
    location,
    message: message ?? "",
    status: "new",
  });
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.status(201).json({ success: true });
});

router.get("/", requireAuth, async (_req, res) => {
  if (!supabase) {
    res.status(503).json({ error: "Database unavailable." });
    return;
  }
  const { data, error } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.json(data);
});

router.patch("/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body ?? {};
  if (!["new", "read", "replied"].includes(status)) {
    res.status(400).json({ error: "Invalid status." });
    return;
  }
  if (!supabase) {
    res.status(503).json({ error: "Database unavailable." });
    return;
  }
  const { error } = await supabase.from("inquiries").update({ status }).eq("id", id);
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.json({ success: true });
});

export default router;
