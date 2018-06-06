import Vue from 'vue'
import App from '../components/App/App.vue'
import Home from '../components/Home/Home.vue'
import Bestmovies from '../components/Bestmovies/Bestmovies.vue'
import Moviepage from '../components/Moviepage/Moviepage.vue'
import Upcoming from '../components/Upcoming/Upcoming.vue'
import Search from '../components/Search/Search.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/bestmovies', name: 'bestmovies', component: Bestmovies },
    { path: '/upcoming', name: 'upcoming', component: Upcoming },
    { path: '/moviepage', name: 'moviepage', component: Moviepage }
    /* { path: '/post/:id', name: 'post', component: Post, props: true },
    { path: '/genres', name: 'genres', component: Genres },
    { path: '/movie/:id', name: 'movie', component: Movie },
    { path: '/search', name: 'search', component: Search } */
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router