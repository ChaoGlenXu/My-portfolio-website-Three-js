import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Footer from "../components-portfolio/Footer.jsx";

const Projects = lazy(() => import("../pages-portfolio/Projects.jsx"));

export const Route = createFileRoute("/projects")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Projects — Chao (Glen) Xu" },
      { name: "description", content: "Selected projects by Chao (Glen) Xu — AI tools, full-stack apps, and open-source contributions." },
    ],
  }),
  component: () => (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Projects />
      <Footer />
    </Suspense>
  ),
});