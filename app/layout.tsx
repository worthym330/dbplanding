import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import toast, { Toaster } from "react-hot-toast";
import FloatingButtons from "@/components/floating-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DayBreakPass - Premium Hotel Booking for Marathon Runners",
  description:
    "Exclusive hotel packages and recovery experiences for marathon runners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/LogoBlack.png" />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingButtons />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
