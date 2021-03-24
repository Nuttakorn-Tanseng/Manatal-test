<template>
  <div class="home mt-10 mr-10 ml-10 mb-15">
    <v-row class="">
      <v-col cols="4"> </v-col>
      <v-col cols="4">
        <v-text-field v-model="text" label="Search" required @input="search">
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-2" icon v-bind="attrs" v-on="on"
              ><v-icon>mdi-filter-variant</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item v-for="(source, index) in sources" :key="index">
              <v-list-item-title @click="selectSource(source.name)">{{
                source.id
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="mb-15" v-if="headlines">
      <v-col
        cols="3"
        v-for="(headline, index) in headlines.articles"
        :key="index"
        ><v-card class="mx-auto mt-10" color="brown lighten-5">
          <v-img
            :src="headline.urlToImage"
            height="200px"
            gradient=" rgba(0,0,0,0.2), rgba(0,0,0,0.4)"
            @click="readMore(headline)"
          >
            <span class="my-span">
              {{ headline.source.name }}
            </span>
          </v-img>

          <v-card-title class="black--text" @click="readMore(headline)">
            <h5 v-if="headline.title" class="font-weight-medium">
              {{ headline.title.slice(0, 70) }}..
            </h5>
          </v-card-title>
          <v-card-subtitle
            class="text black--text font-weight-light"
            v-if="headline"
          >
            {{ headline.publishedAt.split("T")[0] }}
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn color="blue lighten-2" text @click="readMore(headline)">
              Detail
            </v-btn>
            <v-spacer></v-spacer>
            <v-icon @click="editTitle(index)">mdi-dots-vertical</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else justify="center" align="center" class="pa-16">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="80"
        v-if="loading"
      ></v-progress-circular>
    </v-row>
    <v-dialog  v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title> Edit title </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="headlines.articles[selectedIndex].title"
                :rules="nameRules"
                :counter="100"
                label="Title"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text @click="dialog = false"> Save </v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      loading: false,
      API_KEY: "16ef75bed2ae4af7a9ca74bfabe604d3",
      headlines: null,
      sources: null,
      selectedSource: null,
      dialog: false,
      nameRules: [
        v => !!v || 'Title is required',
        v => v.length <= 100 || 'Title must be less than 100 characters',
      ],
      selectedIndex: null
    };
  },
  created() {
    this.getHeadlines();
    this.getSources();
  },
  computed: {},
  updated() {
    this.headlines = this.$store.state.headlines;
    this.checkloading();
  },
  methods: {
    getHeadlines() {
      this.loading = true;
      this.$store.dispatch("getHeadlines");
      this.headlines = this.$store.state.headlines;
    },
    search() {
      if (this.text != "") {
        this.$store.dispatch("searchHeadlines", {
          text: this.text,
        });
      } else {
        this.headlines = this.$store.state.headlines;
      }
    },
    readMore(headline) {
      console.log("param is ", headline);
      this.$router.push({
        name: "Read",
        params: { headline: headline },
      });
    },
    getSources() {
      axios
        .get(`https://newsapi.org/v2/sources?apiKey=${this.API_KEY}`)
        .then((response) => {
          this.sources = response.data.sources;
          console.log("Sources : ", this.sources);
        });
    },
    selectSource(name) {
      // console.log(this.headlines);
      // this.headlines.article.filter((select) => select.source.name === name);
    },
    checkloading() {
      if (this.headlines != null) {
        this.loading = false;
      }
    },
    editTitle(index){
      this.dialog = true;
      this.selectedIndex = index;
    }
  },
};
</script>
<style>
.my-span {
  background-color: blue;
  color: white;
  font-weight: bold;
  margin-right: 0;
  float: right;
}
</style>
