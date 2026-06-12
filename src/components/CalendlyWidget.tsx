"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function CalendlyWidget({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const init = () => {
      if (cancelled || container.querySelector("iframe")) return;
      window.Calendly?.initInlineWidget({ url, parentElement: container });
    };

    if (window.Calendly) {
      init();
      return () => {
        cancelled = true;
        container.replaceChildren();
      };
    }

    const intervalId = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(intervalId);
        init();
      }
    }, 120);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      container.replaceChildren();
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget h-[700px] min-w-0 sm:h-[760px] sm:min-w-[320px] xl:h-[820px]"
      title={title}
      data-auto-load="false"
    />
  );
}
