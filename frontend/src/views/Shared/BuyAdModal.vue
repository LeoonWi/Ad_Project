<template>
    <v-dialog v-model="modal" width="400px">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="warning">Buy</v-btn>
        </template>
        <v-card class="pa-3">
            <!-- Первый блок -->
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-title>
                        <h1 class="text--primary">Do you wan't to buy it?</h1>
                    </v-card-title>
                </v-col>
            </v-row>
            <!-- Второй блок -->
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-text>
                        <v-text-field
                        name="name"
                        label="Your name"
                        type="text"
                        v-model="name">
                        </v-text-field>
                        <v-textarea
                        name="Phone"
                        label="Your phone"
                        type="text"
                        v-model="phone">
                        </v-textarea>
                    </v-card-text>
                </v-col>
            </v-row>
            <!-- Третий блок -->
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="onClose">Close</v-btn>
                        <v-btn @click="" color="success">Buy It</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'BuyAdModal',
    props: ['ad'],
    data() {
        return {
            modal: false,
            name: '',
            phone: ''
        }
    },
    methods: {
        onClose() {
            this.modal = false;
        }
    }
}
</script>