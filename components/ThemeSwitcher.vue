<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import useThemeSwitcher from '~/composables/useThemeSwitcher';
import gsap from 'gsap';

const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['theme-changed']);
const { toggleTheme } = useThemeSwitcher();

const currentTheme = ref(props.theme);

watch(() => props.theme, (val) => {
  currentTheme.value = val;
});

const handleToggleTheme = () => {
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    gsap.to(mainContent, {
      scale: 0.95,
      opacity: 0,
      duration: 0.3,
      ease: 'power1.in',
      onComplete: () => {
        const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
        currentTheme.value = newTheme;
        toggleTheme();
        emit('theme-changed', newTheme);
        gsap.fromTo(mainContent, { scale: 1.05, opacity: 0 }, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'power1.out',
        });
      }
    });
  } else {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
    currentTheme.value = newTheme;
    toggleTheme();
    emit('theme-changed', newTheme);
  }
};
</script>

<template>
  <a href="#" @click.prevent="handleToggleTheme" aria-label="Theme Switcher">
    <!-- Moon icon (black, shown in light theme) -->
    <div v-if="currentTheme === 'light'" class="flex items-center justify-center">
      <svg width="24" height="24" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/>
      </svg>
    </div>
    <!-- Sun icon (white, shown in dark theme) -->
    <div v-else class="flex items-center justify-center">
      <svg width="24" height="24" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    </div>
  </a>
</template>
