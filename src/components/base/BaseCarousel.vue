<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
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
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
      },
    };
  },
  directives: {
    swiper: directive,
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

<template>
  <Swiper
    :options="swiperOption"
    ref="mySwiper"
    class="swiper rounded-full overflow-hidden"
  >
    <SwiperSlide
      :key="index"
      v-for="(slide, index) in slides"
      class="slide rounded-full overflow-hidden"
    >
      <img :src="slide.src" class="object-center object-cover" />
    </SwiperSlide>

    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

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
