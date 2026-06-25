import Link from "next/link";
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
    <main>
      <h1>Nos dernières opportunités</h1>

      <div>
        {tags.map((tag) => (
          <Link key={tag} href={`/offres?tag=${tag}`}>
            {tag}
          </Link>
        ))}
      </div>

      <div>
        {dernieresOffres.map((offre) => (
          <OffreCard key={offre.id} offre={offre} />
        ))}
      </div>

      <Link href="/offres">Voir toutes les offres</Link>
    </main>
  );
}
