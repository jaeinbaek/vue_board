<template>
<div class="pa-md-4 mx-lg-auto">
    <div>
        <v-card-title>
        ARTICLES
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            color="teal"
        ></v-text-field>
        </v-card-title>
        <v-data-table
            @page-count="pageCount = $event"
            @click:row="articleRowClick"
            :search="search"
            :headers="headers"
            :items="articles"
            :page.sync="page"
            :sort-by="['id']"
            :sort-desc="[true]"
            multi-sort
            hide-default-footer
        >
        </v-data-table>
        <div class="text-center pt-5">
            <v-pagination
                color="teal"
                v-model="page"
                :length="pageCount"
            ></v-pagination>
        </div>
        <div class="text-center pt-3" @click="addNewArticle">
            <v-btn>Write New Article!</v-btn>
        </div>
    </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
    data() {
        return {
            search: '',
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            // table header object
            headers: [
                { text: 'ID', value: 'id'},
                { text: 'Title', value: 'title'},
                { text: 'UserName', value: 'userName'},
                { text: 'Date', value: 'date'},
                { text: 'Views', value: 'viewCount'},
            ]
        }
    },
    computed: {
        articles() {
            // board articles
            return this.$store.state.articles.articles;
        }
    },
    methods: {
        // ...mapActions('articles', ['getPosts']),
        articleRowClick(event){
            this.$router.push({ path: '/article/' + event.id })
        },
        addNewArticle() {
            this.$router.push({ path: '/article/new' })
        }
    },
    // created() {
    //     this.getPosts();
    // }
    
}
</script>

<style>

</style>