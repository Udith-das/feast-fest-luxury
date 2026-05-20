import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTAs() {
  const phone = "+919999999999";
  const wa = `https://wa.me/919999999999?text=${encodeURIComponent(
    "Hi Feast & Fest, I'd like to enquire about catering & event management."
  )}`;
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${phone}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-noir text-gold border border-gold/40 grid place-items-center shadow-lg hover:scale-105 transition-transform"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}