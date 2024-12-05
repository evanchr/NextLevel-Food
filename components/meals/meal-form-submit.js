"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmit() {
  const { pending } = useFormStatus();

  return <button disbaled={pending}>{pending ? "Envoi en cours..." : "Partager ma recette"}</button>;
}
