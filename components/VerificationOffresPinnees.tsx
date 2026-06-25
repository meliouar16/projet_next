"use client";

import { useEffect } from "react";
import { createClient } from "@/prismicio";
import { usePinsStore } from "@/store/pins";

export default function VerificationOffresPinnees() {
  const { pins, removePin } = usePinsStore();

  useEffect(() => {
    const client = createClient();
    pins.forEach((pin) => {
      client.getByUID("offre", pin.uid).catch(() => removePin(pin));
    });
  }, []);

  return null;
}
