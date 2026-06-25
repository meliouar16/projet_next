import { Content } from "@prismicio/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PinsState = {
  pins: Content.OffreDocument[];
  addPin: (p: Content.OffreDocument) => void;
  removePin: (p: Content.OffreDocument) => void;
};

export const usePinsStore = create<PinsState>()(
  persist(
    (set) => ({
      pins: [],
      addPin: (p) =>
        set((state) => ({
          pins: state.pins.some((pin) => pin.uid === p.uid)
            ? state.pins
            : [...state.pins, p],
        })),
      removePin: (p) =>
        set((state) => ({
          pins: state.pins.filter((pin) => pin.uid !== p.uid),
        })),
    }),
    {
      name: "pins-storage",
    },
  ),
);
