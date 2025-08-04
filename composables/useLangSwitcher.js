import { ref } from '@vue/reactivity';
import { useI18n } from 'vue-i18n';

export default function useLangSwitcher() {
	const { locale } = useI18n();
	const currentLang = ref(locale.value);

	function toggleLang() {
		if (currentLang.value === 'en') {
			setArabicLang();
		} else {
			setEnglishLang();
		}
	}

	// Arabic Lang Function
	function setArabicLang() {
		currentLang.value = 'ar';
		locale.value = 'ar';

		if (process.client) {
			localStorage.setItem('lang', 'ar');
		}
	}

	// English Lang Function
	function setEnglishLang() {
		currentLang.value = 'en';
		locale.value = 'en';

		if (process.client) {
			localStorage.setItem('lang', 'en');
		}
	}

	return {
		currentLang,
		toggleLang,
		setArabicLang,
		setEnglishLang
	};
}
