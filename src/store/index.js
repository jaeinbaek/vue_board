import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import articles from '@/store/modules/articles.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        articles,
    },
    plugins: [
        createPersistedState()
    ]
})
