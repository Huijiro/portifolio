<script lang="ts">
	import { browser } from '$app/environment';
	import Inverted from '$lib/div/Inverted.svelte';
	import { blur } from 'svelte/transition';

	const titles: string[] = [
		'Full Stack Programmer',
		'Forever Junior',
		'Svelte Enthusiast',
		'Tailwind CSS Fan'
	];
	let title: string = titles[0];

	if (browser) {
		setInterval(() => {
			title = titles[Math.floor(Math.random() * titles.length)];
		}, 3000);
	}
</script>

<article class="h-full flex items-center justify-center">
	<div class="text-center">
		<h1 class="text-6xl">Hello, I'm Gabriel <Inverted>Huijiro</Inverted> Rodrigues</h1>
		{#key title}
			<h2
				in:blur
				class="mt-4 text-4xl grid"
			>
				{title}
			</h2>
		{/key}
	</div>
</article>

