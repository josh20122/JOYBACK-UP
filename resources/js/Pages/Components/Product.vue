<template>
  <v-card color="main" flat>
    <v-card-title class="py-6">
      <v-row justify="space-between">
        <div class="text-lg text-gray-900" v-text="title"></div>
        <Link class="text-sm" v-if="more" :href="more">
          <span>more</span>
          <v-icon color="blue">mdi-menu-right</v-icon>
        </Link>
      </v-row>
    </v-card-title>
    <v-row>
      <v-col
        class="pa-0"
        v-for="product in products"
        :key="product.title"
        md="2"
        sm="4"
        cols="6"
      >
        <v-hover v-slot="{ hover }">
          <v-sheet rounded="sm" class="ma-1" :elevation="hover ? '3' : '0'">
            <div class="grid">
              <v-img class="rounded-sm" height="180" :src="'images/estate.jpg'">
                <div
                  class="
                    absolute
                    rounded-md
                    bg-green-500
                    text-white
                    right-1
                    top-1
                    px-1
                    text-[13px]
                  "
                  v-text="
                    (
                      ((product.offprice - product.pricenow) /
                        product.offprice) *
                      100
                    ).toFixed(0) + '% OFF'
                  "
                >
                  test discount
                </div>
              </v-img>
              <div class="grid px-2 pt-2 pb-6">
                <div
                  :class="hover ? 'text-orange-500' : ''"
                  class="truncate"
                  v-text="product.title"
                ></div>
                <div
                  class="text-orange-500 font-semibold"
                  v-text="currency + ' ' + product.pricenow"
                ></div>
                <div
                  class="line-through text-xs"
                  v-text="currency + ' ' + product.offprice"
                ></div>
                <div>
                  <v-rating
                    :value="product.rating"
                    background-color="yellow lighten-3"
                    color="yellow"
                    small
                    dense
                    readonly
                  ></v-rating>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["products", "currency", "title", "more"],
};
</script>

<style>
</style> 