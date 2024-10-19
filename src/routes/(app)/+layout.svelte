<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { browser } from '$app/environment';
	import Footer from '$lib/footer/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

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
<main class="h-full w-full overflow-scroll">
	{@render children?.()}
	<Footer />
</main>
