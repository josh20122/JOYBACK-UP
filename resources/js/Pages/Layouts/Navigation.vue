<template>
  <v-app>
    <v-app-bar app flat dense fade-img-on-scroll>
      <v-container class="py-0 fill-height">
        <v-img
          max-width="70"
          transition="expand-transition"
          contain
          :src="'images/logo.png'"
        ></v-img>
        <v-spacer></v-spacer>
        <v-responsive class="" max-width="260">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            placeholder="Search ..."
            rounded
            dense
            hide-details=""
            outlined
          >
          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-app-bar bottom app dense hide-on-scroll class="d-sm-none">
      <div class="flex justify-between">
        <Link
          v-for="bottom in buttons"
          class="text-center"
          :key="bottom.link"
          href=""
        >
          <v-icon v-text="bottom.icon"></v-icon>
          <div class="text-xs capitalize" v-text="bottom.page"></div>
        </Link>
      </div>
    </v-app-bar>

    <v-main class="main">
      <slot> </slot>
    </v-main>

    <v-footer padless color="main" class="d-none">
      <v-container class="">
        <v-row>
          <v-col cols="3">
            <div class="font-bold capitalize">contact</div>
            <div v-for="contact in contacts" :key="contact.item">
              <div class="font-bold" v-text="contact.item + ' :'"></div>
              <div v-text="contact.value"></div>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="font-bold capitalize">About Us</div>
            <div v-for="item in links.about" :key="item.page">
              <Link v-text="item.page" :href="item.link"> </Link>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="font-bold capitalize">My Account</div>
            <div v-for="item in links.account" :key="item.page">
              <Link v-text="item.page" :href="item.link"> </Link>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="font-bold capitalize">Customer Service</div>
            <div v-for="item in links.customer" :key="item.page">
              <Link v-text="item.page" :href="item.link"> </Link>
            </div>
          </v-col>
          <v-col>
            <div class="grid text-center">
              <div class="underline font-bold capitalize mb-2">follow us</div>
              <div>
                <Link v-for="icon in icons" :key="icon.link" :href="icon.link">
                  <v-btn small elevation="" icon color="">
                    <v-icon color="" v-text="icon.icon"></v-icon>
                  </v-btn>
                </Link>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Link from "@inertiajs/inertia-vue";
export default {
  props: {
    title: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      buttons: [
        { page: "home", icon: "mdi-home-circle", link: "/" },
        { page: "cartegories", icon: "mdi-menu", link: "/categories" },
        { page: "wishlist", icon: "mdi-heart", link: "/wishlist" },

        { page: "cart", icon: "mdi-cart", link: "/cart" },
        {
          page: "Account",
          icon: "mdi-account-circle-outline",
          link: "/account",
        },
      ],
      drawer: false,
      icons: [
        { icon: "mdi-facebook", link: "www.facebook.com" },
        { icon: "mdi-twitter", link: "www.twitter.com" },
        { icon: "mdi-instagram", link: "www.instagrem.com" },
        { icon: "mdi-pintrest", link: "www.pintrest.com" },
      ],
      contacts: [
        { item: "contact", value: "Thika 9999" },
        { item: "phone", value: "+254627272" },
        { item: "email", value: "sgshshsj@sjsjs.com" },
        { item: "hours", value: "all time" },
      ],
      links: {
        about: [
          { page: "about us", link: "/about" },
          { page: "privacy policy", link: "/privacy" },
          { page: "terms & conditions", link: "/terms" },
          { page: "Contact us", link: "/contact" },
        ],
        account: [
          { page: "my account", link: "/account" },
          { page: "view cart", link: "/cart" },
          { page: "order history", link: "/orders" },
          { page: "wish list", link: "/orders" },
          { page: "newsletter", link: "/newsletter" },
        ],
        customer: [
          { page: "help center", link: "/help" },
          { page: "returns", link: "/return " },
          { page: "shipping", link: "/shipping" },
          { page: "gift card", link: "/gift" },
          { page: "Track order", link: "/track" },
        ],
      },
    };
  },
};
</script>

<style>
</style>