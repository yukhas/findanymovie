import axios from 'axios'
import Moviecard from '../Moviecard/Moviecard.vue'

const Home = {
    name: 'home',

    components: {
        Moviecard: Moviecard
    },

    data() {
        return {
            homeTitle: "Now Playing Movies",
            movies: [],
            apiKey: 'c81343bf63c046d36f06ab1d5c8c1e6b',
            endpoint: `https://api.themoviedb.org/3/movie/now_playing?api_key=c81343bf63c046d36f06ab1d5c8c1e6b&language=en-US&page=1`
        }
    },

    methods: {
        getPlaying() {
            axios.get(this.endpoint)
                .then(response => {
                    this.movies = response.data.results;
                    console.log(this.movies);
                })
                .catch(error => {
                    console.log('-----error-------');
                    console.log(error)
                })
        }
    },

    created() {
        this.getPlaying();
    },

    watch: {
        '$route'() {
            this.getPlaying();
        }
    }
};

export default Home;