<template>
  <v-app dark class="airbnb">
    <v-app-bar flat :clipped-left="clipped" fixed app class="accent">
      <div>
        <span v-if="small" class="airbnb-black text-15"> Covidus </span>
        <span v-else class="airbnb-black text-20"> Covidus </span>
      </div>
      <v-spacer />
      <div v-if="!small" class="d-flex flex-row">
        <v-list
          class="d-flex flex-row accent mr-4"
          v-for="item in items"
          :key="item"
        >
          <v-list-item router exact :to="item.to">
            <v-list-item-content>
              <v-list-item-title class="text-15">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div v-if="small" class="d-flex flex-row">
        <v-btn
          color="accent"
          class="text-capitalize py-6"
          depressed
          to="/signin"
        >
          <span class="airbnb-medium primary--text text-15">Login</span>
        </v-btn>
        <v-btn
          color="secondary"
          class="text-capitalize py-5 mt-1"
          depressed
          to="/signup"
        >
          <span class="airbnb-medium text-15">Sign Up</span>
        </v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn
          color="accent"
          class="text-capitalize py-6 px-11"
          depressed
          to="/signin"
        >
          <span class="airbnb-medium primary--text text-15">Login</span>
        </v-btn>
        <v-btn
          color="secondary"
          class="text-capitalize py-6 px-11"
          depressed
          to="/signup"
        >
          <span class="airbnb-medium">Sign Up</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="airbnb">
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app class="airbnb d-flex justify-center pa-4">
      <span v-if="small" class="text-10">
        Developed by the Google Andela Scholarship Team Web-02
      </span>
      <span v-else>
        Developed by the Google Andela Scholarship Team Web-02
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Share Your Story',
          to: '/contact',
        },
        {
          title: 'Information Board',
          to: '/contact',
        },
        {
          title: 'Donate',
          to: '/',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Covidus',
    }
  },
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

