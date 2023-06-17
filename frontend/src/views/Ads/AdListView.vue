<template>
  <v-container>
    <v-card v-for="ad in ads" :key="ad.id" class="mb-3" max-width="1000">
      <v-row>
        <v-col xs="4">
          <v-img :src="ad.src" height="200px" cover></v-img>
        </v-col>
        <v-col xs="8">
          <h2 class="text--primary">{{ ad.title}}</h2>
          <p style="height: 100px; overflow: hidden; text-overflow: ellipsis;">{{ ad.desc}}</p>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">Open</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'AdView',
    computed: {
      ads() {
        return this.$store.getters.myAds;
      }
    }
  };
</script>