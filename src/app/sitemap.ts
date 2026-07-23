import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nuncio.mx";
  const routes = [
    "",
    "/features",
    "/interfaces",
    "/nsql",
    "/security",
    "/mcp",
    "/vs",
    "/vs/superhuman",
    "/vs/airmail",
    "/vs/canary-mail",
    "/vs/spark-mail",
    "/vs/hey",
    "/vs/apple-mail",
    "/vs/outlook",
    "/vs/thunderbird",
    "/vs/gmail",
    "/docs",
    "/about",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/vs") || route === "/features" || route === "/mcp" ? 0.9 : 0.8,
  }));
}
