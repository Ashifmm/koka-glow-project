// Route-level prefetching utility for instant client-side page transitions

type RouteLoader = () => Promise<unknown>;

const routeLoaders: Record<string, RouteLoader> = {
  "/services": () => import("@/pages/Services"),
  "/gallery": () => import("@/pages/Gallery"),
  "/about": () => import("@/pages/About"),
  "/contact": () => import("@/pages/Contact"),
};

const prefetchedRoutes = new Set<string>();

/**
 * Prefetches the code chunk for a given route path into browser cache.
 */
export function prefetchRoute(to: string): void {
  if (typeof window === "undefined") return;

  const cleanPath = to.split("#")[0].split("?")[0];
  if (!cleanPath || prefetchedRoutes.has(cleanPath)) return;

  const loader = routeLoaders[cleanPath];
  if (loader) {
    prefetchedRoutes.add(cleanPath);
    loader().catch(() => {
      // In case of transient network glitch, allow retry on next interaction
      prefetchedRoutes.delete(cleanPath);
    });
  }
}

/**
 * Automatically prefetches core secondary routes in background during browser idle time
 * after the initial home page has completely loaded and become interactive.
 */
export function prefetchPriorityRoutes(): void {
  if (typeof window === "undefined") return;

  const schedule =
    window.requestIdleCallback ||
    ((cb: IdleRequestCallback) => setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 50 }), 600));

  schedule(() => {
    // Sequentially preload secondary page chunks with small micro-delays
    const routesToPreload = ["/services", "/gallery", "/about", "/contact"];
    routesToPreload.forEach((path, idx) => {
      setTimeout(() => {
        prefetchRoute(path);
      }, idx * 150);
    });
  });
}
