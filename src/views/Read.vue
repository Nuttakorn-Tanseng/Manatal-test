<template>
  <div class="mt-15 mb-15">
    <v-row justify="end" class="mr-15 mb-5">
      <h3 class="font-weight-light">Source : {{ headline.source.name }}</h3>
    </v-row>
    <v-row class="mb-10">
      <v-col cols="3"> </v-col>
      <v-col cols="6"
        ><h1>{{ headline.title }}</h1>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"> </v-col>
      <v-col cols="4">
          <v-row justify="end" class="mt-5 mb-5">
          <h5 class="font-weight-light">Auther : {{ headline.author }}</h5>
          <v-spacer></v-spacer>
          <h6>{{ headline.publishedAt }}</h6>
        </v-row>
        <v-row>
          <v-img :src="headline.urlToImage"> </v-img>
        </v-row>
        <v-row justify="start" class="pt-5 pb-5 pl-5 bg-grey">
          <div class="font-weight-light body-2">{{ headline.description }}</div>
        </v-row>
        
        <v-row justify="start" class="mt-10">
          <div class="font-weight-medium body-2">{{ headline.content }}</div>
        </v-row>
        <v-row justify="end" class="mt-10">
          <a :href="headline.url" class="primary--text">Visit the website</a>
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
.bg-grey{
    background-color: rgb(221, 220, 220);
}
</style>