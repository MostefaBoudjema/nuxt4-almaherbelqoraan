import { ref, watch } from 'vue';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('theme') || 'dark';
  }
  return 'dark';
};

const theme = ref(getInitialTheme());

function setTheme(newTheme) {
  theme.value = newTheme;
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('theme', newTheme);
  }
}

function toggleTheme() {
  setTheme(theme.value === 'light' ? 'dark' : 'light');
}

// Update <body> class whenever theme changes
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  watch(theme, (newTheme) => {
    const body = document.body;
    body.classList.remove('bg-primary-dark', 'bg-secondary-light');
    if (newTheme === 'dark') {
      body.classList.add('bg-primary-dark');
    } else {
      body.classList.add('bg-secondary-light');
    }
  }, { immediate: true });
}

export function useTheme() {
  return { theme, setTheme, toggleTheme };
} 