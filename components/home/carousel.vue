<template>
    <div class="w-full">
        <Swiper :modules="[Autoplay, Navigation, Pagination]" :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :loop="true" :pagination="{ clickable: true }" :navigation="true" class="h-[100vh]">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="relative h-full">
                    <img :src="slide.image" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-[rgba(24,29,56,0.7)] flex items-center">
                        <div class="container mx-auto px-4">
                            <div class="max-w-2xl text-right rtl">
                                <h5 class="text-primary uppercase mb-3 text-lg font-semibold font-quran">
                                    {{ $t(`carousel.slide${index + 1}.subtitle`) }}
                                </h5>
                                <h1 class="text-white text-4xl md:text-5xl font-bold mb-4 font-body">
                                    {{ $t(`carousel.slide${index + 1}.title`) }}
                                </h1>
                                <p class="text-white text-base md:text-lg mb-6 font-ui">
                                    {{ $t(`carousel.slide${index + 1}.description`) }}
                                </p>
                                <div v-if="false" class="flex flex-wrap gap-4 justify-start">
                                    <a href="#" class="btn-primary">
                                        {{ $t('carousel.buttons.read_more') }}
                                    </a>
                                    <a href="#" class="btn-light">
                                        {{ $t('carousel.buttons.join_now') }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
const slides=[
    { image: '/images/carousel/carousel-1.webp' },
    { image: '/images/carousel/carousel-2.webp' },
    { image: '/images/carousel/carousel-3.webp' }
]

</script>

<style scoped>
.btn-primary {
    @apply bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700 transition;
}

.btn-light {
    @apply bg-white text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition;
}

.text-primary {
    @apply text-green-400;
}

.rtl {
    direction: rtl;
}
</style>
