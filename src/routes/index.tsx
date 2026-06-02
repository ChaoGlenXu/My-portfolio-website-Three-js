import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages-portfolio/Home.jsx"));

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Chao (Glen) Xu — Full Stack Software Engineer" },
      { name: "description", content: "Portfolio of Chao (Glen) Xu — Full Stack Software Engineer in San Francisco building AI products." },
      { property: "og:title", content: "Chao (Glen) Xu — Portfolio" },
      { property: "og:description", content: "Full Stack Software Engineer in SF building AI products. Explore my work." },
    ],
  }),
  component: () => (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Home />
    </Suspense>
  ),
});
