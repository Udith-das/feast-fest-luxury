import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogOut, Mail, Phone, MapPin, Calendar, Users, RefreshCw } from "lucide-react";
import { api } from "@/lib/api";

type Inquiry = {
  id: string; created_at: string; name: string; phone: string; email: string;
  event_type: string; event_date: string; guests: string; location: string;
  message: string; status: "new" | "read" | "replied";
};
type Filter = "all" | "new" | "read" | "replied";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get("/api/inquiries");
      setInquiries(data ?? []);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to load inquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const markStatus = async (id: string, status: Inquiry["status"]) => {
    try {
      await api.patch(`/api/inquiries/${id}`, { status });
      setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
      if (selected?.id === id) setSelected((s) => s ? { ...s, status } : s);
    } catch { /* silent */ }
  };

  const signOut = () => {
    localStorage.removeItem("ff_admin_token");
    navigate("/admin/login");
  };

  const visible = filter === "all" ? inquiries : inquiries.filter((i) => i.status === filter);
  const counts = {
    all: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    read: inquiries.filter((i) => i.status === "read").length,
    replied: inquiries.filter((i) => i.status === "replied").length,
  };

  const statusColor: Record<Inquiry["status"], string> = {
    new: "bg-gold/20 text-gold",
    read: "bg-ivory/20 text-ivory/60",
    replied: "bg-green-900/30 text-green-400",
  };

  return (
    <div className="min-h-screen bg-noir text-ivory flex flex-col">
      {/* Header */}
      <header className="border-b border-ivory/10 px-6 lg:px-10 py-5 flex items-center justify-between">
        <div>
          <p className="font-display text-xl text-ivory">Feast<span className="text-gold"> &amp; </span>Fest</p>
          <p className="text-xs tracking-[0.25em] uppercase text-ivory/40 mt-0.5">Admin Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={load} className="w-9 h-9 grid place-items-center border border-ivory/10 hover:border-gold transition-colors">
            <RefreshCw size={15} className={loading ? "animate-spin text-gold" : "text-ivory/60"} />
          </button>
          <button onClick={signOut} className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ivory/40 hover:text-gold transition-colors">
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar / list */}
        <div className="w-full lg:w-96 border-r border-ivory/10 flex flex-col">
          {/* Stats + filters */}
          <div className="p-5 border-b border-ivory/10">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {(["all", "new", "read", "replied"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`py-2 text-center rounded text-xs uppercase tracking-widest transition-colors ${
                    filter === f ? "bg-gold text-noir font-medium" : "bg-ivory/5 text-ivory/50 hover:bg-ivory/10"
                  }`}
                >
                  <span className="block font-display text-lg">{counts[f]}</span>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto divide-y divide-ivory/5">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <span className="w-7 h-7 rounded-full border-2 border-gold border-t-transparent animate-spin" />
              </div>
            ) : visible.length === 0 ? (
              <p className="text-center text-ivory/30 text-sm py-16">No inquiries</p>
            ) : (
              visible.map((inq) => (
                <button
                  key={inq.id}
                  onClick={() => setSelected(inq)}
                  className={`w-full text-left px-5 py-4 hover:bg-ivory/5 transition-colors ${selected?.id === inq.id ? "bg-ivory/10" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-sm text-ivory truncate">{inq.name}</p>
                    <span className={`flex-none text-[10px] px-2 py-0.5 rounded-full ${statusColor[inq.status]}`}>{inq.status}</span>
                  </div>
                  <p className="text-xs text-ivory/50 mt-1 truncate">{inq.event_type} · {inq.guests} guests</p>
                  <p className="text-xs text-ivory/30 mt-0.5">{new Date(inq.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Detail panel */}
        <div className="hidden lg:flex flex-1 flex-col overflow-y-auto">
          {selected ? (
            <div className="p-10 max-w-2xl">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="font-display text-3xl">{selected.name}</h2>
                  <p className="text-ivory/50 text-sm mt-1">{new Date(selected.created_at).toLocaleString("en-IN")}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${statusColor[selected.status]}`}>{selected.status}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-ivory/5 p-4">
                  <p className="eyebrow !text-ivory/40 mb-1">Event Type</p>
                  <p className="text-sm">{selected.event_type}</p>
                </div>
                <div className="bg-ivory/5 p-4">
                  <p className="eyebrow !text-ivory/40 mb-1">Guests</p>
                  <p className="text-sm flex items-center gap-2"><Users size={14} className="text-gold" />{selected.guests}</p>
                </div>
                <div className="bg-ivory/5 p-4">
                  <p className="eyebrow !text-ivory/40 mb-1">Date</p>
                  <p className="text-sm flex items-center gap-2"><Calendar size={14} className="text-gold" />{selected.event_date}</p>
                </div>
                <div className="bg-ivory/5 p-4">
                  <p className="eyebrow !text-ivory/40 mb-1">Location</p>
                  <p className="text-sm flex items-center gap-2"><MapPin size={14} className="text-gold" />{selected.location}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <a href={`tel:${selected.phone}`} className="flex items-center gap-3 text-sm text-ivory/70 hover:text-gold transition-colors">
                  <Phone size={15} className="text-gold" /> {selected.phone}
                </a>
                <a href={`mailto:${selected.email}`} className="flex items-center gap-3 text-sm text-ivory/70 hover:text-gold transition-colors">
                  <Mail size={15} className="text-gold" /> {selected.email}
                </a>
              </div>

              {selected.message && (
                <div className="bg-ivory/5 p-6 mb-8">
                  <p className="eyebrow !text-ivory/40 mb-3">Message</p>
                  <p className="text-sm text-ivory/70 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>
              )}

              <div className="flex gap-3">
                {(["new", "read", "replied"] as Array<Inquiry["status"]>).map((s) => (
                  <button
                    key={s}
                    onClick={() => markStatus(selected.id, s)}
                    disabled={selected.status === s}
                    className={`px-4 py-2 text-[11px] tracking-[0.25em] uppercase border transition-colors disabled:opacity-40 ${
                      selected.status === s ? "border-gold text-gold" : "border-ivory/20 text-ivory/50 hover:border-gold hover:text-gold"
                    }`}
                  >
                    Mark {s}
                  </button>
                ))}
                <a
                  href={`mailto:${selected.email}?subject=Re: Your Inquiry — ${selected.event_type}`}
                  className="ml-auto px-5 py-2 bg-gold text-noir text-[11px] tracking-[0.25em] uppercase hover:bg-ivory transition-colors"
                >
                  Reply by Email
                </a>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-ivory/20 text-sm">
              Select an inquiry to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
