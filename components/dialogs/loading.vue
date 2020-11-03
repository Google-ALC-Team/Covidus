<template>
  <v-overlay v-if="dialog">
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="secondary" dark>
        <v-card-text>
          <div v-text="text" />
          <v-progress-linear indeterminate color="white" class="mb-0" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Loading',
    },
    dialog: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
