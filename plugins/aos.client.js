import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('page:finish', () => {
      AOS.init({
        once: true, // Only animate once
        duration: 800, // Animation duration
      });
      AOS.refresh();
    });
  }
}); 