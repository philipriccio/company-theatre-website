"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const FORM_PATH = "/embed/donation-form/donate-to-the-company-theatre";
const FORM_TITLE = "Donate securely to The Company Theatre through Zeffy";

function initializeEmbed() {
  // Zeffy's loader exposes init for dynamically mounted forms.
  const zeffyWindow = window as Window & {
    Zeffy?: { embed?: { init: () => void } };
  };
  zeffyWindow.Zeffy?.embed?.init();
}

export default function ZeffyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || fallback) return;

    // The provider owns only this empty div's contents; React owns its lifecycle.
    const labelFrame = () => {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.title = FORM_TITLE;
        iframe.allow = "payment";
      }
    };
    const observer = new MutationObserver(labelFrame);
    observer.observe(container, { childList: true, subtree: true });
    initializeEmbed();
    labelFrame();
    const timeout = window.setTimeout(() => {
      if (!container.querySelector("iframe")) setFallback(true);
    }, 12000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [fallback]);

  return (
    <>
      {fallback ? (
        <iframe
          src={`https://www.zeffy.com${FORM_PATH}`}
          title={FORM_TITLE}
          allow="payment"
          className="block h-[900px] w-full border-0"
        />
      ) : (
        <div ref={containerRef} data-zeffy-embed data-form-url={FORM_PATH} />
      )}
      <Script
        id="zeffy-donation-embed"
        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
        strategy="afterInteractive"
        onReady={initializeEmbed}
        onError={() => setFallback(true)}
      />
    </>
  );
}
