<template>
    <v-dialog v-model="modal" width="400px">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="warning">Edit</v-btn>
        </template>
        <v-card class="pa-3">
            <!-- Первый блок -->
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-title>
                        <h1 class="text--primary">Edit Ad</h1>
                    </v-card-title>
                </v-col>
            </v-row>
            <!-- Второй блок -->
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-text>
                    <v-text-field
                    name="title"
                    label="Title"
                    type="text"
                    v-model="editedTitle">
                    </v-text-field>
                    <v-textarea
                    name="desc"
                    label="Description"
                    type="text"
                    v-model="editedDesc"
                    class="mb-3">
                    </v-textarea>
                    </v-card-text>
                </v-col>
            </v-row>
            <!-- Третий блок -->
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="onCalcel">Cancel</v-btn>
                        <v-btn @click="onSave" color="success">Save</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'EditAdModal',
    props: ['ad'],
    data() {
        return {
            modal: false,
            editedTitle: this.ad.title,
            editedDesc: this.ad.desc
        }
    },
    methods: {
        onCalcel() {
            this.editedTitle = this.ad.title;
            this.editedDesc = this.ad.desc;
            this.modal = false;
        },
        onSave() {
            if (this.editedTitle !== '' && this.editedDesc !== '') {
                this.$store.dispatch('updateAd', {
                    title: this.editedTitle,
                    desc: this.editedDesc,
                    id: this.ad.id
                });
                this.modal = false;
            }
        }
    }
}
</script>