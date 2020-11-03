<template>
  <v-app dark class="airbnb">
    <v-app-bar flat :clipped-left="clipped" fixed app class="accent">
      <div>
        <v-btn to="/" color="accent" depressed>
          <span v-if="small" class="airbnb-black primary--text text-15">
            Covidus
          </span>

          <span v-else class="airbnb-black primary--text text-20">
            Covidus
          </span>
        </v-btn>
      </div>
      <v-spacer />
      <div v-if="!small" class="d-flex flex-row">
        <v-list
          class="d-flex flex-row accent mr-4"
          v-for="item in items"
          :key="item"
          active-class="active-items"
        >
          <v-list-item router exact :to="item.to" active-class="active-items">
            <v-list-item-content>
              <v-list-item-title class="text-15 primary--text">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div v-if="small" class="d-flex flex-row">
        <div
          v-if="$store.state.localStorage.auth"
          class="d-flex flex-row"
        ></div>
        <div class="d-flex flex-row" v-else>
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
        </div>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              class="primary--text"
              v-for="(item, index) in items"
              :key="index"
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="primary--text"
              v-if="$store.state.localStorage.auth"
              to="/"
            >
              <v-list-item-title @click="logout()">Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <div
          v-if="$store.state.localStorage.auth"
          class="d-flex flex-row mx-4 pt-1"
        >
          <span class="text-15 d-flex align-center"> Welcome,</span
          ><span class="airbnb-bold text-20 text-capitalize pl-1 pt-2"
            >{{ $store.state.localStorage.auth.name }}
          </span>
          <v-menu offset-y open-on-hover close-on-click>
            <template v-slot:activator="{ on }">
              <v-avatar class="mx-2">
                <img
                  v-on="on"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </template>

            <v-list>
              <v-list-item nuxt @click="logout()" to="/">
                <v-list-item-title class="primary--text"
                  >Log Out</v-list-item-title
                >
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
      </div>
    </v-app-bar>
    <v-main class="airbnb">
      <nuxt />
    </v-main>
    <footer-one v-if="logged" />
    <footer-two v-else />
  </v-app>
</template>

<script>
import FooterOne from '@/components/FooterOne'
import FooterTwo from '@/components/FooterTwo'
export default {
  components: {
    FooterOne,
    FooterTwo,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Share Your Story',
          to: '/share',
        },
        {
          title: 'Information Board',
          to: '/information',
        },
        {
          title: 'Donate',
          to: '/donate',
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
  methods: {
    logout() {
      this.$store.commit('localStorage/setAuth', null)
      this.$router.push({ path: '/' })
    },
  },
}
</script>
<style scoped>
.active-items {
  background-color: #ffffff;
  border-radius: 5px;
}
</style>

