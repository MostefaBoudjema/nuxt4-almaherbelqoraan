<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Layout Test Page</h1>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">This is a simple test to verify the layout is working.</p>
    
    <div class="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
      <h2 class="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-2">Header and Footer Test</h2>
      <p class="text-blue-700 dark:text-blue-300">
        If you can see this content between a header and footer, the layout is working correctly!
      </p>
    </div>
    
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
        <h3 class="font-semibold text-green-800 dark:text-green-200">Test 1</h3>
        <p class="text-green-700 dark:text-green-300">Content area 1</p>
      </div>
      <div class="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
        <h3 class="font-semibold text-yellow-800 dark:text-yellow-200">Test 2</h3>
        <p class="text-yellow-700 dark:text-yellow-300">Content area 2</p>
      </div>
      <div class="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
        <h3 class="font-semibold text-purple-800 dark:text-purple-200">Test 3</h3>
        <p class="text-purple-700 dark:text-purple-300">Content area 3</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
useHead({
  title: () => `${t('Test')} - ${t('website_name')}`
})
</script>

<style scoped>
/* Test styles */
</style> 