import axios from 'axios'
import Moviecard from '../Moviecard/Moviecard.vue'

const Bestmovies = {
    name: 'bestmovies',

    components: {
        Moviecard: Moviecard
    },

    data() {
        return {
            bestMoviesTitle: "Best Movies",
            bestmovies: [],
            apiKey: 'c81343bf63c046d36f06ab1d5c8c1e6b',
            endpoint: `https://api.themoviedb.org/3/movie/top_rated?api_key=c81343bf63c046d36f06ab1d5c8c1e6b&language=en-US&page=1`
        }
    },

    methods: {
        getTopRated() {
            axios.get(this.endpoint)
                .then(response => {
                    this.bestmovies = response.data.results;
                    console.log(this.bestmovies);
                })
                .catch(error => {
                    console.log('-----error-------');
                    console.log(error)
                })
        }
    },

    created() {
        this.getTopRated();
    },

    watch: {
        '$route'() {
            this.getTopRated();
        }
    }
};

export default Bestmovies;