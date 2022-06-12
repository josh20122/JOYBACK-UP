<template>
  <div>
    <Cards :products="topRated" :currency="currency" :title="'Top Rated'" />
  </div>
</template>

<script>
import Cards from "./Cards.vue";
export default {
  components: { Cards },
  props: ["currency"],
  data() {
    return {
      more: {
        link: "/featured",
      },
      topRated: [
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