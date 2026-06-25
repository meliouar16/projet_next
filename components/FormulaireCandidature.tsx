"use client";

import { FormEvent } from "react";
import postuler from "@/actions/postuler";
import { useCandidaturesStore } from "@/store/candidatures";
import { Content } from "@prismicio/client";

type FormulaireCandidatureProps = {
  offreUid: string;
  offreTitre: string;
  technologies: string[];
  emailsAdmin: Content.OffreDocumentDataEmailsAdminItem[];
};

export default function FormulaireCandidature({
  offreUid,
  offreTitre,
  technologies,
  emailsAdmin,
}: FormulaireCandidatureProps) {
  const addCandidature = useCandidaturesStore((s) => s.addCandidature);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    addCandidature({
      offreUid,
      offreTitre,
      technologies,
      message: formData.get("message") as string,
      date: new Date().toISOString(),
    });
  };

  return (
    <form action={postuler} onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      {emailsAdmin.map((email) => (
        <input key={email.adresse} type="hidden" name="email" value={email.adresse ?? ""} />
      ))}
      <textarea
        name="message"
        placeholder="Postuler à cette offre ..."
        className="border rounded p-2"
      ></textarea>
      <button type="submit" className="bg-marine text-white rounded px-4 py-2 self-start">
        Envoyer
      </button>
    </form>
  );
}
