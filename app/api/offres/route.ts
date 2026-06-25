import { NextResponse } from "next/server";
import { createClient } from "@/prismicio";

export async function GET() {
  const client = createClient();
  const toutesLesOffres = await client.getAllByType("offre");

  const dernieresOffres = [...toutesLesOffres]
    .sort((a, b) => (a.data.date && b.data.date ? b.data.date.localeCompare(a.data.date) : 0))
    .slice(0, 3);

  const data = dernieresOffres.map((offre) => ({
    uid: offre.uid,
    titre: offre.data.titre,
    date: offre.data.date,
    technologies: offre.data.technologies.map((technologie) => technologie.nom),
  }));

  return NextResponse.json(data);
}
