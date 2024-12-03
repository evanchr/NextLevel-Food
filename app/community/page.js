import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import styles from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Une passion commune : <span className={styles.highlight}>La cuisine</span>
        </h1>
        <p>Rejoignez notre communauté et partagez vos recettes préférées !</p>
      </header>
      <main className={styles.main}>
        <h2>Avantages de la Communauté</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Partagez et découvrez des recettes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Rencontrez de nouveaux amis & des gens qui vous resssemblent</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participez à des évènements exclusifs</p>
          </li>
        </ul>
      </main>
    </>
  );
}