"use server";

import validator from "validator";

export default async function postuler(formData: FormData) {
  const message = validator.trim(validator.escape(formData.get("message") as string));
  const emails = formData.getAll("email") as string[];

  console.log("Candidature reçue pour les emails:", emails);
  console.log("Message:", message);
}
