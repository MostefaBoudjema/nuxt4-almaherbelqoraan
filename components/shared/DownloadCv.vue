<template>
	<div class="flex justify-center sm:block" v-if="settings.show_cv">
		<a download="Mostefa-Boudjema-Resume.pdf" :href="settings.cv_path"
			class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-blue-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-blue-50 focus:ring-1 focus:ring-blue-900 hover:bg-blue-500 text-gray-500 hover:text-white duration-500"
			aria-label="Download Resume">
			<i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
			<span class="text-sm sm:text-lg font-general-medium duration-100">{{ t("Download CV") }}</span></a>
	</div>
</template>

<script setup>

import settings from '~/configs';

import { useI18n } from 'vue-i18n';
const { t }=useI18n({
	inheritLocale: true,
	useScope: 'global',
});
</script>

<style></style>