import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/la-reserva", changefreq: "monthly", priority: "0.9" },
          { path: "/carta-fundacional", changefreq: "yearly", priority: "0.8" },
          { path: "/conservacion", changefreq: "monthly", priority: "0.9" },
          { path: "/biodiversidad", changefreq: "weekly", priority: "0.9" },
          { path: "/recursos-geneticos", changefreq: "monthly", priority: "0.8" },
          { path: "/apicultura", changefreq: "monthly", priority: "0.8" },
          { path: "/ganaderia", changefreq: "monthly", priority: "0.8" },
          { path: "/olivar", changefreq: "monthly", priority: "0.8" },
          { path: "/actuaciones", changefreq: "monthly", priority: "0.8" },
          { path: "/patrimonio", changefreq: "yearly", priority: "0.6" },
          { path: "/diario", changefreq: "weekly", priority: "0.8" },
          { path: "/galeria", changefreq: "weekly", priority: "0.7" },
          { path: "/videoteca", changefreq: "monthly", priority: "0.6" },
          { path: "/investigacion", changefreq: "monthly", priority: "0.8" },
          { path: "/memorias", changefreq: "yearly", priority: "0.8" },
          { path: "/transparencia", changefreq: "yearly", priority: "0.8" },
          { path: "/zahra-del-alagon", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
