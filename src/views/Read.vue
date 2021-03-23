<template>
  <div class="mt-15">
    <v-row justify="end" class="mr-15 mb-5">
      <a href="">{{ headline.source.name }}</a>
    </v-row>
    <v-row justify="center" class="mb-10">
      <v-col cols="3"> </v-col>
      <v-col cols="6"
        ><h1>{{ headline.title }}</h1>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"> </v-col>

      <v-col cols="4">
        <v-row>
          <v-img :src="headline.urlToImage"> </v-img>
        </v-row>
        <v-row justify="end" class="mt-10">
          <h5 class="font-weight-light">Auther : {{ headline.author }}</h5>
          <v-spacer></v-spacer>
          <h6>{{ headline.publishedAt }}</h6>
        </v-row>
        <v-row justify="start" class="mt-10">
          <h4 class="font-weight-medium">{{ headline.description }}</h4>
        </v-row>
        <v-row justify="end" class="mt-10">
          <a :href="headline.url" class="primary--text">Source</a>
          <!-- <a>{{ headline.publishedAt }}</a> -->
        </v-row>
      </v-col>

      <v-col cols="4"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headline: null,
    };
  },
  created() {
    this.headline = this.$route.params.headline;
    if (!this.$route.params.headline) {
      console.log("Parameter is required");
      this.$router.push({
        name: "Home",
      });
    }
    console.log(this.$route.params.headline);
  },
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style>
</style>