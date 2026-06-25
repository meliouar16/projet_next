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
    <main>
      <Link href="/offres">Voir toutes les offres</Link>

      <h1>{offre.data.titre}</h1>
      <p>{offre.data.date}</p>

      <div>
        {offre.data.technologies.map((technologie) => (
          <Link key={technologie.nom} href={`/offres?tag=${technologie.nom}`}>
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
