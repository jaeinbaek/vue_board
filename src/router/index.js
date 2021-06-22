import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


import BoardList from "@/components/BoardList.vue";
// Home Components
import Home from "@/components/home/Home.vue";
// Article Components
import ArticleList from "@/components/article/ArticleList.vue";
import Article from "@/components/article/Article.vue";
import NewArticle from "@/components/article/NewArticle.vue";
import ViewArticle from "@/components/article/ViewArticle.vue";
import EditArticle from "@/components/article/EditArticle.vue";
import EditPage from "@/components/article/EditPage.vue";

import NotFound from "@/components/NotFound.vue"; 

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/boardlist", component: BoardList },
        { path: "/articlelist", component: ArticleList },
        { path: "/article",
         component: Article,
         children: [
            { path: "new", component: NewArticle },
            { path: ":id", component: ViewArticle },
         ]
        },
        { path: "/articleedit",
         component: EditArticle,
         children: [
            { path: ":id", component: EditPage },
         ]
        },
        { path: "*", component: NotFound },
    ]
})

export default router

