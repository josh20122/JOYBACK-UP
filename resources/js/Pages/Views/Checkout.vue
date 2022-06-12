<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col>
          <v-stepper outlined v-model="step">
            <v-stepper-step :step="step">
              <div>Delivery Adress</div>
              <small>hehehhe</small>
            </v-stepper-step>
            <v-stepper-content step="1">
              <Address></Address>
            </v-stepper-content>
            <v-stepper-step step="1">
              <div>Pick up Station</div>
              <small>hehehhe</small>
            </v-stepper-step>
            <v-stepper-content step="2">
              <Station />
            </v-stepper-content>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Address from "../Components/Checkout/Address.vue";
import Station from "../Components/Checkout/Station.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: { Navigation, Address, Station },
  data() {
    return {
      step: 2,
    };
  },
};
</script>

<style>
</style>