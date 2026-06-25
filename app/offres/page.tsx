import Link from "next/link";
import { createClient } from "@/prismicio";
import OffreCard from "@/components/OffreCard";

type OffresPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function OffresPage({ searchParams }: OffresPageProps) {
  const { tag } = await searchParams;
  const client = createClient();

  const toutesLesOffres = await client.getAllByType("offre");

  const offres = tag
    ? toutesLesOffres.filter((offre) =>
        offre.data.technologies.some((technologie) => technologie.nom === tag)
      )
    : toutesLesOffres;

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
