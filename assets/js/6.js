// Création du tableau initial avec la princesse Cendrillon
let princesses = ["Cendrillon"];

// Affichage du tableau initial dans la console
console.log("Tableau initial :");
console.log(princesses);

// Ajout des nouvelles princesses dans le tableau
princesses.push("Mulan", "Peach", "Raiponce", "Belle", "Vaiana", "Daisy", "Jasmine");

// Affichage du tableau avec les nouvelles princesses dans la console
console.log("Tableau avec les nouvelles princesses :");
console.log(princesses);

// Suppression des princesses Peach et Daisy du tableau
princesses.splice(princesses.indexOf("Peach"), 1);
princesses.splice(princesses.indexOf("Daisy"), 1);

// Affichage du tableau corrigé sans les 2 princesses dans la console
console.log("Tableau corrigé sans les 2 princesses :");
console.log(princesses);

// Tri des données du tableau dans l'ordre alphabétique
princesses.sort();

// Affichage du tableau trié dans la console
console.log("Tableau trié dans l'ordre alphabétique :");
console.log(princesses);

// Affichage du nombre total de princesses dans le tableau
console.log("Il y a " + princesses.length + " princesses dans le tableau.");
