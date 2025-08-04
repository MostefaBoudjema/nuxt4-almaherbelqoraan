<template>
  <section class="sm:container sm:mx-auto">
    <div class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
      <!-- Banner left contents -->
      <div class="w-full md:w-1/3 text-center md:text-left px-4 sm:px-0" data-aos="fade-right" data-aos-delay="200">
        <h1 :class="[
          'text-4xl md:text-5xl xl:text-6xl font-extrabold uppercase font-poppins',
          isRtl ? 'md:text-right' : 'md:text-left',
          'text-ternary-dark dark:text-primary-light'
        ]">
          {{ t('HiIam') }}
        </h1>
        <h1 :class="[
          'text-4xl md:text-5xl xl:text-6xl font-extrabold uppercase font-poppins',
          isRtl ? 'md:text-right' : 'md:text-left',
          'text-purple-500'
        ]">
          {{ t('Full_name') }}
        </h1>

        <!-- <p :class="[
          'mt-4 text-lg sm:text-xl xl:text-2xl text-ternary-dark dark:text-primary-light font-poppins',
          isRtl ? 'md:text-right' : 'md:text-left'
        ]">
          {{ displayedText }}<span v-if="showCursor" class="typewriter-cursor text-yellow-500 font-bold">|</span>
        </p> -->

      </div>

      <!-- Banner right illustration -->
      <div class="w-full md:w-2/3 text-right float-right">
        <DotLottieVue class="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]" autoplay loop
          src="https://lottie.host/7084e09b-e817-4509-a56b-721b87efaf5d/qUGeAqZQ98.lottie" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUpdated, onUnmounted, ref, computed } from 'vue';
import feather from 'feather-icons';
import { useI18n } from 'vue-i18n';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import DownloadCv from './DownloadCv.vue';
import AboutBtn from './AboutBtn.vue';

const { t, locale }=useI18n({
  inheritLocale: true,
  useScope: 'global',
});

const rtlLocales=['ar', 'he', 'fa', 'ur']; // Add other RTL locales if needed
const isRtl=computed(() => rtlLocales.includes(locale.value));

const jobTitles=[
  t("Job Title1"),
  t("Job Title2"),
  t("Job Title3"),
  t("Job Title4"),
];
const currentJobTitleIndex=ref(0);
const displayedText=ref("");
const showCursor=ref(true);
let typingInterval=null;
let pauseTimeout=null;
let erasing=false;

const typeSpeed=80; // ms per character
const eraseSpeed=40; // ms per character
const pauseAfterTyping=1200; // ms to pause after typing
const pauseAfterErasing=400; // ms to pause after erasing

function startTypewriter() {
  const fullText=jobTitles[currentJobTitleIndex.value];
  let charIndex=0;
  erasing=false;

  typingInterval=setInterval(() => {
    if (charIndex<fullText.length) {
      displayedText.value+=fullText[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);
      pauseTimeout=setTimeout(() => startErasing(), pauseAfterTyping);
    }
  }, typeSpeed);
}

function startErasing() {
  erasing=true;
  typingInterval=setInterval(() => {
    if (displayedText.value.length>0) {
      displayedText.value=displayedText.value.slice(0, -1);
    } else {
      clearInterval(typingInterval);
      currentJobTitleIndex.value=(currentJobTitleIndex.value+1)%jobTitles.length;
      pauseTimeout=setTimeout(() => startTypewriter(), pauseAfterErasing);
    }
  }, eraseSpeed);
}

function startAnimation() {
  displayedText.value="";
  startTypewriter();
}

onMounted(() => {
  feather.replace();
  startAnimation();
  // Blinking cursor
  setInterval(() => {
    showCursor.value=!showCursor.value;
  }, 500);
});

onUnmounted(() => {
  clearInterval(typingInterval);
  clearTimeout(pauseTimeout);
});

onUpdated(() => {
  feather.replace();
});
</script>

<style scoped>
.typewriter-cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}
</style>