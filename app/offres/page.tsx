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
    <main className="px-6 py-12 flex flex-col gap-8">
      <div className="flex justify-between items-baseline">
        <h1 className="text-2xl font-bold text-marine">Offres d&apos;emploi</h1>
        <p>{offres.length} offres</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Link
            key={t}
            href={`/offres?tag=${t}`}
            className="border border-accent text-accent rounded-full px-3 py-1 text-sm"
          >
            {t}
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {offres.map((offre) => (
          <OffreCard key={offre.id} offre={offre} />
        ))}
      </div>
    </main>
  );
}
