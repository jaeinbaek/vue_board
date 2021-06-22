import axios from 'axios';

export default {
    namespaced: true,
    state: {
        articles: {
            body: '',
            date: '',
            editFlag: '',
            id: '',
            title: '',
            userId: '',
            userName: '',
            viewCount: ''
        },
        hello: 1
    },
    mutations: {
        setPosts (state, postData) {
            state.articles = postData;
        },
        editArticle(state, articleData){
            state.articles = state.articles.filter( element => element.id != articleData.id );
            state.articles.push(articleData);
        },
        deleteArticle(state, articleId) {
            state.articles = state.articles.filter( element => element.id != articleId );
        },
        viewArticle(state, articleId) {
            var article = state.articles.find( element => element.id == articleId );
            article.viewCount ++;
            state.articles = state.articles.filter( element => element.id != articleId );
            state.articles.push(article);
        },
        newArticle(state, articleData) {
            // 마지막 id 찾아 할당해주는 로직
            var lastId = state.articles.reduce(( previous, current ) => {
                return previous.id > current.id ? previous:current;
            }).id;
            articleData.id =  lastId + 1;
            state.articles.push(articleData);

        }
    },
    actions: {
        // get dummy data 
        getPosts({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                console.info('================================================================');
                console.info('|| Load Fresh Data From jsonplaceholder.com                   ||');
                console.info('================================================================');
                var a = new Object();
                var dummyObj = { userName: "james bond", date: '2021-01-01', viewCount: 0, editFlag: 0 };
                for (a in res.data) {
                        res.data[a] = { ...res.data[a], ...dummyObj };
                        // console.log(res.data[a]);                         
                }
                commit('setPosts', res.data );
            });
        },
    },
    getters: {

    }
}