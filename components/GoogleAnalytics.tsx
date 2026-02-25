"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId?: string;
}

/**
 * Google Analytics 4 Integration Component
 * 
 * Usage:
 * 1. Add your GA4 Measurement ID to environment variables:
 *    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 
 * 2. Import and add to layout.tsx:
 *    import GoogleAnalytics from "@/components/GoogleAnalytics";
 *    
 *    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
 * 
 * Note: The component only renders if a measurementId is provided.
 * This allows safe deployment without analytics until ready.
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId) {
    return null;
  }

  return (
    <>
      {/* GA4 Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}
