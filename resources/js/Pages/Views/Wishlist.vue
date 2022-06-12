<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col cols="2" class="d-none d-md-inline">
          <side-nav />
        </v-col>
        <v-col cols="12" md="10">
          <v-card outlined>
            <v-card-title class="py-6 pl-6">
              <v-row>
                <div class="text-lg text-gray-900">Wishlist</div>
              </v-row>
            </v-card-title>
            <v-divider class=""></v-divider>
            <v-card-text class="px-2">
              <v-row>
                <v-col v-for="n in 10" :key="n" cols="12" md="3" sm="6">
                  <v-hover v-slot="{ hover }">
                    <v-sheet
                      outlined
                      :elevation="hover ? '3' : '0'"
                      class="pa-2 rounded-md"
                      rounded="md"
                    >
                      <v-row>
                        <v-col cols="3" sm="12"
                          ><v-img
                            :src="'images/slide-1.jpg'"
                            height="100"
                            class="rounded-sm"
                            alt=""
                          />
                        </v-col>
                        <v-col cols="6" sm="12">
                          <div class="">
                            lejdjdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhd
                          </div>
                        </v-col>
                        <v-col cols="3" class="pr-6 pt-6 pt-md-0" sm="12">
                          <v-row justify="end" class="">
                            <div class="text-gray-900 text-lg">Ksh 3383</div>
                          </v-row>
                          <v-row justify="end">
                            <div class="line-through text-gray-500">
                              sj 37373
                            </div></v-row
                          >
                        </v-col>
                        <v-col cols="12">
                          <div class="grid grid-cols-2 justify-between">
                            <div>
                              <v-btn small elevation="" color="" icon>
                                <v-icon color="red">mdi-delete</v-icon>
                              </v-btn>
                            </div>
                            <div class="grid justify-end">
                              <v-btn small elevation="" icon color="red">
                                <v-icon color="blue ">mdi-cart</v-icon>
                              </v-btn>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import SideNav from "../Components/Home/SideNav.vue";
import Product from "../Components/Product.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: {
    Navigation,
    Product,
    SideNav,
  },
};
</script>

<style>
</style>
Navigation