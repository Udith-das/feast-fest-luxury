import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <section className="min-h-[80vh] flex items-center justify-center bg-ivory px-6">
          <div className="text-center max-w-xl">
            <p className="eyebrow"><span className="gold-rule mr-3" />404<span className="gold-rule ml-3" /></p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl">Page not found.</h1>
            <p className="mt-6 text-cocoa/70 font-light leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-noir text-ivory text-[11px] tracking-[0.3em] uppercase hover:bg-cocoa transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
