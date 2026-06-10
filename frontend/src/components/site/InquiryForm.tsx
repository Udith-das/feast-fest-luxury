import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { api } from "@/lib/api";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(160),
  eventType: z.string().trim().min(2, "Select an event type").max(60),
  eventDate: z.string().trim().min(4, "Pick a tentative date").max(40),
  guests: z.string().trim().min(1, "Approx. number of guests").max(10),
  location: z.string().trim().min(2, "Where will it be hosted?").max(120),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

const eventTypes = [
  "Wedding",
  "Engagement / Sangeet",
  "Corporate Gala",
  "Birthday / Anniversary",
  "Private Dinner",
  "Cocktail Reception",
  "Other",
];

const empty = { name: "", phone: "", email: "", eventType: "", eventDate: "", guests: "", location: "", message: "" };

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [busy, setBusy] = useState(false);
  const [values, setValues] = useState(empty);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    setBusy(true);
    try {
      await api.post("/api/inquiries", parsed.data);
      toast.success("Thank you. Our concierge will reach out within 24 hours.");
      setValues(empty);
    } catch {
      toast.error("Something went wrong. Please WhatsApp or email us directly.");
    } finally {
      setBusy(false);
    }
  };

  const input =
    "w-full bg-transparent border-b border-[color:var(--border)] focus:border-gold outline-none px-0 py-3 text-sm placeholder:text-cocoa/40 transition-colors";

  return (
    <form onSubmit={onSubmit} className={`grid gap-6 ${compact ? "" : "md:gap-7"}`}>
      <div className="grid md:grid-cols-2 gap-6 md:gap-7">
        <label className="block">
          <span className="eyebrow !text-cocoa/60">Name</span>
          <input className={input} value={values.name} onChange={set("name")} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="eyebrow !text-cocoa/60">Phone</span>
          <input className={input} value={values.phone} onChange={set("phone")} placeholder="+91 ..." />
        </label>
        <label className="block">
          <span className="eyebrow !text-cocoa/60">Email</span>
          <input type="email" className={input} value={values.email} onChange={set("email")} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="eyebrow !text-cocoa/60">Event type</span>
          <select className={`${input} appearance-none`} value={values.eventType} onChange={set("eventType")}>
            <option value="">Select</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="eyebrow !text-cocoa/60">Event date</span>
          <input type="date" className={input} value={values.eventDate} onChange={set("eventDate")} />
        </label>
        <label className="block">
          <span className="eyebrow !text-cocoa/60">Guests</span>
          <input className={input} inputMode="numeric" value={values.guests} onChange={set("guests")} placeholder="e.g. 250" />
        </label>
        <label className="block md:col-span-2">
          <span className="eyebrow !text-cocoa/60">Location</span>
          <input className={input} value={values.location} onChange={set("location")} placeholder="City / venue" />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow !text-cocoa/60">Tell us about your vision</span>
        <textarea
          className={`${input} resize-none`}
          rows={4}
          value={values.message}
          onChange={set("message")}
          placeholder="Theme, cuisine preferences, special moments…"
        />
      </label>

      <button
        type="submit"
        disabled={busy}
        className="group mt-2 inline-flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 bg-noir text-ivory text-[11px] tracking-[0.3em] uppercase hover:bg-cocoa transition-colors disabled:opacity-60"
      >
        {busy ? "Sending…" : "Submit Inquiry"}
        <span className="w-8 h-px bg-gold transition-all group-hover:w-12" />
      </button>
    </form>
  );
}
