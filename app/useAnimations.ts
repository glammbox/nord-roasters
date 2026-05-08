"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function useAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 28,
            opacity: 0,
            clipPath: "inset(0 0 18% 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              end: "bottom 18%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".split-heading").forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            yPercent: 14,
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 8%, 0 8%)",
          },
          {
            yPercent: 0,
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              end: "bottom 14%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".reveal-image img",
        { scale: 1.06, opacity: 0.72 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
        }
      );

      gsap.to(".hero-image img", {
        yPercent: 7,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".cup-mark path",
        { strokeDasharray: 420, strokeDashoffset: 420 },
        {
          strokeDashoffset: 0,
          duration: 1.4,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".membership",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.to(".membership-visual::before", {
        rotate: 20,
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}