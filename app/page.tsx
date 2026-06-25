import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/prismicio";
import OffreCard from "@/components/OffreCard";

export default async function Home() {
  const client = createClient();
  const toutesLesOffres = await client.getAllByType("offre");

  const dernieresOffres = [...toutesLesOffres]
    .sort((a, b) => (a.data.date && b.data.date ? b.data.date.localeCompare(a.data.date) : 0))
    .slice(0, 3);

  const tags = Array.from(
    new Set(
      toutesLesOffres.flatMap((offre) =>
        offre.data.technologies.map((technologie) => technologie.nom)
      )
    )
  );

  return (
    <main className="flex flex-col gap-8">
      <Image
        src="/hero.png"
        alt="Bureau"
        width={1600}
        height={500}
        className="w-full h-64 object-cover"
      />

      <div className="px-6 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-marine">Nos dernières opportunités</h1>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/offres?tag=${tag}`}
              className="border border-accent text-accent rounded-full px-3 py-1 text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {dernieresOffres.map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))}
        </div>

        <Link
          href="/offres"
          className="bg-marine text-white rounded px-4 py-2 self-center"
        >
          Voir toutes les offres
        </Link>
      </div>
    </main>
  );
}
