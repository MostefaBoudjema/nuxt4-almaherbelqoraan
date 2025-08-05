<template>
  <div class="">

    <!-- Banner -->
    <!-- <AppBanner class="p-8 mb-5 sm:mb-8 mt-8" /> -->
    <carousel />
  </div>
</template>

<script setup>
import AppBanner from '@/components/shared/AppBanner';
import Carousel from '@/components/home/carousel';

import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
// import { useLocalePath } from '#i18n';

// const localePath = useLocalePath();

const { t }=useI18n({
  inheritLocale: true,
  useScope: "global",
});
useHead({
  title: () => `${t('Home')} - ${t('website_name')}`,
  meta: [
    {
      name: 'description',
      content: t('meta.description')
    },
    {
      name: 'keywords',
      content: t('meta.keywords')
    }
  ],
  script: [
    { src: '/js/main.js', body: true }
  ]
})
</script>

<style scoped></style>
