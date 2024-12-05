'use client';

import ImagePicker from '@/components/meals/image-picker';
import styles from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealFormSubmit from '@/components/meals/meal-form-submit';
import { useFormState} from 'react-dom'

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: null})

  return (
    <>
      <header className={styles.header}>
        <h1>
          Partagez votre <span className={styles.highlight}>plat préféré.</span>
        </h1>
        <p>Ou n'importe quel autre plat que vous souhaitez partager !</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Votre nom</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Adresse mail</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Nom du plat</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Court résumé</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions de la recette</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Votre image" name="image"/>
          {state.message && <p>{state.message}</p>}
          <p className={styles.actions}>
            <MealFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}