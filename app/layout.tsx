import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import FloatingButtons from "@/components/floating-button";
import Script from "next/script";
import { StickyBookButton } from "@/components/hotel-detail/sticky-book-button";
import { WelcomeModal } from "@/components/welcomeModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DayBreakPass - Discover Your Perfect Daycation",
  description:
    "Indulge in world-class spas, savor gourmet dining, and unwind by serene pools with our exclusive day passes. Experience luxury reimagined—no overnight stay required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Simple maintenance mode toggle via environment variable.
  // Set MAINTENANCE_MODE=true in .env.local to activate.
  const maintenance = process.env.MAINTENANCE_MODE === "true";

  if (maintenance) {
    return (
      <html lang="en">
        <head>
          <meta name="robots" content="noindex,nofollow" />
          <link rel="icon" href="/logos/LogoBlack.png" />
          <title>Scheduled Maintenance | DayBreakPass</title>
        </head>
        <body className={inter.className + " bg-gray-50"}>
          <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <img
              src="/logos/LogoBlack.png"
              alt="DayBreakPass"
              className="h-20 mb-8"
            />
            <h1 className="text-3xl font-semibold mb-4">Scheduled Maintenance</h1>
            <p className="text-muted-foreground max-w-xl mb-6">
              We’re currently performing upgrades to improve your experience. Please
              check back soon.
            </p>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} DayBreakPass
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <meta name="agd-partner-manual-verification" />
        <link rel="icon" href="/logos/LogoBlack.png" />
        {/* Microsoft Clarity Script */}

        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pidfken1vb");
            `,
          }}
        />
        {/* Facebook Pixel Base Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '903892685187718');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=903892685187718&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Google Analytics with gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-5GS6FK4P`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-5GS6FK4P', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-RHDYSGZ7XX`}
          strategy="afterInteractive"
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RHDYSGZ7XX', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GS6FK4P"
            height="0"
            width="0"
            style={{ display: "none" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Toaster position="top-center" reverseOrder={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WelcomeModal />
          <FloatingButtons />
          <StickyBookButton />
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
