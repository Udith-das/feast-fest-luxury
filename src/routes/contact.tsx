import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Let's compose your celebration." subtitle="Share a few details and our concierge will craft a tailored proposal within 24 hours." />
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="bg-noir text-ivory p-10 lg:p-12 h-full">
              <p className="eyebrow"><span className="gold-rule mr-3" />Concierge</p>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-ivory leading-[1.1]">
                We respond <span className="italic text-gold">within 24 hours.</span>
              </h2>
              <ul className="mt-12 space-y-7">
                <li className="flex gap-4"><Phone size={18} className="text-gold mt-1" /><div><p className="eyebrow !text-ivory/50">Call</p><a href="tel:+919999999999" className="block mt-1 text-ivory hover:text-gold">+91 99999 99999</a></div></li>
                <li className="flex gap-4"><MessageCircle size={18} className="text-gold mt-1" /><div><p className="eyebrow !text-ivory/50">WhatsApp</p><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="block mt-1 text-ivory hover:text-gold">+91 99999 99999</a></div></li>
                <li className="flex gap-4"><Mail size={18} className="text-gold mt-1" /><div><p className="eyebrow !text-ivory/50">Email</p><a href="mailto:hello@feastandfest.com" className="block mt-1 text-ivory hover:text-gold">hello@feastandfest.com</a></div></li>
                <li className="flex gap-4"><MapPin size={18} className="text-gold mt-1" /><div><p className="eyebrow !text-ivory/50">Studio</p><p className="mt-1 text-ivory">Studio 12, Heritage House,<br/>Hospitality District</p></div></li>
                <li className="flex gap-4"><Clock size={18} className="text-gold mt-1" /><div><p className="eyebrow !text-ivory/50">Hours</p><p className="mt-1 text-ivory">Mon — Sat · 10:00 to 19:00</p></div></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 border border-[color:var(--border)]">
              <p className="eyebrow"><span className="gold-rule mr-3" />Inquiry</p>
              <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.1]">Tell us about your event.</h2>
              <p className="mt-3 text-cocoa/70 text-sm">Used only to prepare your proposal.</p>
              <div className="mt-10"><InquiryForm /></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-ivory pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="overflow-hidden border border-[color:var(--border)]">
              <iframe title="Feast & Fest studio location" src="https://www.google.com/maps?q=Taj+Mahal+Palace+Mumbai&output=embed" width="100%" height="460" loading="lazy" style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }} referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}