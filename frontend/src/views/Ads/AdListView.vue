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
    data() {
      return {
        ads: [
          {
            title: "First",
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            promo: true,
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            id: "1",
          },
          {
            title: "Second",
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            promo: true,
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            id: "2",
          },
          {
            title: "Third",
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            promo: true,
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            id: "3",
          },
          {
            title: "Fouth",
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            promo: true,
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            id: "4",
          },
        ],
      };
    },
  };
</script>