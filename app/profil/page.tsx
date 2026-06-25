"use client";

import OffreCard from "@/components/OffreCard";
import { usePinsStore } from "@/store/pins";
import { useCandidaturesStore } from "@/store/candidatures";

export default function ProfilPage() {
  const pins = usePinsStore((s) => s.pins);
  const candidatures = useCandidaturesStore((s) => s.candidatures);

  return (
    <main className="px-6 py-12 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-marine">Bienvenue</h1>

      <div>
        <h2 className="font-bold text-accent mb-4">Offres enregistrées</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {pins.map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-accent mb-4">Historique des candidatures</h2>
        <ul className="flex flex-col gap-2">
          {candidatures.map((candidature, index) => (
            <li key={index} className="bg-white rounded p-4">
              {candidature.date} - {candidature.offreTitre} -{" "}
              {candidature.technologies.join(", ")} -{" "}
              <span className="text-accent">{candidature.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
