<template>
  <v-app>
    <v-navigation-drawer app :value="drawer" color="drawer">
      <v-list>
        <v-list-item>
          <v-row justify="start" class="">
            <div>
              <v-img contain max-height="35" :src="'/storage/logo.png'"></v-img>
            </div>
          </v-row>
        </v-list-item>
        <v-divider class=""></v-divider>
        <v-list-item v-for="page in links" :key="page.links">
          <Link :href="page.link">
            <v-list-item-icon class="">
              <v-icon color="grey lighten-4" v-text="page.icon"></v-icon>
            </v-list-item-icon>
          </Link>
          <v-list-item-content class="">
            <Link :href="page.link">
              <v-list-item-title
                class="text-white capitalize"
                v-text="page.page"
              >
              </v-list-item-title>
            </Link>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-for="group in groups"
          :key="group.name"
          v-model="group.active"
          :prepend-icon="group.icon"
          class="white--text"
          color="white"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="white--text"
                v-text="group.title"
              ></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="page in group.pages" :key="page.name">
            <v-list-item-icon>
              <Link :href="page.link">
                <v-icon color="white" v-text="page.icon"> </v-icon>
              </Link>
            </v-list-item-icon>
            <v-list-item-content>
              <Link :href="page.link">
                <v-list-item-title
                  class="white--text"
                  v-text="page.name"
                ></v-list-item-title>
              </Link>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="blue darken-1" app>
      <v-row class="" justify="space-between">
        <v-col>
          <div class="grid justify-start">
            <v-btn
              @click="drawer = !drawer"
              icon
              elevation=""
              color="grey lighten-4"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col>
          <div class="flex justify-end align-middle space-x-2">
            <div class="white--text pt-2">Admin</div>
            <v-avatar>
              <v-img :src="'/storage/slide-1.jpg'"> </v-img>
            </v-avatar>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <slot> </slot>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { page: "dashboard", link: "/admin/dashboard", icon: "mdi-menu" },
        {
          page: "customers",
          link: "/admin/users",
          icon: "mdi-account-multiple",
        },
      ],
      groups: [
        {
          title: "Cartegories",
          active: false,
          icon: "mdi-menu",
          pages: [
            {
              name: "All Categories",
              link: "/admin/cartegory",
              icon: "mdi-menu",
            },
            {
              name: "Create Category",
              link: "/admin/cartegory/create",
              icon: "mdi-menu",
            },
          ],
        },
        {
          title: "Sub categories",
          active: false,
          icon: "mdi-menu",
          pages: [
            {
              name: "All Categories",
              link: "/admin/subcategory/all",
              icon: "mdi-menu",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>