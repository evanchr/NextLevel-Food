import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <Link href="/meals/share">Partager</Link>
      <Link href="/meals/1">Meals with slug</Link>
    </main>
  );
}
