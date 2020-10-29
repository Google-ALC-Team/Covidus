<template>
  <div class="accent">
    <div :class="`${hometopbg} fill-width`">
      <v-row>
        <v-col cols="12" md="6">
          <div
            :class="`fill-height ${leftcontent} d-flex justify-center align-center`"
          >
            <div :class="`${leftcontent}`">
              <div class="d-flex justify-center px-10 px-sm-16 px-md-0">
                <div class="pl-5">
                  <span :class="`airbnb-black text-30 primary--text`"
                    >Covid-19 Travelling <br />
                    Guide App</span
                  >

                  <p class="airbnb-light text-15 white--text pt-2 pt-md-4">
                    An information platform that helps international travellers
                    navigate their way <br />
                    with travel requirements during the Covid19 Pandemic within
                    the African Continent.
                  </p>

                  <v-row class="d-flex flex-column flex-md-row">
                    <v-col>
                      <v-btn
                        color="primary"
                        block
                        class="text-capitalize py-6"
                        depressed
                        to="/signup"
                      >
                        <span class="airbnb-light">
                          Search Guide For Country
                        </span>
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn
                        color="secondary"
                        class="text-capitalize py-6 px-3 mt-3 mt-md-0"
                        depressed
                        block
                        to="/signin"
                      >
                        <img
                          src="/svg/play-white.svg"
                          height="50px"
                          class="pr-2"
                        />
                        Share Your Story
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="6" md="6" v-if="!small">
          <div
            class="pt-7 pt-md-5 pt-lg-16 fill-width d-flex justify-end"
            style="height: 93%"
          >
            <img src="/svg/home-top-right.svg" height="100%" />
          </div>
        </v-col>
      </v-row>
    </div>

    <div :class="`mb-16 ${tipsbg}`">
      <div class="d-flex justify-center justify-md-end pt-7 pt-md-12 pr-2">
        <div
          class="px-1 accent pa-2 rounded-pill d-flex justify-center"
          style="width: 250px"
        >
          <img src="/svg/measure-icon.svg" />
          <span class="airbnb-bold text-12 pt-2"
            >Approved Protective Measures</span
          >
        </div>
      </div>
      <div class="d-flex justify-center">
        <v-row
          class="home-tips-content pl-6 pl-md-2 pt-2 px-3 d-flex justify-center"
        >
          <v-col
            cols="6"
            md="2"
            sm="4"
            offset="1"
            offset-sm="0"
            class="pl-0 mx-sm-2 mx-md-4 mx-0"
          >
            <v-card
              class="home-tips-card d-flex justify-center rounded-lg"
              flat
            >
              <div class="d-flex justify-center fill-width">
                <div class="d-flex flex-column text-center">
                  <div class="mb-2">
                    <img
                      src="/images/homepage/hand-washing.png"
                      width="120px"
                    />
                  </div>
                  <div class="mb-2">
                    <h6 class="airbnb text-15" style="color: #4f5cd3">
                      Wash Your Hands
                    </h6>
                    <p class="airbnb-light text-15 mx-2 primary--text">
                      Clean your hands often. Use soap and water, or an
                      alcohol-based hand rub.
                    </p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="2"
            sm="4"
            offset="1"
            offset-sm="0"
            class="pl-0 mx-sm-2 mx-md-4 mx-0"
          >
            <v-card
              class="home-tips-card d-flex justify-center rounded-lg"
              flat
            >
              <div class="d-flex justify-center fill-width">
                <div class="d-flex flex-column text-center">
                  <div class="mb-2">
                    <img src="/images/homepage/masked-face.png" width="120px" />
                  </div>
                  <div class="mb-2">
                    <h6 class="airbnb text-15" style="color: #4f5cd3">
                      Wear a mask
                    </h6>
                    <p class="airbnb-light text-15 mx-2 primary--text">
                      Wear a mask when physical distancing is not possible.
                    </p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="2"
            sm="4"
            offset="1"
            offset-sm="0"
            class="pl-0 mx-sm-2 mx-md-4 mx-0"
          >
            <v-card
              class="home-tips-card d-flex justify-center rounded-lg"
              flat
            >
              <div class="d-flex justify-center fill-width">
                <div class="d-flex flex-column text-center">
                  <div class="mb-2">
                    <img
                      src="/images/homepage/hand-washing.png"
                      width="120px"
                    />
                  </div>
                  <div class="mb-2">
                    <h6 class="airbnb text-15" style="color: #4f5cd3">
                      Keep a safe distance
                    </h6>
                    <p class="airbnb-light text-15 mx-2 primary--text">
                      Maintain a safe distance from anyone who is coughing or
                      sneezing.
                    </p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="2"
            sm="4"
            offset="1"
            offset-sm="0"
            class="pl-0 mx-sm-2 mx-md-4 mx-0"
          >
            <v-card
              class="home-tips-card d-flex justify-center rounded-lg"
              flat
            >
              <div class="d-flex justify-center fill-width">
                <div class="d-flex flex-column text-center">
                  <div class="mb-2">
                    <img
                      src="/images/homepage/hand-washing.png"
                      width="120px"
                    />
                  </div>
                  <div class="mb-2">
                    <h6 class="airbnb text-15" style="color: #4f5cd3">
                      Avoid Crowded Spaces
                    </h6>
                    <p class="airbnb-light text-15 mx-2 primary--text">
                      Avoid crowded spaces such as open markets and pharmacies
                    </p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="2"
            sm="4"
            offset="1"
            offset-sm="0"
            class="pl-0 mx-sm-2 mx-md-4 mx-0"
          >
            <v-card
              class="home-tips-card d-flex justify-center rounded-lg"
              flat
            >
              <div class="d-flex justify-center fill-width">
                <div class="d-flex flex-column text-center">
                  <div class="mb-2">
                    <img
                      src="/images/homepage/hand-washing.png"
                      width="120px"
                    />
                  </div>
                  <div class="mb-2">
                    <h6 class="airbnb text-15" style="color: #4f5cd3">
                      Seek Medical Attention
                    </h6>
                    <p class="airbnb-light text-15 mx-2 primary--text">
                      If you have a fever, cough and difficulty breathing, seek
                      medical attention.
                    </p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <section class="container-fluid get-started pl-2 pl-md-2">
      <div class="text-center text-md-left mx-3">
        <span class="airbnb-bold text-20 primary--text"
          >Get Started On Covidus</span
        >
      </div>
      <div class="row">
        <section class="col-lg-4 col-sm-6">
          <div class="mx-3">
            <div class="d-flex justify-center fill-width">
              <img
                class="card-img-top fill-height"
                src="/images/homepage/get-started-1.png"
                alt="get-started-img"
                height="400px"
                width="100%"
              />
            </div>
            <article class="card-body">
              <span class="text-15 airbnb-bold primary--text"
                >Share Your Survival Story</span
              >
              <p class="card-text">
                Clean your hands often. Use soap and water, or an alcohol-based
                hand rub.
              </p>
              <div class="d-flex flex-column flex-md-row fill-width">
                <v-btn
                  color="success"
                  depressed
                  to="/"
                  class="py-6 px-3 text-capitalize"
                >
                  <div class="d-flex justify-center fill-width">
                    <div class="px-2">
                      <v-img
                        src="/svg/video-icon.svg"
                        height="20px"
                        width="20px"
                      />
                    </div>
                    <div class="px-2">
                      <span class="airbnb secondary--text"> Upload Video </span>
                    </div>
                  </div>
                </v-btn>
                <v-btn
                  depressed
                  to="/"
                  color="accent"
                  class="pa-0 text-capitalize d-flex justify-center"
                >
                  <div class="d-flex justify-center fill-width">
                    <div class="pl-1">
                      <v-img src="/svg/tv.svg" height="20px" width="20px" />
                    </div>

                    <span
                      class="airbnb black--text text-12 pt-1 pl-1 text-decoration-underline"
                    >
                      Watch Others Survival Story
                    </span>
                  </div>
                </v-btn>
              </div>
            </article>
          </div>
        </section>
        <section class="col-lg-4 col-sm-6">
          <div class="mx-3">
            <div class="d-flex justify-center fill-width">
              <img
                class="card-img-top"
                src="/images/homepage/get-started-2.png"
                alt="get-started-img"
                width="100%"
              />
            </div>
            <article class="card-body">
              <span class="text-15 airbnb-bold primary--text"
                >Information Board For Travellers</span
              >
              <p class="card-text">
                Find travel requirement for each African country (such as
                required number of days of Covid test,Airport Covid19 protocols,
                amount charged for Covid19 test in each country.
              </p>

              <div class="d-flex flex-column flex-md-row fill-width">
                <v-btn
                  color="success"
                  depressed
                  to="/"
                  class="py-6 px-3 pl-0 pl-md-3 text-capitalize"
                >
                  <div class="d-flex justify-center fill-width">
                    <div class="px-2">
                      <v-img src="/svg/search.svg" height="20px" width="20px" />
                    </div>
                    <div class="px-2">
                      <span class="airbnb secondary--text">
                        Search By Country
                      </span>
                    </div>
                  </div>
                </v-btn>
                <v-btn
                  depressed
                  to="/"
                  color="accent"
                  class="pa-0 text-capitalize d-flex justify-center"
                >
                  <div class="d-flex justify-center fill-width ml-2">
                    <div class="pl-1">
                      <v-img src="/svg/tv.svg" height="20px" width="20px" />
                    </div>

                    <span
                      class="airbnb black--text text-12 pt-1 pl-4 text-decoration-underline"
                    >
                      All Countries Guide
                    </span>
                  </div>
                </v-btn>
              </div>
            </article>
          </div>
        </section>
        <section class="col-lg-4 col-sm-6">
          <div class="mx-3">
            <div class="d-flex justify-center fill-width">
              <img
                class="card-img-top"
                src="/images/homepage/get-started-3.png"
                alt="get-started-img"
                width="100%"
              />
            </div>
            <article class="card-body">
              <span class="text-15 airbnb-bold primary--text"
                >Donate Via GoFundMe</span
              >
              <p class="card-text">
                Donate via gofund me account for your preffered country to help
                those travelling to their country of origin but cannot afford to
                pay for the test before entrance.
              </p>

              <div class="d-flex flex-column flex-md-row fill-width">
                <v-btn
                  color="info"
                  depressed
                  to="/"
                  class="py-6 py-md-4 px-3 pl-0 pl-md-3 text-capitalize"
                >
                  <div class="d-flex justify-center fill-width">
                    <div class="px-2">
                      <v-img
                        src="/svg/donation.svg"
                        height="20px"
                        width="20px"
                      />
                    </div>
                    <div class="px-2">
                      <span class="airbnb white--text"> Donate Today </span>
                    </div>
                  </div>
                </v-btn>
                <v-btn
                  depressed
                  to="/"
                  color="accent"
                  class="pa-0 text-capitalize d-flex justify-center"
                >
                  <div class="d-flex justify-center fill-width ml-2">
                    <div class="pl-1 pt-0 pt-md-1">
                      <v-img src="/svg/help.svg" height="20px" width="20px" />
                    </div>

                    <span
                      v-if="small"
                      class="airbnb black--text text-12 pt-1 pl-1 text-decoration-underline"
                    >
                      Need Help Paying For Test?
                    </span>
                    <span
                      v-else
                      class="airbnb black--text text-12 pt-1 pl-1 text-decoration-underline text-center"
                    >
                      Need Help Paying For <br />Test?
                    </span>
                  </div>
                </v-btn>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
    <section :class="`container-fluid ${survivalstories}`">
      <div
        class="fill-width d-flex justify-sm-center justify-md-space-between text-center text-sm-start mt-5"
      >
        <div class="pa-15">
          <span class="airbnb-bold text-25 white--text" v-if="small"
            >Covid-19 Survival Stories Feeds</span
          >
          <span class="airbnb-bold text-25 white--text" v-else
            >Covid-19 Survival Stories Feeds</span
          >
        </div>
        <!-- <div class="d-flex flex-row mt-15">
          <v-select
            :items="['Browse by: Country of Survival', 'Browse by: Story']"
            label="'Browse by: Country of Survival"
            outlined
            color="white"
            class="white px-2"
          ></v-select>
        </div> -->
      </div>

      <section class="fill-width">
        <v-row>
          <v-col cols="12" md="4" sm="6" v-for="n in 9" :key="n">
            <div class="pa-5">
              <video width="100%" controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://www.w3schools.com/html/mov_bbb.ogg"
                  type="video/ogg"
                />

                Your browser does not support HTML video.
              </video>
              <div class="d-flex justify-center text-center">
                <span class="airbnb-bold text-center text-15 white--text"
                  >How I got infected in a hair salon</span
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
      <div class="d-flex justify-end pb-12 pr-7">
        <button class="more-videos btn">Load more videos</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact us',
    link: [
      {
        rel: 'stylesheet',
        href: '/css/homepage.css',
      },
    ],
  },
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
    headerimg() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return ''
      } else {
        return 'header-content'
      }
    },
    leftcontent() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'fill-width'
      } else {
        return 'width-50'
      }
    },
    cardheight() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'home-tips-card-mobile'
      } else {
        return 'home-tips-card'
      }
    },
    tipsbg() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'tips-bg-mobile'
      } else {
        return 'tips-bg'
      }
    },
    hometopbg() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'home-top-bg-mobile'
      } else {
        return 'home-top-bg'
      }
    },
    survivalstories() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'survival-stories survival-bg-mobile'
      } else {
        return 'survival-stories survival-bg'
      }
    },
  },
}
</script>

<style scoped>
.theme--light.v-list {
  color: #ffffff;
  background: #ffffff;
}
.v-list-item__content {
  color: white;
}
.theme--light.v-list-item:hover:before {
  opacity: 0.14;
}
</style>