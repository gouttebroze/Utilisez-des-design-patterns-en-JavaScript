class MoviesFactory {
  // type source des données (old-api....json, new-api....json...)
  // data: données retournées par le json pr chaque films
  constructor(data, type) {
    // le rôle du constructeur est d'instancier le bon type d(objet)
    if (type === 'oldApi') {
      return new OldMovie(data);
    } else if (type === 'newApi') {
      return new Movie(data);
    } else {
      throw 'Unknown format type';
    }
  }
}
// on pt maintenant déléger l instanciation des objets Movie & OldMovie 
// via la factory (mettre à jour code ds App.js)