const Search = {
    name: 'search',

    data() {
        return {
            searchedMovie: ''
        }
    },

    watch: {
        searchedMovie: function () {
            this.searchMovie()
        }
    },

    methods: {

        searchMovie() {
            if (this.searchedMovie.length > 2) {
                this.$router.push({ path: '/', query: { searchedMovie: this.searchedMovie } })
            }
        }
    }

}

export default Search