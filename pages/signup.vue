<template>
  <div class="accent fill-height">
    <v-row class="d-flex flex-row pt-15 pa-0">
      <side v-if="!small" />
      <sign-up />
    </v-row>
  </div>
</template>

<script>
import Side from '@/components/Auth/Side'
import SignUp from '@/components/Auth/SignUp'
export default {
  components: {
    Side,
    SignUp,
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