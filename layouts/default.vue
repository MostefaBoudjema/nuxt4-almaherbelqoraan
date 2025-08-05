<template>
  <div :dir="isArabic ? 'rtl' : 'ltr'" :class="{ rtl: isArabic }" class="relative min-h-screen overflow-x-hidden">
    <!-- Header -->
    <AppHeader />

    <!-- Main content -->
    <main class="main-content">
      <slot />
    </main>

    <WhatsApp />
    <CustomBackToTop
      :visibleoffset="300"
      right="20px"
      bottom="25px"
    />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import AppHeader from '~/components/shared/AppHeader.vue'
import AppFooter from '~/components/shared/AppFooter.vue'
import WhatsApp from '~/components/shared/WhatsApp.vue'
import CustomBackToTop from '~/components/shared/CustomBackToTop.vue'

const { locale } = useI18n()
const isArabic = computed(() => locale.value === 'ar')
</script>
