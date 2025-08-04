<template>
      <div :class="[
        'mt-0 sm:mt-5 flex justify-center',
        place === 'center' ? 'sm:justify-center' : 'sm:justify-start'
      ]">
        <NuxtLink
          :to="localePath('/contact')"
          class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-lg sm:text-xl duration-300"
          aria-label="Contact Us">
          <Button :title="$t('Contact Us')" />
        </NuxtLink>
      </div>
</template>

<script setup>
import { defineProps } from 'vue';
import settings from '~/configs';
import Button from '@/components/reusable/Button.vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';

const props = defineProps({
  place: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'center'].includes(value)
  }
});

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'global',
});
const localePath = useLocalePath();
</script>

<style></style>