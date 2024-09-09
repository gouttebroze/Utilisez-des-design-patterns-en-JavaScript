class OldMovie {
  // propriétés d'instances
  constructor(data) {
    this._title = data.title;
    this._duration = data.duration;
    this._synopsis = data.synopsis;
    this._picture = data.picture;
    this._released_in = data.released_in;
  }

  // getters pr accéder aux propriétés de l'objet
  get title() {
    return this._title;
  }

  get duration() {
    return this._duration;
  }
 
  get synopsis() {
    return this._synopsis;
  }

  get picture() {
    return `./assets/${this._picture}`;
  }

  get thumbnails() {
    return `./assets/thumbnails/${this._picture}`;
  }

  get released_in() {
    return this._released_in;
  }

}
