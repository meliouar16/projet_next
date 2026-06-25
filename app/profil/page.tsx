"use client";

import OffreCard from "@/components/OffreCard";
import { usePinsStore } from "@/store/pins";
import { useCandidaturesStore } from "@/store/candidatures";

export default function ProfilPage() {
  const pins = usePinsStore((s) => s.pins);
  const candidatures = useCandidaturesStore((s) => s.candidatures);

  return (
    <main>
      <h1>Bienvenue</h1>

      <h2>Offres enregistrées</h2>
      <div>
        {pins.map((offre) => (
          <OffreCard key={offre.id} offre={offre} />
        ))}
      </div>

      <h2>Historique des candidatures</h2>
      <ul>
        {candidatures.map((candidature, index) => (
          <li key={index}>
            {candidature.date} - {candidature.offreTitre} -{" "}
            {candidature.technologies.join(", ")} - {candidature.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
