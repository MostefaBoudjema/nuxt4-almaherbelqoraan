<script setup>
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { useRuntimeConfig } from '#imports'
const { locale, setLocale }=useI18n()

// List of supported languages
const languages=[
  { code: 'ar', label: 'العربية' }
]

// Theme detection (using Tailwind's dark mode class on html)
const theme=ref('light');
if (typeof window!=='undefined') {
  theme.value=document.documentElement.classList.contains('dark')? 'dark':'light';
  // Listen for theme changes if needed
  const observer=new MutationObserver(() => {
    theme.value=document.documentElement.classList.contains('dark')? 'dark':'light';
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}

function onLangChange(event) {
  setLocale(event.target.value);
}

const runtimeConfig=useRuntimeConfig();
const showMultiLang=runtimeConfig.public?.showMultiLang===true||runtimeConfig.public?.showMultiLang==='true';
</script>

<template>
  <select v-if="showMultiLang" :value="locale" @change="onLangChange" :class="[
    'rounded py-1 font-semibold',
    'outline-none focus:outline-none',
    'focus:ring-0 focus:border-gray-300 dark:focus:border-gray-700',
    'bg-white text-gray-900 border border-gray-300',
    'dark:bg-gray-800 dark:text-white dark:border-gray-700',
    locale=='ar' ? 'mx-4' : ''
  ]" aria-label="Language Switcher">

    <option v-for="lang in languages" :key="lang.code" :value="lang.code">
      {{ lang.label }}
    </option>
  </select>
</template>

<style scoped>
select {
  font-family: GeneralSans-Regular;
  font-weight: 600;
  min-width: 90px;
  box-shadow: none;
  /* Hide default dropdown arrow for most browsers */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none;
}

select:focus {
  box-shadow: none;
  outline: none;
  border-color: inherit;
  /* border-color removed, handled by Tailwind */
}
</style>
