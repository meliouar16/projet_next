import Link from "next/link";
import { Content } from "@prismicio/client";
import BoutonPin from "@/components/BoutonPin";

type OffreCardProps = {
  offre: Content.OffreDocument;
};

export default function OffreCard({ offre }: OffreCardProps) {
  return (
    <div>
      <BoutonPin offre={offre} />
      <Link href={`/offres/${offre.uid}`}>
        <h3>{offre.data.titre}</h3>
        <p>{offre.data.date}</p>
        <p>
          {offre.data.technologies.map((technologie) => technologie.nom).join(", ")}
        </p>
      </Link>
    </div>
  );
}
