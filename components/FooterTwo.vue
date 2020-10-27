<template>
  <v-footer :absolute="!fixed" app class="footer-two">
    <v-row>
      <v-col
        cols="8"
        md="8"
        class="airbnb d-flex justify-end align-center pa-4"
      >
        <div class="d-flex flex-row">
          <span v-if="small" class="text-10 text-center">
            Developed by the Google Andela Scholarship Team Web-02
          </span>
          <span v-else>
            Developed by the Google Andela Scholarship Team Web-02
          </span>
        </div>
      </v-col>
      <v-col cols="4" md="4">
        <div class="d-flex justify-end pr-0 pr-md-4">
          <div class="d-flex flex-column" v-if="!small">
            <span class="airbnb-bold text-15"
              >Help us get more people tested?</span
            >
            <v-btn
              color="info"
              class="text-capitalize py-5"
              depressed
              to="/donate"
            >
              <span class="airbnb-medium">Donate Today</span>
            </v-btn>
          </div>
          <div class="d-flex flex-column" v-else>
            <span class="airbnb-bold text-10 text-center"
              >Help us get more people tested?</span
            >
            <v-btn
              color="info"
              class="text-capitalize py-5"
              depressed
              to="/donate"
              small
            >
              <span class="airbnb-medium">Donate Today</span>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<style>
</style>