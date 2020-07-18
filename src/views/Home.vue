<template>
  <div>
    <div class="md:flex flex-row">
      <div class="md:w-2/3 relative">
        <div class="w-12 h-12 bg-red-600 hidden md:block absolute"></div>

        <p
          class="hero-name hidden md:block text-2xl text-red-600 uppercase tracking-widest mb-6 transform -rotate-90"
        >
          Drew Clements
        </p>

        <div
          class="hero-redaccent-left border-t-2 border-red-600 absolute transform -rotate-90"
        ></div>

        <div class="hero-lockup">
          <h1 class="font-display font-black text-6xl leading-none -mt-3 mb-12">
            Develop<br /><span class="text-gray-300">er</span>
            <span class="text-red-600"> &amp;</span><br />Design<br /><span
              class="text-gray-300"
              >er</span
            >
          </h1>

          <p class="text-blue-900 opacity-75 md:w-4/5 leading-relaxed">
            Hi! I'm just a dad trying to do right by his family! I work as a
            front-end engineer at
            <a
              href="https://layerframe.co"
              target="_blank"
              rel="noopener referrer"
              >Layerframe</a
            >
            and
            <a
              href="https://fostercommerce.com"
              target="_blank"
              rel="noopener no referrer"
              >Foster Commerce</a
            >! Founder of
            <a
              href="https://protege.dev"
              target="_blank"
              rel="noopener noreferrer"
              >Protege.dev</a
            >.
          </p>
        </div>
      </div>
      <div class="md:w-1/3 -ml-24 mt-12">
        <BaseCarousel :slides="images" type="image" class="hidden md:block" />
      </div>
    </div>

    <p class="text-sm text-red-600 mt-12 mb-5">
      Am I the droid you're looking for?
    </p>
    <button
      class="border-2 border-blue-900 hover:bg-gray-300 relative transition duration-150 ease-in-out px-6 py-1"
    >
      <router-link to="/contact" class="no-underline">Message Me</router-link>
    </button>
  </div>
</template>

<script>
import BaseCarousel from "../components/base/BaseCarousel";
import EvelynDr from "../assets/images/evelyn-dr.jpg";
import Roan from "../assets/images/roan.jpg";
import Donut from "../assets/images/home6.jpg";
import Headshot from "../assets/images/headshot.jpg";
import E2 from "../assets/images/e2.jpg";
import E3 from "../assets/images/e3.jpg";
import E4 from "../assets/images/e4.jpg";

export default {
  name: "Home",
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

<style lang="postcss" scoped>
.hero-lockup a {
  @apply text-red-700 underline;
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
