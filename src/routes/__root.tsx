import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="container-x py-32 text-center">
      <p className="eyebrow justify-center">Page not found</p>
      <h1 className="mt-4 display-lg">We couldn't find that page.</h1>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        The page you're looking for may have moved or no longer exists.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Return home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "EquiRise Development Consulting Limited — People. Culture. Social Impact.";
const SITE_DESC =
  "EquiRise Development Consulting Limited is a Kenya-based consulting firm empowering people, strengthening organizations, and transforming communities across Africa.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EquiRise Development Consulting Limited" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { title: "EquiRise Development Consulting — People. Culture. Social Impact." },
      { property: "og:title", content: "EquiRise Development Consulting — People. Culture. Social Impact." },
      { name: "twitter:title", content: "EquiRise Development Consulting — People. Culture. Social Impact." },
      { name: "description", content: "Empowering people, strengthening organizations, and transforming communities across Africa through consulting in leadership, culture, wellbeing, GESI, governance, and enterprise development." },
      { property: "og:description", content: "Empowering people, strengthening organizations, and transforming communities across Africa through consulting in leadership, culture, wellbeing, GESI, governance, and enterprise development." },
      { name: "twitter:description", content: "Empowering people, strengthening organizations, and transforming communities across Africa through consulting in leadership, culture, wellbeing, GESI, governance, and enterprise development." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8dcf7a72-b681-4338-a04e-7dfb033c604e/id-preview-12082729--dd0234a9-077c-4e81-bc7e-a8f68e7a352d.lovable.app-1783363632490.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8dcf7a72-b681-4338-a04e-7dfb033c604e/id-preview-12082729--dd0234a9-077c-4e81-bc7e-a8f68e7a352d.lovable.app-1783363632490.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/PNG/favicon0.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
