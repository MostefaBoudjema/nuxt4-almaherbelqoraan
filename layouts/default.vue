<template>
  <div :dir="isArabic ? 'rtl' : 'ltr'" :class="{ rtl: isArabic }" class="relative min-h-screen overflow-x-hidden">
    <!-- Gradient Background and Stars: Only in dark mode -->
    <div v-if="isDark" class="fixed inset-0 -z-20 bg-gradient-to-b from-primary-dark via-secondary-dark to-ternary-dark transition-colors duration-500" />
    <canvas v-if="isDark" id="stars-canvas" class="fixed inset-0 w-full h-full pointer-events-none -z-10" />
    <!-- Header -->
    <AppHeader />
    <!-- Main content -->
    <main class="main-content">
      <slot />
    </main>
    <WhatsApp/>
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
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { onMounted, watch, ref, computed, nextTick } from 'vue'
import AppHeader from '~/components/shared/AppHeader.vue'
import AppFooter from '~/components/shared/AppFooter.vue'
import WhatsApp from '~/components/shared/WhatsApp.vue';
import CustomBackToTop from '~/components/shared/CustomBackToTop.vue';

const { locale } = useI18n()
const isArabic = computed(() => locale.value === 'ar')

// Detect dark mode
const isDark = ref(false)

function updateDark() {
  isDark.value = document.documentElement.classList.contains('dark')
}

onMounted(() => {
  updateDark()
  // Listen for class changes (e.g., via theme switcher)
  const observer = new MutationObserver(() => updateDark())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  // Stars animation (only if dark)
  watch(isDark, (val) => {
    if (val) {
      nextTick(() => {
        const canvas = document.getElementById('stars-canvas')
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let width = window.innerWidth
        let height = window.innerHeight
        let stars = []
        const STAR_COUNT = 120

        function resize() {
          width = window.innerWidth
          height = window.innerHeight
          canvas.width = width
          canvas.height = height
        }

        function createStars() {
          stars = []
          for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
              x: Math.random() * width,
              y: Math.random() * height,
              radius: Math.random() * 1.2 + 0.2,
              alpha: Math.random() * 0.5 + 0.5,
              dx: (Math.random() - 0.5) * 0.05,
              dy: (Math.random() - 0.5) * 0.05
            })
          }
        }

        function drawStars() {
          ctx.clearRect(0, 0, width, height)
          for (const star of stars) {
            ctx.save()
            ctx.globalAlpha = star.alpha
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
            ctx.fillStyle = '#fff'
            ctx.shadowColor = '#fff'
            ctx.shadowBlur = 8
            ctx.fill()
            ctx.restore()
          }
        }

        function animate() {
          for (const star of stars) {
            star.x += star.dx
            star.y += star.dy
            if (star.x < 0 || star.x > width) star.dx *= -1
            if (star.y < 0 || star.y > height) star.dy *= -1
          }
          drawStars()
          requestAnimationFrame(animate)
        }

        resize()
        createStars()
        animate()
        window.addEventListener('resize', () => {
          resize()
          createStars()
        })
      })
    }
  }, { immediate: true })
})
</script> 