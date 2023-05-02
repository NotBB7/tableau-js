var tab = new Array();
tab[0] = "Lundi";
tab[1] = "Mardi";
tab[2] = "Mercredi";
tab[3] = "Jeudi";
tab[4] = "Vendredi";
tab[5] = "Samedi";
tab[6] = "Dimanche";
var longueur = tab.length;

console.table(tab);

console.table(tabPage);
var j=1;
document.write( "Le jour à l'indice " + j + " est " + tab[j] );
document.write( ". C'est un jour de " + tabPage[ tab[j] ] );