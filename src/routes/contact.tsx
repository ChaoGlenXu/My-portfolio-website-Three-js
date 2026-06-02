import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Footer from "../components-portfolio/Footer.jsx";

const Contact = lazy(() => import("../pages-portfolio/Contact.jsx"));

export const Route = createFileRoute("/contact")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Contact — Chao (Glen) Xu" },
      { name: "description", content: "Get in touch with Chao (Glen) Xu — Full Stack Software Engineer in San Francisco." },
    ],
  }),
  component: () => (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Contact />
      <Footer />
    </Suspense>
  ),
});