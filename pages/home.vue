<template>
  <main class="accent">
    <div class="relative white">
      <div
        class="absolute home-top-left fill-height d-flex justify-start align-center ml-5 ml-md-12"
      >
        <div>
          <span :class="`airbnb-bold ${headtextsize} primary--text`"
            >Covid-19 Travelling <br />
            Guide App</span
          >

          <p :class="`airbnb-light ${bodytextsize} white--text pt-2 pt-md-4`">
            An information platform that helps international travellers navigate
            <br />
            their way with travel requirements during the Covid19 Pandemic
            within<br />the African Continent.
          </p>
        </div>
      </div>
      <img src="/svg/home-top.svg" style="width: 100%" />

      <img
        v-if="!small"
        src="/svg/home-top-right.svg"
        height="90%"
        class="absolute home-top-right pt-7 pt-md-5 pt-lg-16"
      />
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
    headtextsize() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'text-15'
      } else {
        return 'text-30'
      }
    },
    bodytextsize() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'text-10'
      } else {
        return 'text-15'
      }
    },
  },
}
</script>

