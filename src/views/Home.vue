<template>
  <div class="home mt-15">
    <v-row class="">
      <v-col cols="4"> </v-col>
      <v-col cols="4">
        <v-text-field v-model="text" label="search" required @input="search">
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-progress-circular
          indeterminate
          color="primary"
          v-if="loading"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row class="mb-15" v-if="headlines">
      <v-col
        cols="3"
        v-for="(headline, index) in headlines.articles"
        :key="index"
        ><v-card class="mx-auto mt-10">
          <v-img :src="headline.urlToImage" height="200px"></v-img>

          <v-card-title class="header"> {{ headline.title }} </v-card-title>
          <br />

          <v-card-subtitle class="text">
            {{ headline.description }}
          </v-card-subtitle>
          <br />

          <v-card-actions>
            <v-btn color="blue lighten-2" text :href="headline.url">
              Go to website
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      loading: false,
      API_KEY: "099148be22804e849a0c6fe022b7cf5e",
      headlines: null,
    };
  },
  created() {
    this.$store.dispatch("getHeadlines");
    this.headlines = this.$store.state.headlines
  },
  computed: {
   
  },
  updated() {
    this.headlines = this.$store.state.headlines;
  },
  methods: {
    search() {
      // this.loading = true;

      this.$store
        .dispatch("searchHeadlines", {
          text: this.text,
        })
        // .then(() => {
        //   this.loading = false;
        // });
    },
  },
};
</script>
