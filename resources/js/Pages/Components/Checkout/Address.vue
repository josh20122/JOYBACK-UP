<template>
  <v-form v-model="valid">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-row dense>
            <v-col>
              <label for="" class="capitalize">first name</label>

              <v-text-field
                placeholder="First Name"
                dense
                outlined
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col>
              <label for="" class="capitalize">last name</label>
              <v-text-field
                placeholder="Last Name"
                dense
                :rules="rules.required"
                outlined
              ></v-text-field
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <label for="">Phone Number</label>
          <v-text-field
            outlined
            :rules="rules.required"
            dense
            placeholder="+234******"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">State / Region</label>
          <v-select
            outlined
            :rules="rules.required"
            dense
            small-chips
            placeholder="select"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <label for="">City</label>
          <v-select
            outlined
            :rules="rules.required"
            dense
            small-chips
            placeholder="select"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <label for="">Delivery Address</label>
          <v-textarea
            outlined
            dense
            :rules="rules.required"
            co
            placeholder="Street Name / Apartment No"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-btn elevation="" class="white--text" color="blue">next</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="grid text-sm">
            <div><span>First Name : </span> <span>joshua</span></div>
            <div><span>Region : </span> <span>Kitui</span></div>
            <div><span>City : </span> <span>ddjdj</span></div>
            <div><span>Contact : </span> <span>+3536363673</span></div>
            <div class="pt-2 grid justify-end">
              <v-btn small elevation="" color=" blue">
                <v-icon left color="white">mdi-pencil</v-icon>
                <span class="white--text">Edit</span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: [(v) => !!v || "This field is required"],
      },
    };
  },
};
</script>

<style>
</style>