const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Burger Juteux au Fromage',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpg',
    summary: 'Un burger savoureux avec un steak haché juteux et du fromage fondu, servi dans un pain moelleux.',
    instructions: `
      1. Préparer le steak :
         Mélanger 200 g de bœuf haché avec du sel et du poivre. Former un steak.

      2. Cuire le steak :
         Chauffer une poêle avec un peu d'huile. Cuire le steak 2-3 minutes de chaque côté jusqu'à ce qu'il soit doré.

      3. Assembler le burger :
         Griller les moitiés du pain. Placer la laitue et la tomate sur la moitié inférieure. Ajouter le steak cuit et une tranche de fromage.

      4. Servir :
         Compléter avec la moitié supérieure du pain et servir chaud.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Curry Épicé',
    slug: 'spicy-curry',
    image: '/images/curry.jpg',
    summary: 'Un curry riche et épicé, infusé d\'épices exotiques et de lait de coco crémeux.',
    instructions: `
      1. Couper les légumes :
         Couper les légumes de votre choix en morceaux.

      2. Faire revenir les légumes :
         Faire revenir les légumes dans une poêle avec de l'huile jusqu'à ce qu'ils commencent à ramollir.

      3. Ajouter la pâte de curry :
         Incorporer 2 cuillères à soupe de pâte de curry et cuire encore une minute.

      4. Laisser mijoter avec le lait de coco :
         Ajouter 500 ml de lait de coco et porter à ébullition. Laisser cuire environ 15 minutes.

      5. Servir :
         Déguster ce curry crémeux avec du riz ou du pain.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Raviolis Maison',
    slug: 'homemade-dumplings',
    image: '/images/dumplings.jpg',
    summary: 'Des raviolis tendres garnis de viande et de légumes savoureux, cuits à la vapeur à la perfection.',
    instructions: `
      1. Préparer la farce :
         Mélanger de la viande hachée, des légumes râpés et des épices.

      2. Garnir les raviolis :
         Placer une cuillerée de farce au centre de chaque pâte à ravioli. Mouiller les bords et plier pour sceller.

      3. Cuire à la vapeur :
         Disposer les raviolis dans un cuiseur vapeur. Cuire environ 10 minutes.

      4. Servir :
         Déguster chaud avec une sauce d'accompagnement au choix.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Macaroni au Fromage Classique',
    slug: 'classic-mac-n-cheese',
    image: '/images/macncheese.jpg',
    summary: 'Des macaronis crémeux et fromagés, un classique réconfortant toujours apprécié.',
    instructions: `
      1. Cuire les macaronis :
         Faire cuire les macaronis selon les instructions jusqu'à ce qu'ils soient al dente.

      2. Préparer la sauce au fromage :
         Faire fondre du beurre dans une casserole, ajouter de la farine et incorporer progressivement du lait en fouettant jusqu'à épaississement. Ajouter du fromage râpé jusqu'à ce qu'il fonde.

      3. Assembler :
         Mélanger les macaronis égouttés avec la sauce au fromage.

      4. Cuire au four :
         Mettre le tout dans un plat, parsemer de chapelure et cuire jusqu'à ce que le dessus soit doré.

      5. Servir :
         Servir chaud avec un peu de persil, si désiré.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Pizza Authentique',
    slug: 'authentic-pizza',
    image: '/images/pizza.jpg',
    summary: 'Pizza artisanale avec une sauce tomate acidulée, des garnitures fraîches et du fromage fondu.',
    instructions: `
      1. Préparer la pâte :
         Pétrir la pâte à pizza et laisser lever jusqu'à ce qu'elle double de volume.

      2. Façonner et garnir :
         Étaler la pâte, étaler la sauce tomate et ajouter les garnitures et le fromage de votre choix.

      3. Cuire la pizza :
         Cuire au four préchauffé à 220°C pendant 15-20 minutes.

      4. Servir :
         Couper et savourer avec quelques feuilles de basilic.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Wiener Schnitzel',
    slug: 'wiener-schnitzel',
    image: '/images/schnitzel.jpg',
    summary: 'Escalope de veau panée, dorée et croustillante, un plat autrichien classique.',
    instructions: `
      1. Préparer le veau :
         Aplatir les escalopes de veau à une épaisseur uniforme.

      2. Paner le veau :
         Enrober chaque escalope de farine, tremper dans des œufs battus, puis dans la chapelure.

      3. Faire frire :
         Chauffer de l'huile dans une poêle et cuire chaque escalope jusqu'à ce qu'elle soit dorée des deux côtés.

      4. Servir :
         Servir chaud avec une tranche de citron et une salade de pommes de terre ou des légumes verts.
    `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Salade de Tomates Fraîches',
    slug: 'fresh-tomato-salad',
    image: '/images/tomato-salad.jpg',
    summary: 'Une salade légère et rafraîchissante avec des tomates mûres, du basilic frais et une vinaigrette acidulée.',
    instructions: `
      1. Préparer les tomates :
         Couper des tomates fraîches et les disposer sur une assiette.

      2. Ajouter les herbes et l’assaisonnement :
         Saupoudrer de basilic haché, de sel et de poivre.

      3. Assaisonner la salade :
         Arroser d'huile d'olive et de vinaigre balsamique.

      4. Servir :
         Déguster cette salade simple et savoureuse en accompagnement ou en plat léger.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO meals VALUES (
      null,
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
