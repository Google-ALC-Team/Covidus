<template>
  <main class="container">
    <div class="content">
      <span class="airbnb-bold text-40 primary--text"
        >Help Us Get More People Tested For Covid-19?</span
      >
      <p class="airbnb-regular">
        Support us in our mission of getting more people tested, especially
        travellers who can't pay for test. Your kindness is someone’s hope!
      </p>

      <div class="form">
        <form>
          <select id="country" name="country">
            <option value="Select">Select Your Country of Origin</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Egypt">Egypt</option>
          </select>
        </form>
        <p>
          Note that you will be donating to your country of origin to help pay
          people who cannot afford the Covid-19 PCR test fee.
        </p>
      </div>

      <button id="button">
        <span id="button2"
          >Get Country Donation Link<img src="/svg/donation.svg" width="18px"
        /></span>
      </button>

      <div class="search-result" id="result">
        <div class="search-container">
          <div class="country">
            <h3 class="header">Country</h3>
            <p class="country-name font-size">Rwanda</p>
          </div>
          <div class="donation-link">
            <h3 class="header">Covid-19 Donation Links</h3>
            <p class="link-title font-size">
              <span>Rwanda Covid-19 GoFundMe Account: </span
              >https://gofundme.com/rwanda-covid-19
            </p>
          </div>
          <div class="donate-direct">
            <h3 class="header">Donate Directly Now</h3>
            <button class="pay-now">Click to Make Donation</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Donate',
    link: [
      {
        rel: 'stylesheet',
        href: '/css/donation_style.css',
      },
    ],
  },
}
</script>

<style>
</style>