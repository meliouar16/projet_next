import Link from "next/link";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import OffreCard from "@/components/OffreCard";

type OffresPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function OffresPage({ searchParams }: OffresPageProps) {
  const { tag } = await searchParams;
  const client = createClient();

  const offres = await client.getAllByType("offre", {
    predicates: tag ? [prismic.predicate.at("my.offre.technologies.nom", tag)] : [],
  });

  const toutesLesOffres = await client.getAllByType("offre");
  const tags = Array.from(
    new Set(
      toutesLesOffres.flatMap((offre) =>
        offre.data.technologies.map((technologie) => technologie.nom)
      )
    )
  );

  return (
    <main>
      <h1>Offres d&apos;emploi</h1>
      <p>{offres.length} offres</p>

      <div>
        {tags.map((t) => (
          <Link key={t} href={`/offres?tag=${t}`}>
            {t}
          </Link>
        ))}
      </div>

      <div>
        {offres.map((offre) => (
          <OffreCard key={offre.id} offre={offre} />
        ))}
      </div>
    </main>
  );
}
