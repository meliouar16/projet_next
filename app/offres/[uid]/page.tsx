import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import FormulaireCandidature from "@/components/FormulaireCandidature";

type OffrePageProps = {
  params: Promise<{ uid: string }>;
};

export default async function OffrePage({ params }: OffrePageProps) {
  const { uid } = await params;
  const client = createClient();
  const offre = await client.getByUID("offre", uid);

  return (
    <main className="px-6 py-12 flex flex-col gap-6 max-w-2xl">
      <Link href="/offres" className="text-accent">
        &lt; Voir toutes les offres
      </Link>

      <h1 className="text-2xl font-bold text-marine">{offre.data.titre}</h1>
      <p className="text-sm">{offre.data.date}</p>

      <div className="flex flex-wrap gap-2">
        {offre.data.technologies.map((technologie) => (
          <Link
            key={technologie.nom}
            href={`/offres?tag=${technologie.nom}`}
            className="border border-accent text-accent rounded-full px-3 py-1 text-sm"
          >
            {technologie.nom}
          </Link>
        ))}
      </div>

      <PrismicRichText field={offre.data.description} />

      <FormulaireCandidature
        offreUid={offre.uid}
        offreTitre={offre.data.titre ?? ""}
        technologies={offre.data.technologies.map((technologie) => technologie.nom ?? "")}
        emailsAdmin={offre.data.emails_admin}
      />
    </main>
  );
}
