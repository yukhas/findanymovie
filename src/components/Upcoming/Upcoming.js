import axios from 'axios'
import Moviecard from '../Moviecard/Moviecard.vue'

const Upcoming = {
    name: 'upcoming',

    components: {
        Moviecard: Moviecard
    },

    data() {
        return {
            upcomingMoviesTitle: "Upcoming Movies",
            upcoming: [],
            apiKey: 'c81343bf63c046d36f06ab1d5c8c1e6b',
            endpoint: `https://api.themoviedb.org/3/movie/upcoming?api_key=c81343bf63c046d36f06ab1d5c8c1e6b&language=en-US&page=1`
        }
    },

    methods: {
        getUpcoming() {
            axios.get(this.endpoint)
                .then(response => {
                    this.upcoming = response.data.results;
                    console.log(this.upcoming);
                })
                .catch(error => {
                    console.log('-----error-------');
                    console.log(error)
                })
        }
    },

    created() {
        this.getUpcoming();
    },

    watch: {
        '$route'() {
            this.getUpcoming();
        }
    }
};

export default Upcoming;