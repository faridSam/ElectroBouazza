"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function useDemoForm(successMessage: string) {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(successMessage);
  }
  return { status, submit };
}
