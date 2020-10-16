<template>
  <v-col :cols="cols" class="ma-0 pa-0">
    <div class="d-flex justify-center">
      <div class="width-60">
        <div class="d-flex justify-start">
          <span class="airbnb-medium text-20 primary--text"
            >Create an account</span
          >
        </div>
        <v-row class="mt-4 flex-column d-flex">
          <v-col cols="12">
            <v-text-field
              label="Enter Full Name"
              required
              solo
              flat
              v-model="email"
              class="white airbnb-bold text-25 pa-0 ma-0"
              style="height: 55px"
              :rules="[(v) => !!v || 'Email is required']"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Enter Email Address"
              required
              solo
              flat
              v-model="email"
              class="white airbnb-bold text-25 pa-0 ma-0"
              style="height: 55px"
              :rules="[(v) => !!v || 'Email is required']"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mt-1">
            <v-autocomplete
              :items="country"
              label="Select Country"
              solo
              required
              v-model="countryData"
              class="white airbnb-bold text-25 pa-0 ma-0"
              flat
              style="height: 55px"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" class="mt-1">
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              :rules="[
                (v) => !!v || 'Password is required',
                (v) =>
                  (v && v.length >= 8) || 'Password must be up to 8 characters',
              ]"
              label="Choose Your Password"
              required
              solo
              flat
              class="white airbnb-bold text-25 pa-0 ma-0"
              style="height: 55px"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <div class="d-flex justify-end grey--text my-2">
              <span>forgot password?</span>
            </div>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" class="text-capitalize py-6" depressed block>
              <span class="airbnb text-normal">Create an account</span>
            </v-btn>
          </v-col>
          <v-col cols="12" class="mt-md-10 mt-1 pb-3">
            <div class="d-flex flex-row">
              <v-divider class="mt-3"></v-divider
              ><span class="px-1 grey--text">or login with</span>
              <v-divider class="mt-3"></v-divider>
            </div>
            <div class="mt-5 d-flex justify-space-between mx-15">
              <div class="white social-circle d-inline-block elevation-4">
                <div class="d-flex justify-center align-center pt-3">
                  <img src="/img/google.png" />
                </div>
              </div>

              <div class="white social-circle d-inline-block elevation-4">
                <div class="d-flex justify-center align-center pt-3">
                  <img src="/img/twitter.png" />
                </div>
              </div>
              <div class="white social-circle d-inline-block elevation-4">
                <div class="d-flex justify-center align-center pt-3">
                  <img src="/img/facebook.png" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    countryData: '',
    email: '',
    password: '',
    country: ['Nigeria', 'Others'],
  }),
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
    cols() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 12
      } else {
        return 6
      }
    },
  },
}
</script>

<style>
</style>