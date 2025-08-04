<template>
	<a id="whatsapp" class="mx-2" :href="`https://api.whatsapp.com/send?phone=${settings.whatsappNumber}`" data-aos="fade-up" data-aos-delay="200">
		<img :height="70" :src="settings.whatsapp" class="my-4" alt="Icon" />
	</a>
</template>

<script setup>
import settings from "~/configs";


</script>

<style></style>