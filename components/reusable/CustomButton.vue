<template>
    <button
      :class="[
        'm-1 px-4 sm:px-6 py-2 sm:py-2.5 text-' + color + '-500 bg-transparent hover:border hover:border-' + color + '-600 rounded-md focus:ring-1 focus:ring-' + color + '-900',
      ]"
      @click="onClick"
    >
      {{ title }}
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    color: String,
  });

  const onClick = () => {
    // Emit a custom event here if needed
  };
  </script>
  