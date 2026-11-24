"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  titleId: string;
  close: () => void;
  children: ReactNode;
};

export function Dialog({ id, titleId, close, children }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    element.showModal();
    document.body.classList.add("lock");
    return () => {
      element.close();
      document.body.classList.remove("lock");
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="modal show"
      id={id}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="shade" aria-hidden="true" onClick={close} />
      {children}
    </dialog>
  );
}
