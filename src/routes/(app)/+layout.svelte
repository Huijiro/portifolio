<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { browser } from '$app/environment';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<Header />
<main class="h-full w-full">
	<slot />
</main>
