// Tableaux des mois en français et en anglais
var moisFrancais = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
var moisAnglais = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Tableaux des jours en français et en anglais
var joursFrancais = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
var joursAnglais = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Tableau principal regroupant les tableaux français et anglais
var tableaux = [moisFrancais, joursFrancais, moisAnglais, joursAnglais];

// Afficher les éléments spécifiés dans la console
console.log(tableaux[0][10]); // Afficher "Novembre"
console.log(tableaux[1][4]); // Afficher "Vendredi"
console.table(tableaux[2]); // Afficher tous les mois en anglais
console.table(tableaux[3]); // Afficher tous les jours en français
