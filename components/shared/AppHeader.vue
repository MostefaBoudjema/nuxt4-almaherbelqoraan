<script setup>
import { ref, onMounted, onUpdated, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import Button from "@/components/reusable/Button.vue";
import settings from "~/configs";
import useThemeSwitcher from '~/composables/useThemeSwitcher';
import { useLocalePath } from '#i18n';

const { t }=useI18n({
    inheritLocale: true,
    useScope: "global",
});

const isOpen=ref(false);
const theme=ref('dark');
const lang=ref('');
const modal=ref(false);

const langRoot=computed(() => {
    // If default language is 'en', you may want to use '/' instead of '/en'
    // Adjust as needed for your routing strategy
    return lang.value==='en'? '/':`/${lang.value}`;
});

const localePath=useLocalePath();

const { currentTheme }=useThemeSwitcher();

onMounted(() => {
    // Get theme from localStorage or default to dark
    theme.value=localStorage.getItem("theme")||"dark";
    lang.value=localStorage.getItem("lang")||"en";

    // Watch for theme changes
    watch(currentTheme, (newTheme) => {
        theme.value=newTheme;
    });
});

const updateTheme=(newTheme) => {
    theme.value=newTheme;
};

const updateLang=(newLang) => {
    lang.value=newLang;
};

const showModal=() => {
    if (modal.value) {
        // Stop screen scrolling
        document
            .getElementsByTagName("html")[0]
            .classList.remove("overflow-y-hidden");
        modal.value=false;
    } else {
        document
            .getElementsByTagName("html")[0]
            .classList.add("overflow-y-hidden");
        modal.value=true;
    }
};

onUpdated(() => {
    feather.replace();
});

let show_multi_lang=false;
try {
    const config=typeof useRuntimeConfig==='function'? useRuntimeConfig():null;
    if (config&&config.public) {
        const val=config.public.showMultiLang||config.public.SHOW_MULTI_LANG||config.public.NUXT_PUBLIC_SHOW_MULTI_LANG;
        show_multi_lang=val===true||val==='true'||val===1||val==='1';
    }
} catch (e) {
    // fallback for non-Nuxt environments (e.g. static build)
}
</script>

<template>
    <nav id="nav" class="sm:container sm:mx-auto">
        <!-- Header start -->
        <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center px-4 sm:px-0">
                <!-- Header logos -->
                <div>
                    <NuxtLink :to="localePath('/')">
                        <img v-if="theme === 'light'" :src="settings.logo_dark" class="w-36" alt="Dark Logo" />
                        <img v-else :src="settings.logo_light" class="w-36" alt="Light Logo" />
                    </NuxtLink>
                </div>
                <div class="flex items-end gap-3">
                    <language-switcher v-if="show_multi_lang" :lang="lang" :theme="theme" @lang-changed="updateLang"
                        class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />
                    <!-- Theme switcher small screen -->
                    <theme-switcher :theme="theme" @themeChanged="updateTheme"
                        class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />

                    <!-- Small screen hamburger menu -->
                    <div class="sm:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="focus:outline-none"
                            aria-label="Hamburger Menu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
                                <path v-if="isOpen" fill-rule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    clip-rule="evenodd"></path>
                                <path v-if="!isOpen" fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Header links -->
            <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" @close-menu="isOpen = false" />

            <!-- Header right section buttons -->
            <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">

                <language-switcher v-if="show_multi_lang" :lang="lang" :theme="theme" @lang-changed="updateLang"
                    class="bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer rtl:mr-4" />

                <!-- Theme switcher large screen -->
                <theme-switcher :theme="theme" @theme-changed="updateTheme"
                    class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />


            </div>

        </div>

    </nav>
</template>

<style scoped>
#nav a.nuxt-link-exact-active {
    @apply text-blue-700;
    @apply dark:text-blue-400;
    @apply font-medium;
}
</style>
