<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <div class="text-lg font-semibold">Product Description</div>
      </v-card-text>
      <v-divider class=""></v-divider>
      <v-card-text v-html="content"> </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>