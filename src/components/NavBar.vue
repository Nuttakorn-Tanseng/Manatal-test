<template>
  <v-app-bar app color="red darken-4">
    <div class="d-flex align-center mr-5" @click="homebtn()">
      <v-icon size="50px" color="grey-1">mdi-newspaper</v-icon>
      <h2 class="font-weight-light ml-3 white--text">News</h2>
    </div>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" dark text small>
          <span class="mr-2 font-weight-light">History</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </template>
      <v-list v-if="history">
        <v-list-item-title
          ><center><h3>History</h3></center></v-list-item-title
        >
        <v-list-item v-for="(data, index) in history" :key="index">
          <v-list-item-title>{{ data.title.slice(0, 50) }}</v-list-item-title>
        </v-list-item>
        <!-- <v-divider></v-divider> -->
        <v-list-item-title @click="clearHistory()"
          ><center><a>clear</a></center></v-list-item-title
        >
      </v-list>

      <v-list v-if="!history">
        <v-list-item>
          <v-list-item-title><center>No history</center></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      history: null,
    };
  },
  created() {
    this.history = JSON.parse(localStorage.getItem("history"));
  },
  updated() {
    this.history = JSON.parse(localStorage.getItem("history"));
  },
  methods: {
    homebtn() {
      console.log("go to home page");
      this.$router.push({
        name: "Home",
      });
    },
    clearHistory() {
      localStorage.clear();
      this.history = null;
    },
  },
};
</script>