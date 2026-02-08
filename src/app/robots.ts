import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mochatech.com.au/sitemap.xml",
    host: "https://mochatech.com.au",
  };
}
