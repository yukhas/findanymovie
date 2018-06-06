import axios from 'axios'

const Moviepage = {
    name: 'moviepage',
    data() {
        return {
            id: 0,
            apiKey: 'c81343bf63c046d36f06ab1d5c8c1e6b',
            endpointDetails: `https://api.themoviedb.org/3/movie/383498?api_key=c81343bf63c046d36f06ab1d5c8c1e6b&language=ru-RU`,
            endpointCredits: `https://api.themoviedb.org/3/movie/383498/credits?api_key=c81343bf63c046d36f06ab1d5c8c1e6b&language=ru-RU`,
            endpointTrailers: `https://api.themoviedb.org/3/movie/383498/videos?api_key=c81343bf63c046d36f06ab1d5c8c1e6b&language=ru-RU`,
            movie: {},
            poster: '',
            title: '',
            overview: '',
            trailers: [],
            genres: [],
            cast: [],
            crew: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        console.log(this.id);
        this.getDetails();
        this.getTrailers();
        this.getCredits();
    },
    methods: {
        getDetails() {
            axios.get(this.endpointDetails)
                .then(response => {
                    this.saveDetails(data);
                    /* console.log(this.bestmovies); */
                })
                .catch(error => {
                    console.log('-----error-------');
                    console.log(error)
                })
        },
        
        /* getDetails() {
            fetch(
                `https://api.themoviedb.org/3/movie/${this.id}?api_key=${
                this.key
                }&language=ru-RU`
            )
                .then((res) => res.json())
                .then((data) => this.saveDetails(data))
        }, */

        getCredits() {
            axios.get(this.endpointCredits)
                .then(response => {
                    for (let i = 0; i < 10; i++) {
                        this.crew.push(data.crew[i])
                        this.cast.push(data.cast[i])
                    }
                    /* console.log(this.bestmovies); */
                })
                .catch(error => {
                    console.log('-----error-------');
                    console.log(error)
                })
        },

        /* getCredits() {
            fetch(
                `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${
                this.key
                }&language=ru-RU`
            )
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    for (let i = 0; i < 10; i++) {
                        this.crew.push(data.crew[i])
                        this.cast.push(data.cast[i])
                    }
                })
        }, */

        getTrailers() {
            axios.get(this.endpointTrailers)
                .then(response => {
                    data.results.forEach(element => {
                        if (element.type === 'Trailer') {
                            this.trailers.push(element)
                        }
                    })
                    /* console.log(this.bestmovies); */
                })
                .catch(error => {
                    console.log('-----error-------');
                    console.log(error)
                })
        },

        /* getTrailers() {
            fetch(`https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=${
                this.key
                }&language=ru-RU`)
                .then((res) => res.json())
                .then((res) => {
                    res.results.forEach(element => {
                        if (element.type === 'Trailer') {
                            this.trailers.push(element)
                        }
                    })
                    console.log(res)
                })
        }, */

        saveDetails(data) {
            // console.log(data)
            this.movie = data
            this.poster = data.poster_path
            this.title = data.title
            this.overview = data.overview
            this.genres = data.genres
        }
    }
}

export default Moviepage