<template>
  <v-row>
    <v-col cols="12">
      <Product :currency="currency" :products="Like" />
    </v-col>
  </v-row>
</template>

<script>
import Product from "../Product.vue";
export default {
  components: { Product },
  props: ["currency"],
  data() {
    return {
      more: {
        link: "/featured",
      },
      Like: [
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