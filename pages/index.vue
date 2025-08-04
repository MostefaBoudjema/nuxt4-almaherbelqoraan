<template>
  <div class="p-8">

    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8 mt-8" />

  </div>
</template>

<script setup>
import AppBanner from '@/components/shared/AppBanner';

import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
// import { useLocalePath } from '#i18n';

// const localePath = useLocalePath();

const { t } = useI18n({
    inheritLocale: true,
    useScope: "global",
});
useHead({
  title: () => `${t('Home')} - ${t('website_name')}`
})
</script>

<style scoped></style>
