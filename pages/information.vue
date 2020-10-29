<template>
  <div>
    <header>
      <section
        class="head-body"
        data-toggle="collapse"
        data-target=".show#navbarSupportedContent"
      >
        <div class="d-flex justify-center align-center">
          <div class="d-flex flex-column fill-width">
            <div>
              <span class="airbnb-black text-35 primary--text"
                >Coronavirus disease (COVID-19) travel<br />
                advice as published by countries.
              </span>
            </div>
            <div class="d-flex justify-center">
              <div class="search-bar">
                <v-text-field
                  dense
                  solo
                  flat
                  filled
                  outlined
                  single-line
                  class="mt-2"
                  type="search"
                  name="Search"
                  placeholder="Search For Travel Guide By Country"
                  append-icon="mdi-magnify"
                />
              </div>
            </div>
            <div>
              <span class="text-15 white--text airbnb-light"
                >Examples: Ghana, Nigeria, South Africa, United Kingdom,
                more</span
              >
            </div>
          </div>
        </div>
        <!-- <div class="image-div">
          <h1>
            Coronavirus disease (COVID-19) travel advice as published by
            countries
          </h1>
          <form role="form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="travel-guide-search"
                placeholder="Search By Country &#xF002;"
              />
            </div>
            <label for="travel-guide-search" class=""
              >Examples: Ghana, Nigeria, South Africa, United Kingdom,
              more...</label
            >
          </form>
        </div> -->
      </section>
    </header>
    <div
      class="container"
      data-toggle="collapse"
      data-target=".show#navbarSupportedContent"
    >
      <section
        class="d-flex justify-center justify-md-space-between flex-md-row flex-column"
      >
        <div class="d-flex justify-center">
          <span
            class="airbnb-bold primary--text text--lighten-1 text-25 text-center text-md-left"
            >Travelling Guide For All Countries</span
          >
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div>
            <div class="d-flex justify-center">
              <div :class="`${selectsize}`">
                <v-select
                  :items="['Nigeria', 'Ghana', 'Rwanda', 'Egypt']"
                  label="Sort by: African Countries"
                  solo
                  v-model="search"
                  color="primary"
                  class="white px-2 py-0 ma-0"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="d-flex justify-center">
            <div class="search-bar-body">
              <v-text-field
                dense
                solo
                flat
                filled
                outlined
                single-line
                v-model="search"
                class="mt-2"
                type="search"
                name="Search"
                placeholder="Search For Travel Guide By Country"
                append-icon="mdi-magnify"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="page-table">
        <v-data-table
          :headers="headers"
          :items="tabledata"
          :items-per-page="10"
          :search="search"
          class="elevation-1"
        ></v-data-table>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Information Board',
    link: [
      {
        rel: 'stylesheet',
        href: '/css/info-board.css',
      },
    ],
    script: [
      {
        src: '/js/sharestory_script.js',
      },
    ],
  },
  data: () => ({
    country: '',
    search: '',
    enabled: null,
    headers: [
      {
        text: '',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'S/N', value: 'sn' },
      { text: 'Country', value: 'country' },
      { text: 'Airport Covid-19', value: 'airport' },
      { text: 'Required Number Of Covid-19 Test', value: 'covidtest' },
      { text: 'Covid-19 PCR test fee', value: 'pcrfee' },
      { text: 'Website Link', value: 'link' },
    ],
    tabledata: [
      {
        sn: '1',
        country: 'Ghana',
        continent: 'Africa',
        airport: 'Doloremque dicta aliquam laudantium',
        covidtest: '28 days',
        pcrfee: '$150 per passenger',
        link: 'https://bit.ly/34k8mtl',
      },
      {
        sn: '2',
        country: 'Nigeria',
        continent: 'Africa',
        airport: 'Doloremque dicta aliquam laudantium',
        covidtest: '28 days',
        pcrfee: '$150 per passenger',
        link: 'https://bit.ly/34k8mtl',
      },
      {
        sn: '3',
        country: 'Liberia',
        continent: 'Africa',
        airport: 'Doloremque dicta aliquam laudantium',
        covidtest: '28 days',
        pcrfee: '$150 per passenger',
        link: 'https://bit.ly/34k8mtl',
      },
    ],
  }),
  mounted() {
    let i = 0
    for (i = 0; i < 10; i++) {
      this.tabledata.push({
        sn: i + 4,
        country: 'Cameroon',
        continent: 'Africa',
        airport: 'Doloremque dicta aliquam laudantium',
        covidtest: '28 days',
        pcrfee: '$150 per passenger',
        link: 'https://bit.ly/34k8mtl',
      })
    }
  },
}
</script>

<style>
</style>