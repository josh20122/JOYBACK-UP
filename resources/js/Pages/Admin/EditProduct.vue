<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="display-1">Create Product</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12" class="">
          <v-row dense>
            <v-col cols="12">
              <label for="">Cover Image *</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image1"
                placeholder="Cover Image"
                :error-messages="errors.image1"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 2</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image2"
                placeholder="Cover Image"
                :error-messages="errors.image2"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 3</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image3"
                placeholder="Cover Image"
                :error-messages="errors.image3"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 4</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image4"
                placeholder="Cover Image"
                :error-messages="errors.image4"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 5</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image5"
                placeholder="Cover Image"
                :error-messages="errors.image5"
              >
              </v-file-input>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="8" class="">
          <v-card outlined>
            <v-card-title> Product Details </v-card-title>
            <v-divider class=""></v-divider>
            <v-card-text>
              <v-form>
                <v-container class="pa-0">
                  <v-row dense>
                    <v-col cols="12">
                      <label for="">Title *</label>
                      <v-text-field
                        placeholder="Product full title"
                        v-model="form.title"
                        outlined
                        dense
                        :error-messages="errors.title"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Country *</label>
                      <v-text-field
                        placeholder="Please Select"
                        :value="country.country"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <label for="">Product Category *</label>
                      <v-text-field
                        placeholder="Please Select"
                        outlined
                        readonly
                        :value="form.category"
                        item-text="title"
                        item-value="id"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Confirm Currency</label>
                      <v-text-field
                        readonly
                        v-if="form.country"
                        outlined
                        dense
                        :value="country.currency"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Initial Price *</label>
                      <v-text-field
                        placeholder="Product initial price"
                        v-model="form.initial_price"
                        outlined
                        dense
                        :error-messages="errors.initial_price"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Current Price *</label>
                      <v-text-field
                        placeholder="Product current price"
                        v-model="form.price"
                        outlined
                        dense
                        :error-messages="errors.price"
                        :rules="required"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <label for="">Short Description *</label>
                      <v-textarea
                        placeholder="Short product description"
                        v-model="form.short_description"
                        outlined
                        dense
                        :error-messages="errors.short_description"
                        :rules="required"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <label for=""> Full Description (Optional)</label>
                      <VueEditor v-model="form.long_description"> </VueEditor>
                      <div
                        class="text-xs text-red-500"
                        v-text="errors.long_description"
                      ></div>
                      <div v-html="form.long_description"></div>
                    </v-col>
                  </v-row>
                  <v-row>
                    {{ images }}
                    <div class="flex justify-end pb-4 pr-4">
                      <v-btn
                        @click="create()"
                        elevation=""
                        color="blue"
                        class="white--text"
                        >Create Product</v-btn
                      >
                    </div>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="processing"
        :timeout="timeout"
        :color="color"
        tile
        class="white--text"
      >
        <div class="font-sembold text-lg" v-text="text"></div>
      </v-snackbar>
    </v-container>
  </AdminNavigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import { VueEditor } from "vue2-editor";

import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  props: ["errors", "product", "country", "category", "images"],
  layout: AdminNavigation,
  components: { VueEditor },
  data() {
    return {
      required: [(v) => !!v || "This field is required"],
      content: null,
      color: null,
      timeout: null,
      processing: null,
      text: null,
      redirect: false,

      form: {
        image1: null,
        country: this.country.country,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        title: this.product.title,
        category: this.category,
        short_description: this.product.short_description,
        long_description: this.product.long_description,
        price: this.product.price,
        initial_price: this.product.initial_price,
      },
    };
  },
  methods: {
    create() {
      Inertia.post(`/admin/product/store`, this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.color = "yellow darken-3";
          this.text = "Product Upload is Processing ...";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-3";
          this.text = "Product added successfully";
          this.redirect = true;
        },
        onError: () => {
          this.processing = false;
        },
      });
    },
  },
  watch: {
    redirect() {
      Inertia.get("/admin/products");
    },
  },
  computed: {},
};
</script>

<style>
</style>