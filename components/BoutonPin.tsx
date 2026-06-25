"use client";

import { Content } from "@prismicio/client";
import { usePinsStore } from "@/store/pins";

type BoutonPinProps = {
  offre: Content.OffreDocument;
};

export default function BoutonPin({ offre }: BoutonPinProps) {
  const { pins, addPin, removePin } = usePinsStore();
  const pinnee = pins.some((pin) => pin.uid === offre.uid);

  return (
    <button onClick={() => (pinnee ? removePin(offre) : addPin(offre))}>
      {pinnee ? "★" : "☆"}
    </button>
  );
}
