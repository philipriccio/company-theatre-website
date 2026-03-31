"use client";

import { useEffect, useState } from "react";
import {
  JackpotTwinsHomepageAnnouncement,
  JackpotTwinsTeaserSection,
} from "@/app/components/JackpotTwinsReveal";

const REVEAL_TIME = new Date("2026-03-31T00:00:00-04:00").getTime();

export default function UpcomingProductionSection({
  initialRevealed,
}: {
  initialRevealed: boolean;
}) {
  const [revealed, setRevealed] = useState(initialRevealed);

  useEffect(() => {
    // Client-side override: force reveal via ?reveal query param
    if (!revealed && new URLSearchParams(window.location.search).has("reveal")) {
      setRevealed(true);
      return;
    }

    if (revealed) return;

    const msUntilReveal = REVEAL_TIME - Date.now();

    if (msUntilReveal <= 0) {
      setRevealed(true);
      return;
    }

    const timer = window.setTimeout(() => setRevealed(true), msUntilReveal);
    return () => window.clearTimeout(timer);
  }, [revealed]);

  if (revealed) {
    return <JackpotTwinsHomepageAnnouncement />;
  }

  return <JackpotTwinsTeaserSection />;
}
