<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col v-for="card in cards" :key="card.link" cols="12" sm="6" md="4">
          <v-card :color="card.color">
            <v-card-text>
              <v-row>
                <v-col cols="7">
                  <div class="grid">
                    <div
                      class="text-gray-100 text-3xl font-extrabold"
                      v-text="card.value"
                    ></div>
                    <div
                      class="text-gray-50 capitalize text-lg font-semibold"
                      v-text="card.text"
                    ></div>
                  </div>
                </v-col>
                <v-col cols="5">
                  <div class="grid justify-end">
                    <v-icon x-large v-text="card.icon"></v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-row>
              <v-col cols="12">
                <v-btn depressed tile block small :color="card.dark">
                  <span class="text-white font-semibold">read more</span>
                  <v-icon class="white--text" small color="white"
                    >mdi-arrow-right</v-icon
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  data() {
    return {
      cards: [
        {
          label: "test card one",
          color: "orange",
          link: "/more",
          dark: "orange darken-1",
          text: "All Users",
          value: 968,
          icon: "mdi-account",

          amount: 353,
        },
        {
          label: "test card one",
          color: "yellow darken-2",
          link: "/more",
          dark: "yellow darken-3",
          text: "All Sellers",
          value: 968,
          icon: "mdi-basket",

          amount: 353,
        },
        {
          label: "test card one",
          color: "purple",
          link: "/more",
          dark: "purple darken-1",
          text: "Delivery Boys",
          value: 968,
          icon: "mdi-car",

          amount: 353,
        },
        {
          label: "test card one",
          color: "red",
          link: "/more",
          dark: "red darken-1",
          text: "Today's Sells",
          value: 968,
          icon: "mdi-cart",

          amount: 353,
        },
        {
          label: "test card one",
          color: "indigo",
          link: "/more",
          dark: "indigo darken-1",
          text: "today's pending deliveries",
          value: 968,
          icon: "mdi-motorbike",

          amount: 353,
        },
      ],
    };
  },
};
</script>

<style>
</style>