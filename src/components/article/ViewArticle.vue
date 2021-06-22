<template>
  <div>
    <v-card class="elevation-0">
      <v-card-text>
        <div>
          {{ article.date }}
          <div v-if="article.editFlag == 1">(edited)</div>
        </div>
        <h1>{{ article.title }}</h1>
        <br>
        <h3>{{ article.userName }}</h3>
        <br />
        <br />
        <p v-html="article.body"></p>
      </v-card-text>
      <v-card-text style="height: 100px; position: relative">
        <!-- Speed Dial Section -->
        <v-speed-dial absolute top right fab v-model="fab">
          <template v-slot:activator>
            <v-btn v-model="fab" color="teal" dark fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <!-- Edit Button -->
          <v-btn fab dark small color="teal" @click="clickEditButton">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <!-- Delete Button with Dialog -->
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab dark small color="red lighten-1" v-bind="attrs" v-on="on">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <!-- Modal Card -->
            <v-card>
              <v-card-title class="headline">WARNING!</v-card-title>
              <v-card-text>IF YOU DELETE, CAN'T RECOVER IT</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal" text @click="dialog = false">OK...CANCEL</v-btn>
                <v-btn color="teal" text @click="clickDeleteButton">DELETE!</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
        </v-speed-dial>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      fab: false
    };
  },
  computed: {
    article() {
      // board articles
      var articles = this.$store.state.articles.articles;
      var viewArticle = articles.find(item => {
        return item.id == this.$route.params.id;
      });
      // 줄바꿈 처리
      viewArticle.body = viewArticle.body.replace(/(?:\r\n|\r|\n)/g, '<br />');
      return viewArticle;
    }
  },
  methods: {
    clickDeleteButton() {
      this.dialog = false 
      // dialog => delete 로직 구현 필요
      this.$store.commit("articles/deleteArticle", this.$route.params.id);
      this.$router.push({ path: "/articlelist/" });
    },
    clickEditButton() {
      this.$router.push({ path: "/articleedit/" + this.$route.params.id });
    }
  },
  created() {
    this.$store.commit("articles/viewArticle", this.$route.params.id);
  }
};
</script>

<style>
</style>