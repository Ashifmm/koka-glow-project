import { ReactNode, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ReviewPopup from "./ReviewPopup";
import { prefetchPriorityRoutes } from "@/lib/prefetch";

// Non-disruptive, lightweight fallback if a route chunk is pending on slow networks
const PageTransitionFallback = () => (
  <div className="w-full min-h-[40vh] flex flex-col items-center justify-center p-8 animate-fade-in">
    <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin mb-3" />
    <span className="text-xs text-muted-foreground tracking-wider uppercase font-medium">
      Loading...
    </span>
  </div>
);

export default function Layout({ children }: { children?: ReactNode }) {
  useEffect(() => {
    // Prefetch all secondary pages in idle time once layout mounts
    prefetchPriorityRoutes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Suspense fallback={<PageTransitionFallback />}>
          {children ?? <Outlet />}
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
      <ReviewPopup />
    </div>
  );
}
