import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

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
        <MealsGrid meals={meals}/>
      </main>
    </>
  );
}
