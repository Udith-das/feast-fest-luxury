import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTAs } from "./FloatingCTAs";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-noir">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}