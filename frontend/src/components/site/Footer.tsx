import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-noir text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="/images/Feast%20%26%20Fest%20Logo.png"
            alt="Feast & Fest"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-ivory/60">
            Premium catering and full-service event management for weddings,
            corporate galas and private celebrations. Crafted with intention.
            Served with grace.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 grid place-items-center border border-ivory/15 hover:border-gold hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 grid place-items-center border border-ivory/15 hover:border-gold hover:text-gold transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/menu", "Menu"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5" /> <a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a></li>
            <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5" /> <a href="mailto:hello@feastandfest.com" className="hover:text-gold">hello@feastandfest.com</a></li>
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5" /> Studio 12, Heritage House,<br/>Hospitality District</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Feast &amp; Fest. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Curated Hospitality · Est. 2014</p>
        </div>
      </div>
    </footer>
  );
}
