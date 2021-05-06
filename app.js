const express = require("express");
const app = express();

//EJS

app.set("views", "./views/pages");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let articles = [
    {
      title: "Mercure",
      description:
        "Mercure est la planète la plus proche du Soleil et la moins massive du Système solaire. ... Mercure est une planète tellurique, comme le sont également Vénus, la Terre et Mars. Elle est près de trois fois plus petite et presque vingt fois moins massive que la Terre mais presque aussi dense qu'elle.",
      url_img:
        "https://www.lactugeek.com/wp-content/uploads/2020/03/mercure-plan%C3%A8te.jpg",
    },
    {
      title: "Vénus",
      description:
        "Vénus est l'une des quatre planètes telluriques du Système solaire, ce qui signifie qu'elle possède un corps rocheux comme la Terre. Elle est comparable à la Terre en taille et en masse, et souvent décrite comme la « sœur » ou « jumelle » de la Terre.",
      url_img:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Terre",
      description:
        "La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que le diamètre. ... L'axe de rotation de la Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons.",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png",
    },
    {
      title: "Mars",
      description:
        "Mars est une planète tellurique, c'est-à-dire rocheuse, dix fois moins massive que la Terre. Vue de la Planète bleue, elle apparaît rougeâtre de part la poussière riche en oxyde de fer qui recouvre sa surface. Une fois hydraté, l'oxyde de fer devient rouille, d'où la couleur ocrée de notre planète voisine.",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg",
    },
    {
      title: "Jupiter",
      description:
        "Jupiter est une planète géante gazeuse. Il s'agit de la plus grosse planète du Système solaire, plus volumineuse et massive que toutes les autres planètes réunies, et la cinquième planète par sa distance au Soleil (après Mercure, Vénus, la Terre et Mars).",
      url_img:
        "https://img.over-blog-kiwi.com/2/19/04/57/20170519/ob_3a5ffa_jupiter.jpg",
    },
    {
      title: "Saturne",
      description:
        "Saturne est la deuxième planète la plus massive du Système solaire, d'une masse 3,3 fois moindre que Jupiter, mais 5,5 fois supérieure à celle de Neptune et 6,5 fois supérieure à celle d'Uranus.",
      url_img:
        "https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)#/media/Fichier:Saturn_Storm.jpg",
    },
    {
      title: "Uranus",
      description:
        "Uranus est la septième planète du Système solaire par ordre d'éloignement au Soleil. ... Elle orbite autour de celui-ci à une distance d'environ 19,2 unités astronomiques (2,87 milliards de kilomètres), avec une période de révolution de 84,05 années terrestres .",
      url_img:
        "https://www.quebecscience.qc.ca/wp-content/uploads/2018/07/2018042411-uranus2.jpg",
    },
    {
      title: "Neptune",
      description:
        "Neptune est la huitième planète par ordre d'éloignement au Soleil et la plus éloignée connue du Système solaire. Elle orbite autour du Soleil à une distance d'environ 30,1 UA (4,5 milliards de kilomètres), avec une excentricité orbitale moitié moindre que celle de la Terre et une période de révolution de 164,79 ans .",
      url_img:
        "data:image/jpeg;base64,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",
    },
  ];

  res.render("index", { articles: articles });
});

app.listen(8080);
