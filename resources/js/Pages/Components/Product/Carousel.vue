<template>
  <v-carousel continuous hide-delimiter-background show-arrows>
    <v-carousel-item v-for="(image, index) in images" :key="image" :src="image">
      <div class="grid mt-3 ml-3 space-y-1">
        <div
          class="
            bg-blue-400
            max-w-min
            px-2
            rounded-2xl
            text-white
            font-semibold
            text-sm
          "
        >
          HOT
        </div>
        <div
          class="
            bg-green-400
            max-w-min
            px-2
            rounded-2xl
            text-white
            font-semibold
            text-sm
          "
        >
          {{
            (((innitialPrice - price) / innitialPrice) * 100).toFixed(0) + "%"
          }}
        </div>
        <div class="text-xs font-semibold text-red-500">
          {{ index + 1 + "/" + images.length }}
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      innitialPrice: 36363,
      price: 38383,
      images: [
        "images/slide-1.jpg",
        "images/slide-2.jpg",
        "images/slide-3.png",
      ],
    };
  },
};
</script>

<style>
</style>