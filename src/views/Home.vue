<script>
import BaseCarousel from '../components/base/BaseCarousel';
import EvelynDr from '../assets/images/evelyn-dr.jpg';
import Roan from '../assets/images/roan.jpg';
import Donut from '../assets/images/home6.jpg';
import Headshot from '../assets/images/headshot.jpg';
import E2 from '../assets/images/e2.jpg';
import E3 from '../assets/images/e3.jpg';
import E4 from '../assets/images/e4.jpg';

export default {
  name: 'Home',
  components: {
    BaseCarousel,
  },
  data: function() {
    return {
      images: [
        {
          id: 0,
          src: Headshot,
        },
        {
          id: 1,
          src: EvelynDr,
        },
        {
          id: 2,
          src: Roan,
        },
        {
          id: 3,
          src: Donut,
        },
        {
          id: 4,
          src: E2,
        },
        {
          id: 5,
          src: E3,
        },
        {
          id: 6,
          src: E4,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="flex-row md:flex">
      <div class="relative w-3/4 lg:w-2/3">
        <div class="absolute hidden w-12 h-12 bg-red-500 md:block"></div>

        <p
          class="hidden mb-6 text-2xl tracking-widest text-red-500 uppercase transform -rotate-90 hero-name md:block"
        >
          Drew Clements
        </p>

        <div
          class="absolute transform -rotate-90 border-t-2 border-red-500 hero-redaccent-left"
        ></div>

        <div class="hero-lockup">
          <h1 class="mb-12 -mt-3 text-6xl font-black leading-none font-display">
            Develop<br />
            <span class="text-gray-300">er</span>
            <span class="text-red-500"> &amp;</span><br />Design<br /><span
              class="text-gray-300"
            >
              er
            </span>
          </h1>

          <p class="leading-relaxed text-blue-900 opacity-75 md:w-4/5">
            Hi! I'm just a dad trying to do right by his family! I work as a
            front-end engineer at

            <a
              href="https://fostercommerce.com"
              target="_blank"
              rel="noopener no referrer"
              >Foster Commerce</a
            >
            ! Founder of
            <a
              href="https://protege.dev"
              target="_blank"
              rel="noopener noreferrer"
              >Protege.dev</a
            >.
          </p>
        </div>
      </div>
      <div class="w-3/4 mt-12 lg:w-1/3 lg:-ml-24">
        <BaseCarousel :slides="images" type="image" class="hidden md:block" />
      </div>
    </div>

    <p class="mt-12 mb-3 text-sm text-red-500">
      Am I the droid you're looking for?
    </p>
    <button class="btn">
      <router-link to="/contact" class="no-underline">Message Me</router-link>
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.hero-lockup a {
  @apply text-red-500 underline;
}

@media (min-width: 768px) {
  .hero-lockup {
    margin-left: 44px;
    margin-top: 50px;
  }

  .hero-redaccent-left {
    width: 100px;
    margin-top: 368px;
    margin-left: -48px;
  }

  .hero-name {
    margin-left: -111px;
    position: absolute;
    margin-top: 162px;
  }
}
</style>
