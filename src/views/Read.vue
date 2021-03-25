<template>
  <div class="mt-15 mb-15">
    <NavBar />
    <v-row justify="end" class="mr-15 mb-5">
      <h3 class="font-weight-light">Source : {{ headline.source.name }}</h3>
    </v-row>
    <v-row class="mb-5">
      <v-col cols="3"> </v-col>
      <v-col cols="6"
        ><h1 class="text-center">{{ headline.title }}</h1>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"> </v-col>
      <v-col cols="4">
        <v-row justify="end" class="mt-5 mb-5">
          <h5 v-if="headline.author" class="font-weight-light">
            Auther : {{ headline.author }}
          </h5>
          <v-spacer></v-spacer>
          <h6 v-if="headline.publishedAt">{{ headline.publishedAt }}</h6>
        </v-row>
        <v-row>
          <v-img v-if="headline.urlToImage" :src="headline.urlToImage"> </v-img>
        </v-row>
        <v-row
          v-if="headline.description"
          justify="start"
          class="pt-5 pb-5 pl-5 bg-grey"
        >
          <div class="font-weight-light body-2">{{ headline.description }}</div>
        </v-row>
        <v-row
          v-if="!headline.content"
          justify="start"
          class="pt-5 pb-5 pl-5 mt-15"
        >
          <h3 class="font-weight-medium">Content unavaiable</h3>
          <span
            >The centent is no longer available because there's no data from
            resource or it has been deleted
          </span>
        </v-row>
        <v-row justify="start" class="mt-10">
          <div v-if="headline.content" class="font-weight-medium body-2">
            {{ headline.content.split("[")[0] }}
            <a :href="headline.url" class="primary--text">Read more</a>
          </div>
        </v-row>
      </v-col>
      <v-col cols="4">
        <a href="https://www.manatal.com/">
          <v-img
            class="ml-16 mt-15"
            width="30%"
            src="https://tpc.googlesyndication.com/daca_images/simgad/10965223439829523289"
          ></v-img>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
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
};
</script>

<style>
.bg-grey {
  background-color: rgb(221, 220, 220);
}
</style>