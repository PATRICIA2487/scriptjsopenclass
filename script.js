/*test
console.log ("Hello World")*/


//Appli AzerType

//----------test if true--------
/*let motTapeOk = true  
    // or false -> test too

if (motTapeOk)  {
console.log ("Bravo, vous avez correctement tapé le mot")
}
else {
console.log ("Echec, le mot n'est pas correct")
}*/


//-------------------test prompt--------------
/*let motUtilisateur = prompt ("Entrez un mot :")
console.log (motUtilisateur)


//-------------test word entered-------------
const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt ("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
console.log("Bravo !")
} 
else {
console.log("Vous avez fait une erreur de frappe.")
}*/


//------------------test switch case-------------
/*const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt ("Entrez le mot : " + motApplication)

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}*/

//------------Exercice - prompt---------
/*Étape 1 : Testez le premier mot
Déclarez une variable listeMots qui est un tableau. 

Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”.

Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur. 

À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !

Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application. 

Si c’est le cas, on augmente la valeur de score de 1.

Vérifiez avec des console.log si le score final est correct.

Étape 2 : Testez le second mot
Demandez à l’utilisateur de rentrer le second mot. 

Faites une seconde structure conditionnelle pour vérifier si le second mot tapé par l’utilisateur correspond bien au second mot du tableau. 

Étape 3 : Testez le troisième mot
Recommencez une troisième fois pour la dernière case du tableau !

Vous remarquerez peut-être que certaines portions de code vont beaucoup se ressembler dans cet exercice. Pas d'inquiétude, c’est normal à ce stade ! 😉*/


    //--------étape 1----------
/*const listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

let motUtilisateur = prompt ("Entrez le mot : " + listeMots[0])

 if (motUtilisateur==listeMots[0]) {                // -> UTILISER DE PREFERENCE ===
    score++
 }
 console.log (motUtilisateur==listeMots[0])        // -> INUTILE
//CORRECTION : console.log (score); */
 
    //--------étape 2----------
/*let motUtilisateur = prompt ("Entrez le mot : " + listeMots[1])
//CORRECTION : let inutile, variable déjà déclarée

if (motUtilisateur==listeMots[1]) {                 // -> UTILISER DE PREFERENCE ===
    score ++
}
console.log (motUtilisateur==listeMots[1])        // -> INUTILE
//CORRECTION : console.log (score); */

    //--------étape 3----------
/*let motUtilisateur = prompt ("Entrez le mot : " + listeMots[2])
//CORRECTION : let inutile, variable déjà déclarée

    if (motUtilisateur==listeMots[2]) {             // -> UTILISER DE PREFERENCE ===
        score ++
    }
    console.log (motUtilisateur==listeMots[2])         // -> INUTILE
//CORRECTION : console.log (score); */  

// CORRECTION -> NE PAS OUBLIER : Affichage du score de l'utilisateur
/*console.log("Votre score est de " + score + " sur 3")*/

//-------------CORRIGE-----------------------------
/*    // Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0])

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUtilisateur === listeMots[0]) {
    score++
}

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    score++
}

// Idem avec le troisième mot du tableau
motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    score++
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")*/


//------------Exercice - boucles---------
/*Étape 1 : répétez votre code avec une boucle
Dans ce dossier GitHub, le tableau listeMots contient 3 mots : “Cachalot”, “Pétunia” et “Serviette”. Pour chacun de ces mots, à l’aide d’une boucle for : 

demandez à l’utilisateur de le retaper avec prompt ;

comptez un point par mot correctement tapé ;

affichez le score à la fin avec un console.log. 

Gardez en tête que l’emplacement des instructions est particulièrement important pour le fonctionnement du code ! Ce qui se trouve dans le bloc d’instruction de la boucle est répété, mais pas ce qui est à l’extérieur.

Ici, votre objectif est de répéter certaines instructions comme le prompt, mais pas toutes les instructions (le score, lui, ne doit pas être affiché). 

Étape 2 : proposez deux types de listes de mots
Pour rendre le jeu plus engageant, nous voulons que l’utilisateur puisse avoir le choix entre deux listes de mots différentes : une liste avec des mots et une liste avec des phrases.

Déclarez un tableau listePhrases qui contient 3 courtes phrases : “Pas de panique !”, “La vie, l’univers et le reste”, “Merci pour le poisson”.

Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.

Lancez votre boucle for, avec la liste que l’utilisateur a choisie. 

Pour cet exercice, vous pouvez copier deux fois la boucle de jeu :

une fois dans le if ;

une fois dans le else. 

Mais bien sûr, il existe d’autres manières de réussir l’exercice !*/

   
    //--------étape 1----------

/*const listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;
/*let motUtilisateur = prompt ("Entrez le mot : " + listeMots[i])   -> FAUX => NON A LA LIGNE 28 !!! => REPRENDRE LIGNE 8 ENONCE */

/* -> reprise des prompts de l'exo précédent => boucle*/

/*for (let score = 0; motUtilisateur<listeMots.len; score++) -> FAUX => TJS REMPLACER PAR i (index / indice) */
/*for (let i = 0; i<listeMots.length; i++) {
    let motUtilisateur = prompt ("Entrez le mot : " + listeMots[i])   
    if (motUtilisateur===listeMots[i]) {
        score++
    }
/*console.log (score)  -> FAUX + A SAISIR HORS {} + TEXTE ERRONE */
/*}  */
//CORRECTION : 
/*console.log ("votre score est de " + score + " sur 3")  /* A NOTER : possibilité de remplacer  "sur 3" par listeMots.length => mise à jour automatique en cas de rajout de mot(s) dans le tableau */

    //--------étape 2----------

/*const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]  // -> suivant corrigé, à insérer plutôt ligne 27... ici saisi en fonction étapes de l'énoncé
/*motUtilisateur = prompt ("Entrez le mot : " + listeMots[i] || "Entrez le mot : " + listePhrases[i])   -> ligne 46 à 51 : FAUX

if (motUtilisateur === listeMots [i])
  write ("mots")
else (motUtilisateur === listePhrases [i])
  write ("phrases")*/
//CORRECTION :
/*let choix = prompt ("Veuillez choisir la liste mots ou phrases")

/*while (choix != mots || choix != phrases)   //-> PENSER A PLUTÔT UTILISER !==
    prompt("Veuillez choisir la liste mots ou phrases")     -> FAUX !!! ATTENTION : BOUCLE INFINIE, FENÊTRE DE DIALOGUE NE SE FERME PAS !!! */
// CORRECTION :
/*while (choix !== "mots" && choix !== "phrases") {
  choix = prompt ("Veuillez choisir la liste mots ou phrases")
}

//CORRECION SUITE CODES MANQUANTS :
if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt ("Entrez le mot : " + listeMots[i])   
    if (motUtilisateur===listeMots[i]) {
        score++
    }
}   
console.log ("votre score est de " + score + " sur " + listeMots.length) //-> saisi également à l'intérieur condition : ne pas oublier que nous ne savons pas le choix de l'utilisateur
  
} else {    /* sous entendu (choix === phrases) */ // -> Lignes 63 à 72 non saisies => codage faux
/*  for (let i = 0; i < listePhrases.length; i++) {
    let motUtilisateur = prompt ("Entrez la phrase : " + listePhrases[i])   
    if (motUtilisateur===listePhrases[i]) {
        score++
    }
} 
console.log ("votre score est de " + score + " sur " + listePhrases.length)
} */


//------------Exercice - fonctions---------
/*Étape 1 : découpez votre code en fonctions
Notre but est maintenant d’améliorer l’organisation et la lisibilité de notre code. Je vous propose donc de créer les fonctions suivantes : 
  afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ; 
  choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots. 
    Tant que l’utilisateur n’a pas répondu “phrases” ou “mots”, la question lui est posée en boucle. La fonction ne prend aucun paramètre, mais retourne ce que l’utilisateur a répondu.
  lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, et retourne le nombre de mots/phrases correctement tapés ;
  lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres. En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire. 

Étape 2 : séparez votre code en plusieurs fichiers
  Séparez votre code en plusieurs fichiers.
  Créez un fichier config.js qui contiendra uniquement les deux listes de propositions.
  Créez un fichier main.js qui contiendra uniquement l’appel à la fonction principale lancerJeu.
  Vérifiez que tout fonctionne encore.
  Créez un nouveau répertoire appelé “scripts”, et placez-y tous vos fichiers.
  Vérifiez à nouveau votre code. 😃

Pour réussir cette étape, pensez bien à mettre à jour le fichier HTML !*/


        //--------étape 1----------
   /* const listeMots = ["Cachalot", "Pétunia", "Serviette"]; 
    const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
    //let score = 0 //-> dans dernière fonction
        
    function afficherResultat (score, nombreDeMotsProposes) {
        //console.log ("votre score est de " + score + " sur " + listeMots.length)  // -> copié/collé affichage souhaité score - exo boucles => COUPE/COLLE LORSQUE SUR VSCODE -> ICI LES EXOS ONT ETE SEPARES
        // fin incorrecte => nombre de mots proposés souhaité et non liste intégrale !!! 
        console.log ("votre score est de " + score + "sur " + nombreDeMotsProposes)
    }
        
    //function choix (mots, phrases) {    // NON !!! -> NE PAS OUBLIER : UTILISER PRINCIPALEMENT DES VERBES => DISTINCTION SI MULTIPLES FONCTIONS - + DDE ENONCE !!! 
    //CORRECTION :  
    function choisirPhrasesOuMots () {    // NE PAS OUBLIER -> 0 PARAMETRE => CHOIX UTILISATEUR
        let choix = prompt ("Veuillez choisir la liste mots ou phrases")   
            // -> copié/collé - exo boucles => CORRECT => COUPE/COLLE LORSQUE SUR VSCODE -> ICI LES EXOS ONT ETE SEPARES
        while (choix !== "mots" && choix !== "phrases") {                  
            // -> copié/collé - exo boucles => CORRECT => COUPE/COLLE LORSQUE SUR VSCODE -> ICI LES EXOS ONT ETE SEPARES
        choix = prompt ("Veuillez choisir la liste mots ou phrases") }     
            // -> copié/collé - exo boucles => CORRECT => COUPE/COLLE LORSQUE SUR VSCODE -> ICI LES EXOS ONT ETE SEPARES
        return choix        // NE PAS OUBLIER DE RETOURNER POUR UTILISATION ULTERIEURE 
          //console.log (choix) -> faux + codes manquants 
    }
    //CORRECTION CODES MANQUANTS 
        // boucle de jeu -> utilisateur doit saisir les mots ou phrases => NOUVELLE FONCTION
        // copié/collé - exo boucles => COUPE/COLLE LORSQUE SUR VSCODE -> ICI LES EXOS ONT ETE SEPARES
    function lancerBoucleDeJeu (listePropositions) {  
        //ListePropositions : nous avons donné à cette fonction la liste à utiliser => précédente fonction
        for (let i = 0; i < listePropositions.length; i++) {
            let motUtilisateur = prompt ("Entrez le mot : " + listePropositions[i])   
        if (motUtilisateur === listePropositions[i]) {
            score++
            }
        }
        return score    // NE PAS OUBLIER DE RETOURNER : -> ENONCE => score demandé
    }  
          
    function lancerJeu () {   
        //-> lie les 3 précédentes fonctions entre elles et lance donc le jeu AZERTYPE => là encore -> 0 paramètre
        // en 1, choix de l'utilisateur entre jouer avec les mots ou les phrases
        let choix = choisirPhrasesOuMots ()
        //let jeu = LancerBoucleDeJeu ;   -> FAUX
        //let resultats = afficherResultat ;-> FAUX 
        // CORRECTION : 
        let score = 0 ;
        let nombreDeMotsProposes = 0
            
        if (choix === "mots") {
            lancerBoucleDeJeu (listeMots)
            nombreDeMotsProposes = listeMots.length
        } 
        else {
            lancerBoucleDeJeu (listePhrases)
            nombreDeMotsProposes = listePhrases.length
        }
        afficherResultat (score, nombreDeMotsProposes)
    } // A CE STADE, L'EXO BOUCLES N'A DONC PLUS LIEU D'ETRE, ICI TOUT A ETE REMPLACE ET DONC SIMPLIFIE
        
        //console.log (lancerJeu) -> FAUX 
    lancerJeu () */
          
            //--------étape 2----------
/*2e partie HTML créée 
    => suite ajout .js => visibilité détaillée           
Etape répartie dans .js respectifs
    confij.js
    main.js   
COPIE/COLLE ETAPE 1 (retrait corrections)
    => reprise pour visibilité détaillée de l'exo  */

    /* -> A déplacer dans config.js
    const listeMots = ["Cachalot", "Pétunia", "Serviette"]; 
    const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
    */
       
    function afficherResultat (score, nombreDeMotsProposes) {
        console.log ("votre score est de " + score + "sur " + nombreDeMotsProposes)
    }
            
    function choisirPhrasesOuMots () {  
        let choix = prompt ("Veuillez choisir la liste mots ou phrases")   
        while (choix !== "mots" && choix !== "phrases") {                  
            choix = prompt ("Veuillez choisir la liste mots ou phrases") }     
        return choix       
    function lancerBoucleDeJeu (listePropositions) {  
        for (let i = 0; i < listePropositions.length; i++) {
            let motUtilisateur = prompt ("Entrez le mot : " + listePropositions[i])   
        if (motUtilisateur === listePropositions[i]) {
            score++
            }
        }
        return score    
    }  
      
    /* A déplacer dans main.js    
    function lancerJeu () {   
        let choix = choisirPhrasesOuMots ()
        let score = 0 ;
        let nombreDeMotsProposes = 0
           
        if (choix === "mots") {
            lancerBoucleDeJeu (listeMots)
            nombreDeMotsProposes = listeMots.length
        } 
        else {
            lancerBoucleDeJeu (listePhrases)
            nombreDeMotsProposes = listePhrases.length
        }
        afficherResultat (score, nombreDeMotsProposes)
    } 
    */

    lancerJeu ()