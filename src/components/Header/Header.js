import Search from '../Search/Search.vue'

const HeaderApp = {
    name: 'header-app',

    components: {
        Search: Search
    },

    data() {
        return {
            title: "Find Any Movie"
        }
    }
};

export default HeaderApp;