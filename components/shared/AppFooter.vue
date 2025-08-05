<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useI18n } from 'vue-i18n';
import feather from "feather-icons";

const { t } = useI18n({
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
    <div class="container mx-auto rtl text-center">
        <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <div class="container copyright mt-4">
                <p>
                    © <span>{{ t('footer.copyright') }}</span>
                    <a href="https://mostefa-boudjema.vercel.app" class="text-primary font-semibold px-1" target="_blank" rel="noopener">
                        {{ t('footer.name') }}
                    </a>
                    <span>{{ t('footer.rights') }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
