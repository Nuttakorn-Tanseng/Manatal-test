<template>
  <!-- <v-app class="mt-10"> -->
    <v-app-bar app color="grey-1">
      <div class="d-flex align-center mr-5" @click="homebtn()">
        <span>News</span>
      </div>

      <!-- <div v-for="(item, index) in menu" :key="index">
        <v-btn text :to="item.link" class="mr-5"> {{ item.name }} </v-btn>
      </div> -->

      <v-spacer></v-spacer>

      <v-btn
        to="/history"
        target="_blank"
        text
      >
        <span class="mr-2">History</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <v-main class="pt-0">
      <router-view> </router-view>
    </v-main> -->
    
  <!-- </v-app> -->
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      menu: [
        {
          name: "Calendar",
          link: "/calendar",
          icon: "",
        }
      ],
    };
  },
  created(){

  },
  methods: {
    homebtn() {
      console.log("go to home page");
      this.$router.push({
        name: "Home",
      });
    },
  }
};
</script>