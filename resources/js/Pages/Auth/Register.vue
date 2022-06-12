<template>
  <v-app>
    <v-main class="pic">
      <v-container fluid class="fill-height pa-0">
        <v-row justify="center">
          <v-col>
            <v-card outlined class="pa-0 mx-auto border-red" max-width="500">
              <v-card-text class="text-center pb-0 display-1">
                Register
              </v-card-text>
              <v-card-text>
                <v-card-subtitle class="pa-0 text-center"
                  >Create your account. It's free and only takes a
                  minute.</v-card-subtitle
                >
                <v-form class="mx-auto">
                  <v-container class="">
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Name"
                          v-model="form.name"
                          :error-messages="errors.name"
                          :counter="10"
                          prepend-icon="mdi-account"
                          hint="Name must be less than 10 characters"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="E-mail"
                          v-model="form.email"
                          :error-messages="errors.email"
                          prepend-icon="mdi-mail"
                          hint="please enter a valid email"
                          counter="50"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          v-model="form.password"
                          :error-messages="errors.password"
                          :type="showeye ? 'password' : 'text'"
                          prepend-icon="mdi-lock"
                          :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showeye = !showeye"
                          hint="Password must be at least 8 characters"
                          counter="50"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Confirm Password"
                          v-model="form.password_confirmation"
                          type="password"
                          :error-messages="errors.password_confirmation"
                          prepend-icon="mdi-lock"
                          hint="Password Confirmation must match the given password"
                          counter="50"
                          required
                        ></v-text-field>
                        <v-checkbox
                          label="I am not a robot"
                          v-model="value"
                          value="value"
                          color="indigo"
                        ></v-checkbox>
                      </v-col>
                    </v-row>

                    <v-btn class="" block color="success" @click="submit()"
                      >submit</v-btn
                    >
                    <v-card-subtitle>
                      Already have an account,
                      <Link href="/auth/login"> login</Link>
                    </v-card-subtitle>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";
export default {
  components: {
    Link,
  },
  methods: {
    submit() {
      Inertia.post("/auth/register", this.form, {
        onStart: () => {
          this.loading = true;
        },
      });
    },
  },
  data() {
    return {
      loading: false,
      showeye: true,
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  props: {
    errors: {
      type: Object,
      required: false,
      default: null,
    },
  },
};
</script>

<style>
</style>