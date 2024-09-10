class Movie {
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
    return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en'];
  }
  
  /**
   * To get duration property, 
   * here is details a method to fix to following Date format, 
   * like this: ${nombreHeure}h${nombreMinutes}
   * 
    divide the minutes by 60. 
    The hours will be the whole number of the result, 
    and the minutes will be the remainder of the division.
    For example:

    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return { hours, minutes };
    } // { hours: 1, minutes: 40 }

    We create a reusable function that takes the total number of minutes 
    and returns an object containing the separate hour and minute values.
   */
  get duration() {
    const nombreHeure = Math.floor(this._duration / 60);
    const nombreMinutes = this._duration % 60;
    return `${nombreHeure}h${nombreMinutes}`;
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
