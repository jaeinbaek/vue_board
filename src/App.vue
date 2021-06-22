<template>
  <v-app id="inspire">
    <v-navigation-drawer
      permanent
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
      <v-avatar 
          class="d-block text-center mx-auto mb-9 white--text headline"
          size="25px"
          color="teal"
      >
        
      </v-avatar>
      <v-icon
        v-for="item in navItems"
        :key="item.title"
        @click="boardRowClick(item.action)"
        link
        size="20"
        class="d-block text-center mx-auto mb-9"
      >{{ item.icon }}</v-icon>
      
    </v-navigation-drawer>
    <!-- Main Container -->
    <v-main
      class="grey lighten-5"
    >
      <!-- Header Container -->
      <v-container
        class=" ml-2 mr-2 mt-2 pb-0 d-flex flex-row"
      >
        <div class="headMsg"> Your Logo Here! </div>
        <!-- <div class="d-flex ml-auto align-center">
          <div 
            class="ml-1 mr-1"
            v-for="item in loginControlItems.login"
            :key="item.value"
          >
            <v-spacer></v-spacer>{{ item.text }}
          </div>
        </div> -->
      </v-container>
      <!-- Main Contaioner -->
      <v-container
      class="ml-2 mt-2"
      >
        <v-card
          width="70vw"
         class="elevation-10"
        >
          <v-sheet min-height="50vh" rounded="lg">
              <router-view></router-view>
          </v-sheet>
        </v-card>
        
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "App",
  components: {
    // BoardList,
  },
  
  created() {
    this.getPosts();
  },
  methods: {
    ...mapActions('articles', ['getPosts']),
    boardRowClick(path) {
      if ( path != this.$router.currentRoute.path ) {
          this.$router.push({ path: path });
      }
    }
  },
  data: () => ({
    navItems: [
      { title: 'HOME', icon: 'mdi-home', action:'/'},
      { title: 'ARTICLES', icon: 'mdi-view-dashboard', action:'/articlelist'},
    ],
    // loginControlItems: {
    //   login: { 
    //     logout: { value:'logout', text: 'LOGOUT', route: 'dummy'},
    //     signUp: { value:'signUp', text: 'SIGN UP', route: 'dummy'},
    //   },
    //   logout: { 
    //     logout: { value:'login', text: 'LOGIN', route: 'dummy'},
    //     signUp: { value:'signUp', text: 'SIGN UP', route: 'dummy'},
    //   }
    // },
    userName: 'BAEKJAEIN'
  })
};
</script>

<style scoped>
  .headMsg { font-family: 'Satisfy', cursive; font-size: 240%;}
</style>
