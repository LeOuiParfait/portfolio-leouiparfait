import { DjPartner, TraiteurPartner } from '../types';

export const TRAITEUR_PARTNER: TraiteurPartner = {
  name: 'Élégance Gourmande',
  title: 'Une cuisine d\'exception signée Kathy, Béatrice & Hata',
  subtitle: 'Kathy PDG · Béatrice Top chef étoilée · Hata formée par les tops chefs',
  intro: '',
  story:
    `## Une cuisine portée par des femmes de caractère

Un mariage ne se résume pas à une belle table. C'est une succession de moments, de saveurs, d'émotions et de souvenirs que l'on partage. Chez **Le Oui Parfait**, nous avons souhaité aller plus loin en imaginant une expérience culinaire pleinement intégrée à notre vision du mariage.

À la tête de cette aventure, **Kathy, Présidente de Le Oui Parfait**, imagine chaque réception dans sa globalité, avec la même exigence portée à la décoration, à l'organisation, au service et à l'expérience des invités.

À ses côtés, **Béatrice apporte plus de vingt ans d'expérience dans l'univers de la restauration et de la gastronomie**. Son parcours débute en 2002 au **Pavillon de l'Élysée**, avant de se poursuivre chez **Qualité & Co**, puis au **restaurant Dior à Paris**, où elle perfectionne les fondamentaux de la cuisine haut de gamme et du service d'exception.

En **2019**, son engagement, son professionnalisme et son savoir-faire sont récompensés par son **intronisation au sein des Toques Blanches Internationales**, distinction honorifique venant saluer son parcours et son attachement à une gastronomie exigeante et généreuse.

En **2025 et 2026**, elle accompagne également la création de la carte et l'ouverture du [[https://lescale-restaurant-gp.fr/|restaurant L'Escale aux Abymes]], en qualité de **cheffe de cuisine**. Une expérience qui vient renforcer son expertise dans la conception culinaire, l'organisation d'une brigade et la mise en place opérationnelle d'un établissement.

**Hata complète cette équipe**, avec une formation réalisée auprès de chefs reconnus et un véritable savoir-faire en cuisine. Ensemble, elles associent expérience du terrain, créativité, maîtrise technique et sens du détail pour imaginer des réceptions à la hauteur de chaque événement.

### Le Traiteur Parfait, par Le Oui Parfait

C'est de cette complémentarité qu'est né **Le Traiteur Parfait**, le nouveau service traiteur de **Le Oui Parfait**.

Une offre pensée spécialement pour nos mariages et nos événements, avec une ambition simple : proposer une cuisine **généreuse, élégante et personnalisée**, tout en conservant la qualité d'organisation et d'accompagnement qui fait l'ADN de Le Oui Parfait.

De la création du menu à sa présentation, du choix des produits à l'organisation du service, chaque détail est pensé en cohérence avec l'univers de votre réception.

Parce qu'un repas de mariage ne doit pas simplement être bon.
**Il doit faire partie de l'histoire de votre journée.**`,
  heroImage:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85',
  chefImage:
    '/chef traiteur (2).png',
  dishes: [
    { id: 'menu-1', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (1).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-2', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (2).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-3', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (3).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-4', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (4).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-5', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (5).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' },
    { id: 'menu-6', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (6).jpg', description: 'Soupe de potiron / Cassolette de fruits de mer / Fromage frais / Tarte aux pommes' },
    { id: 'menu-7', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (7).jpg', description: 'Foie gras et chutney / Gigot d’agneau, flageolets / Plateau de fromages / Profiteroles' },
    { id: 'menu-8', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (8).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-9', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (9).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-10', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (10).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-11', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (11).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-12', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (12).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' },
    { id: 'menu-13', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (13).jpg', description: 'Soupe de potiron / Cassolette de fruits de mer / Fromage frais / Tarte aux pommes' },
    { id: 'menu-14', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (14).jpg', description: 'Foie gras et chutney / Gigot d’agneau, flageolets / Plateau de fromages / Profiteroles' },
    { id: 'menu-15', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (15).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-16', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (16).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-17', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (17).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-18', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (18).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-19', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (19).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' },
    { id: 'menu-20', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (20).jpg', description: 'Soupe de potiron / Cassolette de fruits de mer / Fromage frais / Tarte aux pommes' },
    { id: 'menu-21', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (21).jpg', description: 'Foie gras et chutney / Gigot d’agneau, flageolets / Plateau de fromages / Profiteroles' },
    { id: 'menu-22', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (22).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-23', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (23).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-24', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (24).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-25', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (25).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-26', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (26).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' },
    { id: 'menu-27', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (27).jpg', description: 'Soupe de potiron / Cassolette de fruits de mer / Fromage frais / Tarte aux pommes' },
    { id: 'menu-28', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (28).jpg', description: 'Foie gras et chutney / Gigot d’agneau, flageolets / Plateau de fromages / Profiteroles' },
    { id: 'menu-29', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (29).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-30', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (30).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-31', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (31).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-32', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (32).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-33', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (33).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' },
    { id: 'menu-34', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (34).jpg', description: 'Soupe de potiron / Cassolette de fruits de mer / Fromage frais / Tarte aux pommes' },
    { id: 'menu-35', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (35).jpg', description: 'Foie gras et chutney / Gigot d’agneau, flageolets / Plateau de fromages / Profiteroles' },
    { id: 'menu-36', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (36).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-37', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (37).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-38', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (38).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-39', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (39).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-40', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (40).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' },
    { id: 'menu-41', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (41).jpg', description: 'Soupe de potiron / Cassolette de fruits de mer / Fromage frais / Tarte aux pommes' },
    { id: 'menu-42', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (42).jpg', description: 'Foie gras et chutney / Gigot d’agneau, flageolets / Plateau de fromages / Profiteroles' },
    { id: 'menu-43', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (43).jpg', description: 'Amuse-bouche végétal, saumon et légumes croquants / Volaille farcie / Plateau de fromages / Vacherin glacé' },
    { id: 'menu-44', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (44).jpg', description: 'Carpaccio de bœuf / Filet de dorade, risotto / Assiette de fromages / Fondant au chocolat' },
    { id: 'menu-45', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (45).jpg', description: 'Velouté de champignons / Magret de canard, gratin dauphinois / Fromage blanc et son coulis / Tarte tatin' },
    { id: 'menu-46', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (47).jpg', description: 'Tartare de saumon / Côte de veau et sa purée / Assiette de fromages / Île flottante' },
    { id: 'menu-47', name: 'Menu', image: '/shooting la saveur etoilee/nos plats (54).jpg', description: 'Burrata et tomates / Dos de cabillaud, légumes de saison / Plateau de fromages / Crème brûlée' }
  ],
};
export const DJ_PARTNERS: DjPartner[] = [
  {
    id: 'dj-alexis',
    name: 'DJ Edner - Double H Dijay',
    tagline: "L'énergie certifiée Le Oui Parfait !",
    description:
      `DJ Edner, aka {{Double H Dijay}}, c'est l'énergie certifiée Le Oui Parfait ! Spécialiste des mariages multiculturels, il mixe tous les styles et transforme chaque soirée en véritable show. Son, lumières, fumée, spots, accessoires et animations : tout est inclus. Ambiance garantie et dancefloor en feu !

Particularité : véritable showman, il ne se contente pas de mixer : il anime, fait participer les invités et crée une vraie interaction avec le public.`,
    rating: 5,
    website: 'https://www.mariages.net/musique-mariage/double-h-dijay--e175339',

    mainImage: '/dj/double h.jpeg',

    videos: {
      mix: {
        src: 'https://videos.pexels.com/video-files/3125365/3125365-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=90',
        label: 'En action',
        title: 'Le mix en live',
      },

      show: {
        src: 'https://videos.pexels.com/video-files/5848544/5848544-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90',
        label: 'Spectacle',
        title: 'Le show lumineux',
      },
    },
  },

  {
    id: 'dj-jojo',
    name: 'DJ Jojo',
    tagline: "La bonne humeur en rythme",
    description:
      `**DJ Jojo, c'est l'art de sentir la salle et de faire monter l'ambiance au bon moment !** À l'écoute des mariés et de leurs envies, il construit une programmation sur mesure et navigue avec fluidité entre les styles pour réunir toutes les générations sur le dancefloor. Du cocktail aux premières notes de la soirée jusqu'aux derniers morceaux de la nuit, il crée une ambiance qui évolue, surprend et fait vibrer vos invités.

**Particularité :** son véritable atout, c'est sa capacité à lire le public et à s'adapter en direct. Pop, funk, disco, variété, house, électro ou musiques du monde : DJ Jojo trouve le bon morceau au bon moment pour créer ces instants où toute la salle se retrouve sur la piste… et où personne n'a envie que la soirée s'arrête.`,
    rating: 5,

    mainImage: '/dj/dj jojo.png',

    videos: {
      mix: {
        src: '/dj/dj jojo.mp4',
        poster: '/dj/dj jojo.png',
        label: 'En action',
        title: 'Le mix en live',
      },

      show: {
        poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90',
        label: 'Spectacle',
        title: 'Le show lumineux',
      },
    },
  },

  {
    id: 'dj-mathieu',
    name: 'Mast-er-Sono',
    tagline: "L'énergie en partage",
    description:
      `** Patrick aka {{Mast-er-Sono}}, c'est bien plus qu'un DJ : c'est celui qui donne le rythme à l'une des plus belles soirées de votre vie.** Des premières émotions jusqu'aux derniers pas de danse, il crée une ambiance sur mesure, pensée pour vous, votre histoire et vos invités. Grâce à une préparation personnalisée en amont, chaque morceau, chaque lumière et chaque temps fort trouve sa place pour faire monter l'émotion et transformer votre réception en un souvenir inoubliable.

**Particularité :** à l'écoute de vos envies et de votre univers musical, il construit avec vous une véritable expérience de soirée. Sonorisation, éclairage et animation sont pensés dans les moindres détails pour faire vibrer toutes les générations, remplir le dancefloor et offrir à vos invités ce moment où plus personne n'a envie que la soirée s'arrête.`,
    rating: 5,
    website: 'https://www.mariages.net/musique-mariage/mast-er-sono--e148805',

    mainImage:
      '/dj/dj patrick.png',

    videos: {
      mix: {
        src: 'https://videos.pexels.com/video-files/3125365/3125365-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1767661667474-4f2a197c9a51?auto=format&fit=crop&w=1200&q=90',
        label: 'En action',
        title: 'Le mix en live',
      },

      show: {
        src: '/dj/patrick show.mp4',
        poster:
          '',
        label: 'Spectacle',
        title: 'Le show lumineux',
      },
    },
  },

  {
    id: 'dj-julien',
    name: 'DJ Julien',
    tagline: 'La fête en fusion',
    description:
      'Julien enflamme les réceptions avec une énergie qui ne s\'arrête jamais. Entre classiques indémodables et tubes actuels, il jongle avec les styles et les ambiances pour que chaque génération trouve son rythme. Un show toujours ajusté à l\'énergie de votre soirée.',
    rating: 5,

    mainImage:
      'https://images.unsplash.com/photo-1772187727779-fdcdde1b307d?auto=format&fit=crop&w=1200&q=90',

    videos: {
      mix: {
        src: 'https://videos.pexels.com/video-files/3125365/3125365-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1762028895490-5b777a1f6165?auto=format&fit=crop&w=1200&q=90',
        label: 'En action',
        title: 'Le mix en live',
      },

      show: {
        src: 'https://videos.pexels.com/video-files/5848544/5848544-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1768405031181-33bb016e2fbb?auto=format&fit=crop&w=1200&q=90',
        label: 'Spectacle',
        title: 'Le show lumineux',
      },
    },
  },
];

