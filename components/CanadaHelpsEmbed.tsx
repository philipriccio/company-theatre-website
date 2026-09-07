"use client";

import { useEffect, useRef } from "react";

const CANADAHELPS_EMBED_URL =
  "https://www.canadahelps.org/secure/js/cdf_embed.2.js";

export default function CanadaHelpsEmbed() {
  const embedContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = embedContainer.current;

    if (!container) return;

    const script = document.createElement("script");
    script.id = "ch_cdn_embed";
    script.src = CANADAHELPS_EMBED_URL;
    script.charset = "utf-8";
    script.dataset.language = "en";
    script.dataset.pageId = "2896";
    script.dataset.rootUrl = "https://www.canadahelps.org";
    script.dataset.formtype = "1";
    script.dataset.cfasync = "false";

    script.addEventListener("load", () => {
      const iframe = container.querySelector("iframe");
      iframe?.setAttribute(
        "title",
        "Donate securely to The Company Theatre through CanadaHelps",
      );
    });

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return <div ref={embedContainer} className="canadahelps-embed" />;
}
