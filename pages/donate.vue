<template>
  <div class="d-flex justify-center" style="mb-16">
    <div class="content">
      <span class="airbnb-bold text-40 primary--text"
        >Help Us Get More People Tested For Covid-19?</span
      >
      <p class="airbnb-regular">
        Support us in our mission of getting more people tested, especially
        travellers who can't pay for test. Your kindness is someone’s hope!
      </p>

      <div class="form d-flex justify-center">
        <div :class="`${selectsize} d-flex flex-column`">
          <v-select
            :items="['Nigeria', 'Ghana', 'Rwanda', 'Egypt']"
            label="Select Your Country of Origin"
            solo
            v-model="country"
            color="primary"
            class="white px-2 py-0 ma-0"
          ></v-select>
          <p class="text-15">
            Note that you will be donating to your country of origin to help pay
            people who cannot afford the Covid-19 PCR test fee.
          </p>
        </div>
      </div>

      <button class="py-2" id="button">
        <span id="button2"
          >Get Country Donation Link<img src="/svg/donation.svg" width="32px"
        /></span>
      </button>

      <v-row class="airbnb d-flex mt-5 accent" v-if="country">
        <v-col cols="12" md="4">
          <div class="country">
            <span class="airbnb-bold text-20 primary--text">Country</span>
            <p class="airbnb-bold text-15">{{ country }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="donation-link">
            <span class="airbnb-bold text-20 primary--text"
              >Covid-19 Donation Links</span
            >
            <p class="link-title font-size secondary--text">
              {{ country }} Covid-19 GoFundMe Account:<br />
              <a
                :href="`https://gofundme.com/${country.toLowerCase()}-covid-19`"
                target="_blank"
              >
                https://gofundme.com/{{ country.toLowerCase() }}-covid-19</a
              >
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="donate-direct d-flex flex-column">
            <span class="airbnb-bold text-20 primary--text"
              >Donate Directly Now</span
            >
            <div>
              <v-btn
                color="info"
                class="text-capitalize py-6"
                depressed
                to="/donate"
              >
                <span class="airbnb">Make Donation </span>
                <img src="/svg/donation.svg" width="32px" />
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    country: '',
  }),
  head: {
    title: 'Donate',
    link: [
      {
        rel: 'stylesheet',
        href: '/css/donation_style.css',
      },
    ],
  },
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
    selectsize() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'width-80'
      } else {
        return 'width-60'
      }
    },
  },
}
</script>

<style>
</style>