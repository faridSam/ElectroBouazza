"use client";
import { useEffect, useState } from "react";
import { CallLink, QuoteButton } from "./SiteActions";

export function QuickActions() {
  const [scrolled, setScrolled] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const threshold = Math.min(500, Math.max(220, window.innerHeight * 0.42));
      setScrolled(window.scrollY > threshold);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <>
      <aside
        className={scrolled ? "scroll-cta is-visible" : "scroll-cta"}
        id="scrollCta"
        aria-label="Actions rapides"
      >
        <CallLink aria-label="Appeler le réparateur">☎ Appeler</CallLink>
        <QuoteButton type="button" aria-label="Demander un devis">
          Devis ↗
        </QuoteButton>
      </aside>
      <button
        className="wa"
        type="button"
        id="wa"
        aria-expanded={toastOpen}
        aria-controls="toast"
        onClick={() => setToastOpen(!toastOpen)}
        aria-label="Contacter sur WhatsApp"
        title="WhatsApp — démonstration"
      >
        <svg
          viewBox="0 0 32 32"
          width="29"
          height="29"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.55-5.7-1.6l-.4-.2-3.9 1 1-3.7-.25-.42A10.7 10.7 0 1 1 16 26.7Zm5.9-8.3c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.5-.16-.72.16-.2.32-.82 1.05-1 1.26-.18.21-.37.24-.7.08-.33-.16-1.38-.51-2.64-1.63-.98-.87-1.63-1.95-1.82-2.27-.18-.32-.02-.49.14-.66.15-.15.32-.37.49-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.69s1.15 3.13 1.31 3.34c.16.21 2.25 3.43 5.45 4.81.76.33 1.35.53 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </button>
      <div
        className={toastOpen ? "toast show" : "toast"}
        id="toast"
        role="status"
      >
        WhatsApp en démonstration : ajoutez le véritable numéro professionnel
        avant activation.
      </div>
    </>
  );
}
