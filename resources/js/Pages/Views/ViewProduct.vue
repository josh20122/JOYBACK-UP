<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="6" class="">
          <Carousel />
        </v-col>
        <v-col cols="12" sm="6" class="mt-md-6 ">
          <Brief />
        </v-col>

        <v-col cols="12" class="">
          <Description />
        </v-col>
        <v-col cols="12" class="">
          <CustomerReviews />
        </v-col>
        <v-col cols="12" class="">
          <RelatedProducts />
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Brief from "../Components/Product/Brief.vue";
import Carousel from "../Components/Product/Carousel.vue";
import CustomerReviews from "../Components/Product/CustomerReviews.vue";
import Description from "../Components/Product/Description.vue";
import RelatedProducts from "../Components/Product/RelatedProducts.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: {
    Navigation,
    Carousel,
    Brief,
    RelatedProducts,
    Description,
    CustomerReviews,
  },
};
</script>

<style>
</style>