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
    { id: 'plat-1', name: "AUMONIERE DE CREPE ( bettrave fromage frais aux herbes fruit rouge", image: "/shooting la saveur etoilee/AUMONIERE DE CREPE ( bettrave fromage frais aux herbes fruit rouge.png", description: "" },
    { id: 'plat-2', name: "Accra à la morue accompagné de sa sauce créole et ses légumes", image: "/shooting la saveur etoilee/Accra à la morue accompagné de sa sauce créole et ses légumes.png", description: "" },
    { id: 'plat-3', name: "Ballotin de Volaille au Chorizo et legume confie", image: "/shooting la saveur etoilee/Ballotin de Volaille au Chorizo et legume confie.png", description: "" },
    { id: 'plat-4', name: "Cabillaud rôti à la moutarde, crème citronnée, purée de patate douce & légumes de saison", image: "/shooting la saveur etoilee/Cabillaud rôti à la moutarde, crème citronnée, purée de patate douce & légumes de saison.png", description: "" },
    { id: 'plat-5', name: "Crevette au curry et lait de coco, courgette, tomate cerise et son riz parfumé", image: "/shooting la saveur etoilee/Crevette au curry et lait de coco, courgette, tomate cerise et son riz parfumé.png", description: "" },
    { id: 'plat-6', name: "Dessert cafe gourmant", image: "/shooting la saveur etoilee/Dessert cafe gourmant.png", description: "" },
    { id: 'plat-7', name: "Filet de veau crémeux accompagné de son sauté de pommes de terre grenailles aux morilles", image: "/shooting la saveur etoilee/Filet de veau crémeux accompagné de son sauté de pommes de terre grenailles aux morilles.png", description: "" },
    { id: 'plat-8', name: "Langouste et riz noir  legume croquants herbes fraiches sauce légère au citron", image: "/shooting la saveur etoilee/Langouste et riz noir  legume croquants herbes fraiches sauce légère au citron.png", description: "" },
    { id: 'plat-9', name: "Paleron de bœuf aux carottes servi avec son écrasé de pommes de terre ou de patates douces", image: "/shooting la saveur etoilee/Paleron de bœuf aux carottes servi avec son écrasé de pommes de terre ou de patates douces.png", description: "" },
    { id: 'plat-10', name: "Pavé de saumon enrobé de sa vinaigrette légère et parfumé accompagné de sa purée de pomme de terre et ses légumes croquants", image: "/shooting la saveur etoilee/Pavé de saumon enrobé de sa vinaigrette légère et parfumé accompagné de sa purée de pomme de terre et ses légumes croquants.png", description: "" },
    { id: 'plat-11', name: "Souris d’agneau avec son gratin de pomme de terre, fagot de haricots verts et sa sauce sucré (ou Sauce poivre)", image: "/shooting la saveur etoilee/Souris d’agneau avec son gratin de pomme de terre, fagot de haricots verts et sa sauce sucré (ou Sauce poivre).png", description: "" },
    { id: 'plat-12', name: "Tartare de Crevettes, Mangue & Avocat", image: "/shooting la saveur etoilee/Tartare de Crevettes, Mangue & Avocat.png", description: "" },
    { id: 'plat-13', name: "Tataki de thon (sesame sauce soja revisité, salade croquante relevée)", image: "/shooting la saveur etoilee/Tataki de thon (sesame sauce soja revisité, salade croquante relevée).png", description: "" },
    { id: 'plat-14', name: "Thieb revisité au poulet, viande ou gambas et ses légumes avec du riz", image: "/shooting la saveur etoilee/Thieb revisité au poulet, viande ou gambas et ses légumes avec du riz.png", description: "" },
    { id: 'plat-15', name: "Veloute de legume de saison ( Carotte, courgette, poireau, Pomme de terre ) croutons maison à l'ail et au herbes, ou chips de legumes ou tuile de parmesan", image: "/shooting la saveur etoilee/Veloute de legume de saison ( Carotte, courgette, poireau, Pomme de terre ) croutons maison à l'ail et au herbes, ou chips de legumes ou tuile de parmesan.png", description: "" },
    { id: 'plat-16', name: "Yassa poulet ou viande aux olives, carotte et son riz long parfumé", image: "/shooting la saveur etoilee/Yassa poulet ou viande aux olives, carotte et son riz long parfumé.png", description: "" },
    { id: 'plat-17', name: "gambas et poisson  sauce cremeuse safranée herbes fraiches et fleur comestibles", image: "/shooting la saveur etoilee/gambas et poisson  sauce cremeuse safranée herbes fraiches et fleur comestibles.png", description: "" },
    { id: 'plat-18', name: "mille feuille de legume grillés (courgette aubergine, poivron,tomate) mozzarela ou fromage frais  . COULIS DE TOMATE .salade verte", image: "/shooting la saveur etoilee/mille feuille de legume grillés (courgette aubergine, poivron,tomate) mozzarela ou fromage frais  . COULIS DE TOMATE .salade verte.png", description: "" },
    { id: 'plat-19', name: "moules et palourdes curry coco legumes croquants et citron vert", image: "/shooting la saveur etoilee/moules et palourdes curry coco legumes croquants et citron vert.png", description: "" },
    { id: 'menu-1', name: 'Minestrone de légumes du soleil', image: '/shooting la saveur etoilee/nos plats 1.jpg', description: 'Filet de rouget plancha, crème balsamique' },
    { id: 'menu-2', name: 'Minestrone de légumes du soleil', image: '/shooting la saveur etoilee/nos plats 2.jpg', description: 'Filet de rouget plancha, crème balsamique' },
    { id: 'menu-3', name: 'Velouté de potiron', image: '/shooting la saveur etoilee/nos plats 3.jpg', description: 'Copeaux de radis rose, kefta de bœuf aux épices orientales' },
    { id: 'menu-4', name: 'Velouté de potiron', image: '/shooting la saveur etoilee/nos plats 4.jpg', description: 'Copeaux de radis rose, kefta de bœuf aux épices orientales' },
    { id: 'menu-5', name: 'Tartare de saumon condimenté', image: '/shooting la saveur etoilee/nos plats 5.jpg', description: "Parfumé à la coriandre, sauce vierge aux câpres, chantilly crème de chèvre à l'aneth" },
    { id: 'menu-6', name: 'Tartare de saumon condimenté', image: '/shooting la saveur etoilee/nos plats 6.jpg', description: "Parfumé à la coriandre, sauce vierge aux câpres, chantilly crème de chèvre à l'aneth" },
    { id: 'menu-7', name: 'Écrasé de pomme de terre aux champignons', image: '/shooting la saveur etoilee/nos plats 7.jpg', description: 'Suprême de pintade pané aux cornflakes curry et herbes de Provence, sauce morille' },
    { id: 'menu-8', name: 'Écrasé de pomme de terre aux champignons', image: '/shooting la saveur etoilee/nos plats 8.jpg', description: 'Suprême de pintade pané aux cornflakes curry et herbes de Provence, sauce morille' },
    { id: 'menu-9', name: 'Écrasé de pomme de terre aux champignons', image: '/shooting la saveur etoilee/nos plats 9.jpg', description: 'Suprême de pintade pané aux cornflakes curry et herbes de Provence, sauce morille' },
    { id: 'menu-10', name: 'Wok de légumes à la coriandre', image: '/shooting la saveur etoilee/nos plats 10.jpg', description: 'Brochette de gambas marinée au saté, sauce vin blanc' },
    { id: 'menu-11', name: 'Wok de légumes à la coriandre', image: '/shooting la saveur etoilee/nos plats 11.jpg', description: 'Brochette de gambas marinée au saté, sauce vin blanc' },
    { id: 'menu-12', name: 'Wok de légumes à la coriandre', image: '/shooting la saveur etoilee/nos plats 12.jpg', description: 'Brochette de gambas marinée au saté, sauce vin blanc' },
    { id: 'menu-13', name: 'Minestrone de légumes du soleil', image: '/shooting la saveur etoilee/nos plats 13.jpg', description: 'Filet de rouget plancha, crème balsamique' },
    { id: 'menu-14', name: 'Minestrone de légumes du soleil', image: '/shooting la saveur etoilee/nos plats 14.jpg', description: 'Filet de rouget plancha, crème balsamique' },
    { id: 'menu-15', name: 'Écrasé de pomme de terre aux champignons', image: '/shooting la saveur etoilee/nos plats 15.jpg', description: 'Suprême de pintade pané aux cornflakes curry et herbes de Provence, sauce morille' },
    { id: 'menu-16', name: 'Magret de canard', image: '/shooting la saveur etoilee/nos plats 16.jpg', description: "Sauce à l'orange, poêlée forestière, suprême de pêche fondante au miel" },
    { id: 'menu-17', name: 'Magret de canard', image: '/shooting la saveur etoilee/nos plats 17.jpg', description: "Sauce à l'orange, poêlée forestière, suprême de pêche fondante au miel" },
    { id: 'menu-18', name: 'Magret de canard', image: '/shooting la saveur etoilee/nos plats 18.jpg', description: "Sauce à l'orange, poêlée forestière, suprême de pêche fondante au miel" },
    { id: 'menu-19', name: 'Magret de canard', image: '/shooting la saveur etoilee/nos plats 19.jpg', description: "Sauce à l'orange, poêlée forestière, suprême de pêche fondante au miel" },
    { id: 'menu-20', name: 'Magret de canard', image: '/shooting la saveur etoilee/nos plats 20.jpg', description: "Sauce à l'orange, poêlée forestière, suprême de pêche fondante au miel" },
    { id: 'menu-21', name: 'Magret de canard', image: '/shooting la saveur etoilee/nos plats 21.jpg', description: "Sauce à l'orange, poêlée forestière, suprême de pêche fondante au miel" },
    { id: 'menu-22', name: 'Filet de bar rôti', image: '/shooting la saveur etoilee/nos plats 22.jpg', description: "Condiment vierge, écrasée de pomme de terre vitelotte à l'huile de truffe" },
    { id: 'menu-23', name: 'Filet de bar rôti', image: '/shooting la saveur etoilee/nos plats 23.jpg', description: "Condiment vierge, écrasée de pomme de terre vitelotte à l'huile de truffe" },
    { id: 'menu-24', name: 'Filet de bar rôti', image: '/shooting la saveur etoilee/nos plats 24.jpg', description: "Condiment vierge, écrasée de pomme de terre vitelotte à l'huile de truffe" },
    { id: 'menu-25', name: 'Le tout fraise', image: '/shooting la saveur etoilee/nos plats 25.jpg', description: 'Tartelette fraise, sorbet fraise basilic, soupe de fraise à la menthe' },
    { id: 'menu-26', name: 'Le tout fraise', image: '/shooting la saveur etoilee/nos plats 26.jpg', description: 'Tartelette fraise, sorbet fraise basilic, soupe de fraise à la menthe' },
    { id: 'menu-27', name: 'Le tout fraise', image: '/shooting la saveur etoilee/nos plats 27.jpg', description: 'Tartelette fraise, sorbet fraise basilic, soupe de fraise à la menthe' },
    { id: 'menu-28', name: 'Café gourmand', image: '/shooting la saveur etoilee/nos plats 28.jpg', description: 'Macaron, tartelette chocolat, mini éclair vanille' },
    { id: 'menu-29', name: 'Café gourmand', image: '/shooting la saveur etoilee/nos plats 29.jpg', description: 'Macaron, tartelette chocolat, mini éclair vanille' },
    { id: 'menu-30', name: 'Café gourmand', image: '/shooting la saveur etoilee/nos plats 30.jpg', description: 'Macaron, tartelette chocolat, mini éclair vanille' },
    { id: 'menu-31', name: 'Café gourmand', image: '/shooting la saveur etoilee/nos plats 31.jpg', description: 'Macaron, tartelette chocolat, mini éclair vanille' },
    { id: 'menu-32', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 32.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-33', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 33.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-34', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 34.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-35', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 35.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-36', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 36.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-37', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 37.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-38', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 38.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-39', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 39.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-40', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 40.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-41', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 41.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-42', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 42.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-43', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 43.jpg', description: 'Avec tous les contenants' },
    { id: 'menu-44', name: 'Menu buffet', image: '/shooting la saveur etoilee/nos plats 44.jpg', description: 'Avec tous les contenants' }
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
        src: 'https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/f3aa02a33561fe1e22f6c478d8434ee8/manifest/video.m3u8',
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
        poster:
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90',
        label: 'Spectacle',
        title: 'Le show lumineux',
      },
    },
  },
];
