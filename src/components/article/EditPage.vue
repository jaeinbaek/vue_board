<template>
  <div>
    <v-card class="elevation-0">
      <v-card-text>
        <div>
          {{ article.date }}
        </div>
        <h1> {{ article.title }} </h1>
        <br>
        <h3> {{ article.userName }} </h3>
        <br><br>
        <v-textarea
          outlined
          name="input-7-4"
          label="Body"
          value="article.body"
          v-model="saveBody"
        ></v-textarea>
        <v-btn
          depressed
          text
          color="teal"
          @click="clickSaveButton"
        >SAVE</v-btn>
      </v-card-text> 
    </v-card>
  </div>
</template>

<script>
export default {
    data() {
      return {
        articleId : '',
        saveBody: '',
        articleData: {
          id: '',
          body: '',
          date: '',
          editFlag: '',
          title: '',
          userId: '',
          userName: '',
          viewCount: ''
        }
      }
    },
    created() {
      this.articleId = this.$route.params.id;
      this.saveBody = this.article.body;
    },
    computed: {
      article() {
        // board articles
        var articles = this.$store.state.articles.articles;
        var viewArticle = articles.find((item) => {
        return item.id == this.articleId;
        });
        // 줄바꿈 처리
        viewArticle.body = viewArticle.body.replace(/<br\s\/>/g, '\n');
        return viewArticle
      },
    },
    methods: {
      clickSaveButton() {
        this.articleData.id = this.articleId;
        this.articleData.body = this.saveBody;
        this.articleData.date = this.article.date;
        this.articleData.editFlag = 1;
        this.articleData.title = this.article.title;
        this.articleData.userId = this.article.userId;
        this.articleData.userName = this.article.userName;
        this.articleData.viewCount = this.article.viewCount;

        this.$store.commit('articles/editArticle', this.articleData);
        this.$router.push({ path: '/article/' + this.articleId })
        // this.$router.push({ path: '/article/' + this.$route.params.id })
      },
    },
}
</script>
  
<style>

</style>