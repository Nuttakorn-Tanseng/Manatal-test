<template>
  <v-app-bar app color="grey-1">
    <div class="d-flex align-center mr-5" @click="homebtn()">
      <span>News</span>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/history" target="_blank" text>
      <span class="mr-2">History</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <!-- <v-dialog
      v-model="dialog"
      width="500"
    >
    <v-card>
      <v-row justify="center"><h1>History</h1></v-row>
      <v-timeline>
        <v-timeline-item>timeline item</v-timeline-item>
        <v-timeline-item class="text-right"> timeline item </v-timeline-item>
        <v-timeline-item>timeline item</v-timeline-item>
      </v-timeline>
    </v-card>
    </v-dialog> -->
  </v-app-bar>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // dialog: true
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