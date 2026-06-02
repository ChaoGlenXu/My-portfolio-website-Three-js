import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Footer from "../components-portfolio/Footer.jsx";

const About = lazy(() => import("../pages-portfolio/About.jsx"));

export const Route = createFileRoute("/about")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "About — Chao (Glen) Xu" },
      { name: "description", content: "About Chao (Glen) Xu — Full Stack Software Engineer with experience in AI, backend, and embedded systems." },
    ],
  }),
  component: () => (
    <Suspense fallback={<div className="min-h-screen" />}>
      <About />
      <Footer />
    </Suspense>
  ),
});