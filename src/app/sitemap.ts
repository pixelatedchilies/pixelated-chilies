import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = "https://pxchilies.com";
  const routes = [
    "",
    "/about-us",
    "/services",
    "/contact",
    "/terms-and-conditions",
    "/privacy-policy",
    "/imprint",
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
