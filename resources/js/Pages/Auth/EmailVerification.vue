<template>
  <v-app>
    Click this link to verify your email
    <v-container class="">
      <v-row>
        <v-col>
          <v-btn @click="submit()" small elevation="" block color="success"
            >Verify email</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  data() {},
  methods: {
    submit() {
      Inertia.post(`/auth/email/verification-notification`);
    },
  },
};
</script>

<style>
</style>