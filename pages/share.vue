<template>
  <div :class="`container ${containerheight}`">
    <div class="content">
      <h1 class="airbnb-bold">
        Share Your Covid-19 Survival Story With the World.
        <!-- {{ $store.state.localStorage.auth }} -->
      </h1>
      <p>
        Let the world learn from your survival stories. Share your covid-19
        survival video.<br />
        (Not more than 5 minutes)
      </p>
      <div id="formid">
        <div class="form">
          <div class="d-flex justify-center">
            <div :class="`${selectsize}`">
              <v-select
                :items="['Nigeria', 'Ghana', 'Rwanda', 'Egypt']"
                label="Select Your Country of Origin"
                solo
                v-model="country"
                color="primary"
                class="white px-2 py-0 ma-0"
              ></v-select>
            </div>
          </div>
          <p>kindly select your country of survival to continue</p>
        </div>

        <button id="button" class="pa-3 px-7" v-show="country">
          <span class="airbnb" id="button2">Continue</span>
        </button>
        <div v-show="!country">
          <v-btn
            disabled
            color="primary"
            class="text-capitalize py-6 px-8"
            depressed
          >
            <span class="airbnb">Continue</span>
          </v-btn>
        </div>
      </div>

      <div id="upload">
        <v-row class="px-3">
          <v-col cols="12" md="6">
            <div class="upload-box fill-width fill-height">
              <div class="upload-click text-15">
                <img src="/svg/upload.svg" />
                <p>Drag and drop a video</p>
                <p>OR</p>
                <br />
                <div class="fill-width">
                  <input
                    type="file"
                    name="browse"
                    class="white ml-2 py-4"
                    required
                  />
                </div>
                <p class="small">Not More Than <em>5 Minutes Video</em></p>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="upload-info fill-width fill-height">
              <div class="upload-form">
                <v-row class="mx-3 px-3">
                  <v-col cols="12">
                    <p class="airbnb-bold text-15">Title</p>
                    <v-text-field
                      label="Give your Story a title"
                      required
                      flat
                      solo
                      v-model="email"
                      class="white airbnb-bold text-25 pa-0 ma-0"
                      style="height: 55px"
                      :rules="[(v) => !!v || 'Email is required']"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <p class="airbnb-bold text-15">Caption</p>
                    <v-text-field
                      label="Write a caption..."
                      required
                      flat
                      solo
                      v-model="email"
                      class="white airbnb-bold text-25 pa-0 ma-0"
                      style="height: 55px"
                      :rules="[(v) => !!v || 'Email is required']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <div>
                      <v-btn
                        color="primary"
                        class="text-capitalize py-6"
                        depressed
                        block
                        @click="uploadStory()"
                      >
                        <span class="airbnb-medium">Upload Story</span>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div></v-col
          >
        </v-row>
      </div>
    </div>
    <loading :text="loadingText" :dialog="isloading" />
    <notification
      :text="notificationText"
      :show="showNotification"
      @close="closeNotification"
    />
  </div>
</template>

<script>
import Loading from '@/components/dialogs/loading'
import Notification from '@/components/dialogs/notification'

export default {
  middleware: 'authenticated',
  components: {
    Loading,
    Notification,
  },
  data: () => ({
    country: '',
    isloading: false,
    loadingText: 'Please wait...',
    showNotification: false,
    notificationText: '',
  }),
  head: {
    title: 'Share Your Story',
    link: [
      {
        rel: 'stylesheet',
        href: '/css/sharestory_style.css',
      },
    ],
    script: [
      {
        src: '/js/sharestory_script.js',
      },
    ],
  },
  methods: {
    closeNotification() {
      setTimeout(() => {
        this.showNotification = false
        this.notificationText = ''
      }, 2000)
    },
    uploadStory() {
      this.isloading = true
      this.loadingText = 'Uploading Video Please wait'

      setTimeout(() => {
        this.isloading = false
        this.showNotification = true
        this.notificationText = 'Uploaded Successfully'
        this.closeNotification()
        this.$router.push({ path: '/' })
      }, 5000)
    },
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
    containerheight() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'container-height-mobile'
      } else {
        return 'container-height'
      }
    },
  },
}
</script>

<style>
</style>