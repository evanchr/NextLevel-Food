import Link from "next/link";

import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/images-slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>NextLevel Food pour les passionés de cuisine</h1>
            <p>Goûtez et partagez des plats du monde entier.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Rejoindre la Communauté</Link>
            <Link href="/meals">Parcourir les Plats</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Comment ça marche</h2>
          <p>
            NextLevel Food est une plateforme pour que les amateurs de cuisine partagent leurs recettes favorites avec
            le monde. C'est un lieu où l'on découvre des nouveaux plats, et où l'on se connecte avec des amoureux de la
            cuisine.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Pourquoi NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </main>
    </>
  );
}
