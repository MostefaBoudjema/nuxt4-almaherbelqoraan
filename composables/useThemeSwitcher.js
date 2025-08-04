import { ref, onMounted } from 'vue';

export default function useThemeSwitcher() {
	const currentTheme = ref('dark');

	// Initialize theme on mount
	onMounted(() => {
		// Check for saved theme preference or default to dark
		const savedTheme = localStorage.getItem('theme') || 'dark';
		currentTheme.value = savedTheme;
		
		// Apply theme to document
		applyTheme(savedTheme);
	});

	function toggleTheme() {
		if (currentTheme.value === 'dark') {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	}

	// Light Theme Function
	function setLightTheme() {
		currentTheme.value = 'light';
		localStorage.setItem('theme', 'light');
		applyTheme('light');
	}

	// Dark Theme Function
	function setDarkTheme() {
		currentTheme.value = 'dark';
		localStorage.setItem('theme', 'dark');
		applyTheme('dark');
	}

	// Apply theme to document
	function applyTheme(theme) {
		if (process.client) {
			const html = document.documentElement;
			if (theme === 'dark') {
				html.classList.add('dark');
			} else {
				html.classList.remove('dark');
			}
		}
	}

	return {
		currentTheme,
		toggleTheme,
		setLightTheme,
		setDarkTheme,
		applyTheme
	};
}
