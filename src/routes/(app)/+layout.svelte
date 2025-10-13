<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { browser } from '$app/environment';
	import Footer from '$lib/footer/footer.svelte';
	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	if (browser) {
		document.documentElement.classList.toggle(
			'dark',
			localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	}
</script>

<Header />
<main class="h-screen w-full flex flex-col text-primary bg-paper overflow-scroll">
	<main class="h-full overflow-auto">
		{@render children()}
	</main>
	<Footer />
</main>
