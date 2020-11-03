<template>
  <v-snackbar
    v-model="show"
    :timeout="timeout"
    color="secondary darken-1"
    class="text-capitalize py-3"
  >
    <div>
      <v-icon class="mr-3">
        {{ icon }}
      </v-icon>
      <span v-text="text" />
    </div>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Sorry, that didn't work. Please try again.",
    },
    icon: {
      type: String,
      default: 'mdi-information-outline',
    },
    timeout: {
      type: String,
      default: '10000',
    },
  },
}
</script>
