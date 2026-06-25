import postuler from "@/actions/postuler";
import { Content } from "@prismicio/client";

type FormulaireCandidatureProps = {
  emailsAdmin: Content.OffreDocumentDataEmailsAdminItem[];
};

export default function FormulaireCandidature({ emailsAdmin }: FormulaireCandidatureProps) {
  return (
    <form action={postuler}>
      {emailsAdmin.map((email) => (
        <input key={email.adresse} type="hidden" name="email" value={email.adresse ?? ""} />
      ))}
      <textarea name="message" placeholder="Postuler à cette offre ..."></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}
