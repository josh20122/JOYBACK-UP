<template>
  <v-sheet rounded="lg" outlined class="ma-0 pa-0">
    <v-list color="transparent" class="ma-0 pa-0">
      <v-list-item v-for="n in 5" :key="n" link>
        <v-list-item-content>
          <v-list-item-title> List Item {{ n }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item link color="grey lighten-4">
        <v-list-item-content>
          <v-list-item-title> Refresh </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      links: ["Dashboard", "Messages", "Profile", "Updates"],
    };
  },
};
</script>

<style>
</style>