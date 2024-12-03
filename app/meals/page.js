import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}></header>
      <h1>
        Des plats délicieux, créés <span className={styles.highlight}>par vous</span>
      </h1>
      <p>Choisissez votre recette favorite et cuisinez la. C'est facile et amusant!</p>
      <p className={styles.cta}>
        <Link href="/meals/share">Partagez une recette</Link>
      </p>
      <main className={styles.main}>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
}
