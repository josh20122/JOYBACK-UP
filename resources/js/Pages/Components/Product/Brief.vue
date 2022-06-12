<template>
  <div class="grid space-y-2">
    <div class="text-2xl font-bold">Men Black Sport Shoes</div>
    <div class="flex">
      <v-rating
        background-color="yellow"
        half-increments
        :value="4.2"
        color="yellow darken-2"
      ></v-rating>
    </div>
    <span>( 6 reviews )</span>
    <v-divider class="w-14"></v-divider>
    <div class="flex text-lg space-x-2 font-bold">
      <span class="line-through text-gray-500"> $ 33,338 </span>
      <span>$24,727</span>
    </div>
    <div>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </div>
    <div class="flex">
      <span> Color :</span>
    </div>
    <div class="flex space-x-2">
      <div class="uppercase">size :</div>
      <div class="flex space-x-2">
        <div class="border-2 px-1 uppercase">l</div>
        <div class="border-2 px-1 uppercase">m</div>
        <div class="border-2 px-1 uppercase">s</div>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="grid grid-cols-2">
      <div
        class="
          flex
          grid-cols-5
          border-2
          font-semibold
          px-2
          space-x-3
          w-min
          rounded-md
        "
      >
        <div>-</div>
        <v-divider vertical></v-divider>
        <div>33</div>
        <v-divider vertical class=""></v-divider>
        <div class="">+</div>
      </div>
      <div class="-ml-24">
        <v-btn elevation="" class="white--text" tile color="blue"
          >Add to cart</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 626276272,
    };
  },
  methods: {
    toLocaleString() {
      var str = num.toString().split(".");
      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }
      return str.join(".");
    },
  },
};
</script>

<style>
</style>