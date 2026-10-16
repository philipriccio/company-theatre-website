"use client";

import SiteAnalytics from "./SiteAnalytics";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-EYNV9M5R2N";

export default function GoogleAnalytics() {
  return (
    <>
      <SiteAnalytics />
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
