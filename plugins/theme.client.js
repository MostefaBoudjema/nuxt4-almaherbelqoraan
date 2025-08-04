export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.client) {
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme to document
    const html = document.documentElement;
    if (savedTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}); 