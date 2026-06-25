import Link from "next/link";
import { Content } from "@prismicio/client";
import BoutonPin from "@/components/BoutonPin";

type OffreCardProps = {
  offre: Content.OffreDocument;
};

export default function OffreCard({ offre }: OffreCardProps) {
  return (
    <div className="bg-white rounded p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <Link href={`/offres/${offre.uid}`}>
          <h3 className="font-bold">{offre.data.titre}</h3>
        </Link>
        <BoutonPin offre={offre} />
      </div>
      <p className="text-sm">{offre.data.date}</p>
      <p className="text-sm text-accent">
        {offre.data.technologies.map((technologie) => technologie.nom).join(", ")}
      </p>
    </div>
  );
}
