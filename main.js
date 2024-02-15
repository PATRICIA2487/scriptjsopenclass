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