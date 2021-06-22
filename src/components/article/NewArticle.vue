<template>
  <div>
    <v-card class="elevation-0">
      <v-card-text>
        <h1>NEW ARTICLE</h1>
        Say Something You Want!
        <br>
        <br>
        <v-text-field
            label="Title"
            v-model="articleData.title"
            placeholder="Type Title Here!"
            outlined
            :rules="[() => !!articleData.title || 'This field is required']"
            :error-messages="errorMessages"
            required
          ></v-text-field>
          <v-textarea
          v-model="articleData.body"
          name="input-7-4"
          label="Body"
          outlined
          :rules="[() => !!articleData.body || 'This field is required']"
          :error-messages="errorMessages"
          required
        ></v-textarea>
        <v-btn
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
      articleData: {
        id: '',
        body: '',
        date: '',
        editFlag: 0,
        title: '',
        userId: '',
        userName: '',
        viewCount: 0
      },
      errorMessages: '',
    }
  },  
  watch: {
    name () {
      this.errorMessages = ''
    },
  },
  methods: {
    clickSaveButton() {
      let now = new Date();
      this.articleData.date = now.getFullYear() + '-' + now.getMonth() + 1 + '-' + now.getDate();
      this.articleData.userName = "James Bond";
      // store commit
      this.$store.commit('articles/newArticle', this.articleData);
      this.$router.push({ path: '/articlelist/' })
    }
  }
}
</script>

<style>

</style>