"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PageAnimations() {
  // Kein scope-Selektor: Strings werden schon beim SSR aufgelöst (document fehlt dort).
  // Die data-Attribute existieren nur einmal pro Seite, daher sind globale Selektoren sicher.
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero-item]", {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.05,
        clearProps: "all",
      });
      gsap.from("[data-hero-panel]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out",
        clearProps: "all",
      });
      gsap.from("[data-hero-step]", {
        y: 14,
        autoAlpha: 0,
        duration: 0.45,
        delay: 0.25,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "all",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
    });
  });

  return null;
}
