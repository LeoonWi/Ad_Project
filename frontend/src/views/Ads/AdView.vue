<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="mt-5">
          <h1>Ad</h1>
          <v-img
            height="300px"
            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
          ></v-img>
          <v-card-text
            ><h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions
            ><v-spacer></v-spacer>
            <modal-dialog :ad="ad" v-if="isOwner"></modal-dialog>
            <buy-ad-modal :ad="ad"></buy-ad-modal>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal.vue';

export default {
  name: 'AdView',
  props: ['id'],
  data() {
    return {

    }
  },
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
    isOwner() {
      if (this.$store.getters.user !== null) { // Без условия крашит сайт, если пользователь не авторизован
        return this.ad.userId === this.$store.getters.user.id;
      }
    }
  },
  components: {
    'modal-dialog': EditAdModal
  }
};
</script>