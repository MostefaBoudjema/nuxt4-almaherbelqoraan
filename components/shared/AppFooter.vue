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
    <div class="container mx-auto">
        <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <!-- Footer social links -->
            <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">

            </div>

            <!-- Footer copyright -->
            <div class="container copyright text-center mt-4 ">
                <p>© <span>Copyright 2025</span> <strong class="px-1 sitename">Mostefa B</strong> <span>All Rights
                        Reserved</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
