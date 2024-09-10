class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('./data/new-movie-data.json')
    }

    async main() {
        const moviesDb = await this.moviesApi.getMovies()

        moviesDb
            .map(movie => new Movie(movie))
            .forEach(movie => {

                console.log(movie);

                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })
        /* const movies = await this.moviesApi.getMovies()

        movies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })  */   
    }
}

const app = new App()
app.main()
