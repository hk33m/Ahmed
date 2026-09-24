import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";


export const metadata = {
  title: "دعوة زفاف نهى و يونس",
  description: "بداية أجمل حكايتنا 🤍",

  openGraph: {
    title: "دعوة زفاف نهى و يونس",
    description: "بداية أجمل حكايتنا 🤍",
    type: "website",
    locale: "ar_YE",
    images: [
      {
        url: "/og-wedding.png",
        width: 1200,
        height: 630,
        alt: "دعوة زفاف نهى و يونس",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "دعوة زفاف نهى و يونس",
    description: "بداية أجمل حكايتنا 🤍",
    images: ["/og-wedding.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
