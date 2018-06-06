import HeaderApp from '../Header/Header.vue'
import Sidebar from '../Sidebar/Sidebar.vue'

export default {
    name: 'app',
    components: {
        HeaderApp: HeaderApp,
        Sidebar: Sidebar
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}