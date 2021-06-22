<template>
    <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="boardRowClick(item.action)"
            link
        >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'HOME', icon: 'mdi-home', action:'/'},
                { title: 'ARTICLES', icon: 'mdi-view-dashboard', action:'/articlelist'},
            ],
        }
    },
    methods: {
        boardRowClick(path) {
            if ( path != this.$router.currentRoute.path ) {
                this.$router.push({ path: path });
            }
        }
    }
}
</script>

<style>

</style>