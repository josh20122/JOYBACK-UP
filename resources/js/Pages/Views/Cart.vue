<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col class="" cols="12" sm="9">
          <v-card>
            <v-card-text class="pb-0"
              ><div class="text-xl text-gray-900">Cart</div></v-card-text
            >
            <v-divider class=""></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col v-for="n in 8" :key="n">
                  <v-row dense>
                    <v-col cols="2">
                      <v-img height="100" :src="'images/slide-1.jpg'"></v-img>
                    </v-col>
                    <v-col cols="7">
                      <div class="text-lg text-gray-900 truncate">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Necessitatibus et, laboriosam quae quisquam
                        praesentium blanditiis nemo nisi aut sed ipsam pariatur
                        reiciendis provident fuga in recusandae temporibus
                        suscipit est natus.
                      </div>
                      <div>
                        sehher: <span class="text-gray-900">whatever</span>
                      </div>
                      <div>in shjsjsj</div>
                    </v-col>
                    <v-col cols="3" class="pa-0 ma-0">
                      <div class="grid justify-end">
                        <div class="text-lg grid justify-end text-gray-900">
                          Ksh 737373
                        </div>
                        <div class="grid justify-end">Ksh 373737</div>
                        <div
                          class="px-1 grid justify-end font-semibold text-white"
                        >
                          <span class="bg-green-500 rounded-md px-2">
                            -15%
                          </span>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class="mt-2">
                      <v-row justify="space-between px-2">
                        <v-btn
                          small
                          elevation=""
                          outlined
                          color="blue lighten-1"
                        >
                          <v-icon left color="blue">mdi-delete</v-icon>
                          <span>remove</span>
                        </v-btn>
                        <div
                          class="
                            grid grid-cols-3
                            border-2 border-blue-500
                            rounded-md
                          "
                        >
                          <button
                            class="
                              bg-blue-500
                              px-2
                              rounded-sm
                              font-semibold
                              text-white
                            "
                          >
                            -
                          </button>

                          <div class="mx-auto">22</div>
                          <button
                            class="
                              bg-blue-500
                              px-2
                              rounded-sm
                              font-semibold
                              text-white
                            "
                          >
                            +
                          </button>
                        </div>
                      </v-row>
                    </v-col>
                    <v-col>
                      <v-divider class="my-4"></v-divider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" class="d-none d-sm-inline">
          <v-card>
            <v-card-text>
              <div class="uppercase">cart summary</div>
            </v-card-text>
            <v-divider class=""></v-divider>
            <v-card-text>
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span class="text-gray-900 text-lg">Lsh 9,000</span>
              </div>
              <div class="text-xs">Delivery fees not included</div>
            </v-card-text>
            <v-card-text>
              <v-btn elevation="" block color="blue" class="white--text">
                Checkout (Ksh 37373)
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <Product :currency="'Ksh'" :products="featured" />
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Product from "../Components/Product.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: { Navigation, Product },
  data() {
    return {
      more: {
        link: "/featured",
      },

      featured: [
        {
          title: "this is a test product which is featured",
          pricenow: 38889,
          offprice: 38398,
        },
        {
          title: "this is a test product which is featured",
          pricenow: 200,
          offprice: 500,
        },
        {
          title: "this is a test product which is featured",
          pricenow: 200,
          offprice: 500,
        },
        {
          title: "this is a test product which is featured",
          pricenow: 200,
          offprice: 500,
        },
        {
          title: "this is a test product which is featured",
          pricenow: 200,
          offprice: 500,
        },
        {
          title: "this is a test product which is featured",
          pricenow: 200,
          offprice: 500,
        },
      ],
    };
  },
};
</script>

<style>
</style>