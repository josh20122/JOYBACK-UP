<template>
  <Cards
    :currency="currency"
    :products="products"
    :title="'Related Products'"
  />
</template>

<script>
import Cards from "../Home/Cards.vue";
export default {
  components: { Cards },
  props: ["currency", "products", "more", "title"],
};
</script>

<style>
</style>