/*La fonction devra retourner, pour chaque rayon du tableau d'entrée, un objet ayant cette "forme":
{
  radius: R,
  circumference: C
  surface: S
}

où R est le rayon donné en entrée, C et S les valeurs que tu dois calculer.

* Ciconférence  =  2 * Pi * rayon
* Diamètre      =  Pi * rayon * rayon 

Exemple de tableau d'entrée :

[1, 3, 4.5, 7]

Tableau de sortie correspondant (toFixed transforme les nombres en chaînes)

[
  {
    radius: 1,
    circumference: "6.283",
    surface: "3.142"
  },
  {
    radius: 2,
    circumference: "12.566",
    surface: "12.566"
  },
  {
    radius: 7,
    circumference: "43.982",
    surface: "153.938"
  },
  {
    radius: 11,
    circumference: "69.115",
    surface: "380.133"
  }
]
*/


/*const circonference = (radiuses) => {
   return radiuses.map(v => 2 * Math.PI * v.radius )
}
 

const surface = (radiuses) => {
    return radiuses.map(v => Math.PI * v.radius * v.radius)
}*/


/*const getCirclesProperties = (x) => { 
  
    return x.map(v => {
        let a = {};
        a.radius = v;
        a.circumference = (2 * Math.PI * v).toFixed(3);
        a.surface = (Math.PI * v * v).toFixed(3);
        return a;
    })
   
}


const tableau = [1, 2, 7, 11];

console.log(getCirclesProperties(tableau));*/


/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

/*const multiplyOddIndices = (numbers) =>{
  return numbers.map((element, index) => {
        if (index % 2 != 0){
            return element * index;
        }
        else {
            return element;
        }
  })
}
const tableau = [3, 8, 11, 13, 19, 7];

console.log(multiplyOddIndices(tableau));*/


/*const getMoviesFreshness = (movies) =>{
   movies.map(v => {if (v.rating < 60){
      v.label =  "rotten"
      }
      else if (v.rating >= 60 && v.rating <= 75){
        v.label =   "fresh"
      }
      else {
           v.label  = "certified fresh"
      }
      
    }) ;
    return movies;
}

const movies = [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    }, {
        name: 'Skyscraper',
        rating: 46
      }];

console.log(getMoviesFreshness(movies));*/


/*Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres.
En utilisant filter, cette fonction doit renvoyer un tableau ne contenant que des nombres
positifs ou nuls.

Exemple de tableau d'entrée:
  [7, -4, 2, 0, -10, 3, 11]
Sortie attendue:
  [7, 2, 0, 3, 11]

 */

/* getPositiveNumbers(numbers) {
    return numbers.filter(element => element >= 0);
}
const tableau = [7, -4, 2, 0, -10, 3, 11];
console.log(getPositiveNumbers(tableau));*/

/*Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Exemple d'entrée:
  1er argument:  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
  2ème argument: 5

  Sortie attendue:
  [-10, 5, 15, 20]


const getMultiplesOf = (numbers, n) => {
   return numbers.filter(element => {
    if (element % n == 0){
      return element ;
    }
    else {
      return ;
    }
  })
}

const tab = [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27];
const number = 5;

console.log(getMultiplesOf(tab, number));


Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']*/



/*const keepStarks = (names) => {
  return names.filter(element => {
    if (element.includes("Stark")){
      return element;
    }
    else{
      return ;
    }
  })
}

const tab = [
  'Bran Stark',
  'Cersei Lannister',
  'Sandor Clegane',
  'Arya Stark',
  'Yara Greyjoy',
  'Sansa Stark'
];
console.log(keepStarks(tab));


 Ne pas modifier l'export
module.exports = keepStarks;*/


/*1. tableau de produits:
[
  { name: 'iPhone X', price: 1159 },
  { name: 'Xiaomi Mi A2', price: 209 },
  { name: 'Samsung Galaxy Note 9', price: 992 },
  { name: 'Huawei P20', price: 480 },
  { name: 'Huawei P20 Pro', price: 649 }
]
2. prix maximum: 500

Sortie attendue:
  [
    { name: 'Xiaomi Mi A2', price: 209 },
    { name: 'Huawei P20', price: 480 }
  ]
 */

/*function filterOnPrice(products, maxPrice) {
  return products.filter(element => {
    if (element.includes("Revenge") ){
      return element;
    }
    else {
      return ;
    }
  })
}
 const tab = [
  'Mad Max: Fury Road',
  'Interstellar',
  'Revenge of the Nerds',
  'Revenge of the Pink Panther',
  'Star Wars: Episode I - The Phantom Menace',
  'Star Wars: Episode II - Attack of the Clones',
  'Star Wars: Episode III - Revenge of the Sith'
];


const prix = "Revenge";

console.log(filterOnPrice(tab, prix));*/



/*Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
[
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY"
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]
2. mots à bannir: ['bloody', 'damn']

Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/


/*const  filterOffensiveComments = (comments, bannedWords) => {
  return comments.filter(element => {
    if (element.toLowerCase().includes(bannedWords[0])) {
      return ;
    }
    else if (element.toLowerCase().includes(bannedWords[1])) {
      return ;
    }
    else {
      return element;
    }
    
  })
}

const tab = [
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY",
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
];

const interdit = ['bloody', "damn"];

console.log(filterOffensiveComments(tab, interdit));*/



/*Tableau en entrée:
[
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]

Sortie attendue:
['Yoda', 'Obiwan Kenobi', 'Mace Windu']

*/


/*const characters = [
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
];

const getJedisNames = (characters) => {
  return characters.filter(element => {
  return element.side === "light";
})
.map(element => {
  return element.name;
})
}

console.log(getJedisNames(characters));*/
/*const campuses = [
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
];

const  getCampusesTeachingReact = (campuses) => {
  return campuses.filter(element => {
    if (element.curriculums[0] == "JS/React" || element.curriculums[1] == "JS/React"){
      return element;
    }
  })
  .map(element => {
    return element.city;
  })
}

console.log(getCampusesTeachingReact(campuses));*/





function searchWordFilter(items, search) {
  return items.filter(element => {
    if (element.toLowerCase().includes(search) ){
      return element;
    }
    else {
      return ;
    }
  })
}

const tab =[
  'Mad Max: Fury Road',
  'Interstellar',
  'Revenge of the Nerds',
  'Revenge of the Pink Panther',
  'Star Wars: Episode I - The Phantom Menace',
  'Star Wars: Episode II - Attack of the Clones',
  'Star Wars: Episode III - Revenge of the Sith'
];
const nom = "revenge"

console.log(searchWordFilter(tab, nom));



























