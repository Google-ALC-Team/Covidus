<template>
  <div class="accent fill-height fill-width">
    <v-row class="d-flex flex-row pt-15 pa-0">
      <side v-if="!small" />
      <sign-in />
    </v-row>
  </div>
</template>

<script>
import Side from '@/components/Auth/Side'
import SignIn from '@/components/Auth/SignIn'
export default {
  components: {
    Side,
    SignIn,
  },
  data: () => ({
    email: '',
    password: '',
    showPassword: false,
  }),
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<style>
</style>