<template>
  <v-app-bar app color="red darken-4">
    <div class="d-flex align-center mr-5" @click="homebtn()">
      
      <v-icon size="50px" color="grey-1">mdi-newspaper</v-icon>
      <h2 class="font-weight-light ml-3 white--text">News</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/history" target="_blank" dark text small>
      <span class="mr-2 font-weight-light">History</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

  </v-app-bar>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    };
  },
  created() {},
  methods: {
    homebtn() {
      console.log("go to home page");
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>