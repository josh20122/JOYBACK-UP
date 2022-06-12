<template>
  <Navigation>
    <v-container class="">
      <v-row class="ma-0 pa-0">
        <v-col cols="3" class="px-0 ma-0 pa-0 d-none d-sm-flex">
          <SideNav />
        </v-col>
        <v-col cols="12" sm="9" class="ma-0 pa-0">
          <Carousel />
        </v-col>
        <v-col cols="12" class="d-none">
          <Products />
        </v-col>
        <v-col cols="12" class="pa-0">
          <Featured :currency="currency" />
        </v-col>
        <v-col cols="12" class="">
          <TopRated :currency="currency" class="" />
        </v-col>
        <v-col cols="12">
          <Like :currency="currency" />
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Carousel from "../Components/Home/Carousel.vue";
import Featured from "../Components/Home/Featured.vue";
import Like from "../Components/Home/Like.vue";
import Products from "../Components/Home/Products.vue";
import SideNav from "../Components/Home/SideNav.vue";
import TopRated from "../Components/Home/TopRated.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: {
    Navigation,
    SideNav,
    Carousel,
    Products,
    Featured,
    TopRated,
    Like,
  },
  data() {
    return {
      currency: "Ksh",
    };
  },
};
</script>

<style>
</style>