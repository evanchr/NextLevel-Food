import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Des plats délicieux, créés <span className={styles.highlight}>par vous</span>
        </h1>
        <p>Choisissez votre recette favorite et cuisinez la. C'est facile et amusant!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Partagez une recette</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Chargement des plats...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
