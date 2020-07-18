<template>
  <Swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <SwiperSlide
      :key="index"
      v-for="(slide, index) in slides"
      class="slide rounded-full overflow-hidden"
    >
      <img :src="slide.src" class="object-center object-cover" />
    </SwiperSlide>

    <div
      class="swiper-pagination"
      v-for="(slide, index) in slides"
      :key="index"
      slot="pagination"
    ></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "../../assets/css/swiper.css";

export default {
  name: "BaseCarousel",
  data: function() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
        autoplay: {
          delay: 2500,
        },
      },
    };
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
      required: true,
    },
    type: {
      type: String,
      default: undefined,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>

<style scoped>
.slide,
.swiper {
  height: 200px;
  width: 200px;
}

@media (min-width: 960px) {
  .slide,
  .swiper {
    height: 250px;
    width: 250px;
  }
}
</style>
