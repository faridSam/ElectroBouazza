"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Dialog } from "./Dialog";
import { QuoteForm } from "./QuoteForm";

type Actions = {
  openCall: () => void;
  openQuote: (appliance?: string) => void;
  contactAppliance: string;
  setContactAppliance: (value: string) => void;
};

const SiteActions = createContext<Actions | null>(null);

export function useSiteActions() {
  const actions = useContext(SiteActions);
  if (!actions) throw new Error("SiteActionsProvider is required");
  return actions;
}

export function SiteActionsProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<"quote" | "call" | null>(null);
  const [quoteAppliance, setQuoteAppliance] = useState("");
  const [contactAppliance, setContactAppliance] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    document.body.classList.add("reveal-ready");
    return () => {
      observer.disconnect();
      document.body.classList.remove("reveal-ready");
    };
  }, []);

  function openQuote(appliance?: string) {
    if (appliance) {
      setQuoteAppliance(appliance);
      setContactAppliance(appliance);
    }
    setModal("quote");
  }

  function close() {
    setModal(null);
  }

  return (
    <SiteActions.Provider
      value={{
        openCall: () => setModal("call"),
        openQuote,
        contactAppliance,
        setContactAppliance,
      }}
    >
      {children}
      {modal === "quote" && (
        <Dialog id="quoteModal" titleId="quoteTitle" close={close}>
          <QuoteForm
            appliance={quoteAppliance}
            setAppliance={setQuoteAppliance}
            close={close}
          />
        </Dialog>
      )}
      {modal === "call" && (
        <Dialog id="callModal" titleId="callTitle" close={close}>
          <section className="dialog" style={{ maxWidth: 460 }}>
            <button
              className="x"
              type="button"
              onClick={close}
              aria-label="Fermer"
            >
              ×
            </button>
            <h2 id="callTitle">Appeler Élio</h2>
            <p>
              Le numéro affiché est un emplacement fictif. Une fois le vrai
              numéro ajouté, ce bouton lancera un appel téléphonique sur les
              appareils compatibles.
            </p>
            <button type="button" className="submit" onClick={close}>
              Compris
            </button>
          </section>
        </Dialog>
      )}
    </SiteActions.Provider>
  );
}

export function CallLink(
  props: Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick">,
) {
  const { openCall } = useSiteActions();
  return (
    <a
      {...props}
      href="#contact"
      onClick={(event) => {
        event.preventDefault();
        openCall();
      }}
    />
  );
}

type QuoteButtonProps = ComponentPropsWithoutRef<"button"> & {
  appliance?: string;
};

export function QuoteButton({ appliance, ...props }: QuoteButtonProps) {
  const { openQuote } = useSiteActions();
  return (
    <button type="button" {...props} onClick={() => openQuote(appliance)} />
  );
}
