import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نظم للتقنية",
    short_name: "  نظم للتقنية",
    description:
      "حلول أكاديمية، إبداعية ورقمية مرتبة حول احتياجك. ",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4A2C11",
    orientation: "portrait",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}