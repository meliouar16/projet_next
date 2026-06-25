import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Candidature = {
  offreUid: string;
  offreTitre: string;
  technologies: string[];
  message: string;
  date: string;
};

type CandidaturesState = {
  candidatures: Candidature[];
  addCandidature: (c: Candidature) => void;
};

export const useCandidaturesStore = create<CandidaturesState>()(
  persist(
    (set) => ({
      candidatures: [],
      addCandidature: (c) =>
        set((state) => ({
          candidatures: [...state.candidatures, c],
        })),
    }),
    {
      name: "candidatures-storage",
    },
  ),
);
