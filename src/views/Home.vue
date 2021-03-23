<template>
  <div class="home mt-10 mr-10 ml-10">
    <v-row justify="end" class="mr-10">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">Filter</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(source, index) in sources" :key="index">
            <v-list-item-title>{{ sources.id }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-row class="">
      <v-col cols="4"> </v-col>
      <v-col cols="4">
        <v-text-field v-model="text" label="search" required @input="search">
        </v-text-field>
      </v-col>
      <!-- <v-col cols="2">
        <v-progress-circular
          indeterminate
          color="primary"
          v-if="loading"
        ></v-progress-circular>
      </v-col> -->
    </v-row>
    <v-row class="mb-15" v-if="headlines">
      <v-col
        cols="3"
        v-for="(headline, index) in headlines.articles"
        :key="index"
        ><v-card class="mx-auto mt-10">
          <v-img
            :src="headline.urlToImage"
            height="200px"
            gradient=" rgba(0,0,0,0.2), rgba(0,0,0,0.4)"
          >
          </v-img>

          <v-card-title class="black--text">
            <h5 v-if="headline.title" class="font-weight-medium">
              {{ headline.title.slice(0, 70) }}
            </h5>
          </v-card-title>
          <v-card-subtitle class="text black--text" v-if="headline.description">
            {{ headline.description.slice(0, 70) }}...
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn color="blue lighten-2" text @click="readMore(headline)">
              Read more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      loading: false,
      API_KEY: "16ef75bed2ae4af7a9ca74bfabe604d3",
      headlines: null,
      sources: null,
    };
  },
  created() {
    this.getHeadlines();
    this.getSources();
        // const today = moment().format('YYYY-MM-DD');

  },
  computed: {},
  updated() {
    this.headlines = this.$store.state.headlines;
  },
  methods: {
    getHeadlines() {
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
    filter() {
      // X.filter((select: any) => select.channelType === 'voice');
    },
  },
};
</script>
