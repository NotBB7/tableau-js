// Définition de la classe Hero
class Hero {
    constructor(alias, realName, power, universe) {
      this.alias = alias;
      this.realName = realName;
      this.power = power;
      this.universe = universe;
    }
  }
  
  // Création des objets héros
  const superman = new Hero("Superman", "Clark Kent", "Très fort et qui vole très haut", "DC");
  const spiderman = new Hero("Spiderman", "Peter Parker", "Une araignée humaine", "Marvel");
  const ironman = new Hero("Iron Man", "Tony Stark", "Armure surpuissante", "Marvel");
  const hulk = new Hero("Hulk", "Bruce Banner", "Force surhumaine", "Marvel");
  const batman = new Hero("Batman", "Bruce Wayne", "Intelligence et gadgets", "DC");
  const captainAmerica = new Hero("Captain America", "Steve Rogers", "Force et endurance améliorées", "Marvel");
  const wonderWoman = new Hero("Wonder Woman", "Diana Prince", "Force, agilité et lasso de vérité", "DC");
  const blackWidow = new Hero("Black Widow", "Natasha Romanoff", "Espionnage et combat au corps à corps", "Marvel");
  
  // Stockage des héros dans le tableau herosDatabase
  const herosDatabase = [superman, spiderman, ironman, hulk, batman, captainAmerica, wonderWoman, blackWidow];
  
  // Affichage des informations de tous les super héros
  for (let i = 0; i < herosDatabase.length; i++) {
    const hero = herosDatabase[i];
    console.log("- Héros:", hero.alias);
    console.log("  Identité secrète:", hero.realName);
    console.log("  Pouvoir:", hero.power);
    console.log("  Comic:", hero.universe);
    console.log("---");
  }
  