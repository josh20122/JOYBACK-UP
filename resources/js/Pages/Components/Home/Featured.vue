<template>
  <div>
    <Product
      :more="'/featured'"
      :title="'Featured'"
      :currency="'Ksh'"
      :products="featured"
    />
  </div>
</template>

<script>
import Product from "../Product.vue";
import Cards from "./Cards.vue";
export default {
  components: { Cards, Product },
  props: Product["currency"],
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