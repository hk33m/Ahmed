import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";


export const metadata = {
  title: 'نظم للتقنية | كل احتياج في نظام واحد',
  description: 'حلول أكاديمية، إبداعية ورقمية مرتبة حول احتياجك.',
  generator: 'v0.app',
}

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
