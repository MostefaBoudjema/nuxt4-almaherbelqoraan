<script setup>
import { useI18n } from 'vue-i18n';

const { t }=useI18n({
    inheritLocale: true,
    useScope: "local",
});

</script>

<template>
    <div class="flex items-center justify-center h-8 text-gray-100 bg-gray-800">

        <p class="text-xs sm:text-sm text-center px-2">
            <span>
                {{ t('footer.rights') }}
                <a href="https://mostefa-boudjema.vercel.app" class="text-primary font-semibold px-1" target="_blank"
                    rel="noopener">
                    {{ t('footer.name') }}
                </a>
                {{ t('footer.copyright') }}
            </span> ©
        </p>
    </div>
</template>



<style scoped></style>
