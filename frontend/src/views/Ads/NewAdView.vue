<template>
  <v-container fluid fill-height>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            name="title"
            label="Ad Title"
            type="text"
            v-model="title"
            :rules="[(v) => !!v || 'Title is required']">
          </v-text-field>
          <v-textarea
            name="description"
            label="Ad Description"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Description is required']"
            class="mb-3">
          </v-textarea>
        </v-form>
        <v-layout row>
          <!-- первый блок -->
          <v-flex xs12>
            <v-btn class="mt-3" color="warning">
              Upload
              <v-icon right dark>mdi-cloud- upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <!-- конец первого блока -->
        <v-layout row>
          <!-- второй блок -->
          <v-flex xs12>
            <img
              src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
              height="150"
              class="mt-3"
            />
          </v-flex>
        </v-layout>
        <!-- конец второго блока -->
        <v-layout row>
          <!-- третий блок -->
          <v-flex xs12>
            <v-switch v-model="promo" label="Ad to Promo?"></v-switch>
          </v-flex>
        </v-layout>
        <!-- конец третьего блока -->
        <v-layout row>
          <!-- четвертый блок -->
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn color="success" :loading="loading" @click="createAd" :disabled="!valid || loading">Create Ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewAdView',
  data() {
    return {
      valid: false,
      title: "",
      description: "",
      promo: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          desc: this.description,
          promo: this.promo,
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
        };
        this.$store.dispatch("createAd", ad).then(() => {
          this.$router.push('/list')
        }).catch((err) => {
          console.log(err);
        })
        console.log(ad)
      }
    },
  }
};
</script>