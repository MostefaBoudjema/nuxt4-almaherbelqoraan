<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useI18n } from 'vue-i18n';
import feather from "feather-icons";

const { t }=useI18n({
    inheritLocale: true,
    useScope: "local",
});

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <div class="flex items-center justify-center h-12 text-white">
        <p>
            © <span>{{ t('footer.copyright') }}</span>
            <a href="https://mostefa-boudjema.vercel.app" class="text-primary font-semibold px-1" target="_blank"
                rel="noopener">
                {{ t('footer.name') }}
            </a>
            <span>{{ t('footer.rights') }}</span>
        </p>
    </div>
</template>

<style scoped></style>
