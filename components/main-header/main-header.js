import Link from "next/link";
import styles from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLEvel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Parcourir les plats</NavLink>
            </li>
            <li>
              <NavLink href="/community">Communautés des Foodies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
