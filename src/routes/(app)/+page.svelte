<script lang="ts">
	import { browser } from '$app/environment';
	import Inverted from '$lib/div/Inverted.svelte';
	import { onDestroy } from 'svelte';
	import { blur } from 'svelte/transition';

	const titles: string[] = [
		'Full Stack Programmer',
		'Forever Junior',
		'Svelte Enthusiast',
		'Tailwind CSS Fan'
	];
	let title: string = titles[0];

	if (browser) {
		const interval = setInterval(() => {
			title = titles[Math.floor(Math.random() * titles.length)];
		}, 3000);

		onDestroy(() => {
			clearInterval(interval);
		});
	}
</script>

<article class="h-full flex items-center justify-center">
	<div class="text-center">
		<h1 class="text-6xl">Hello, I'm Gabriel <Inverted>Huijiro</Inverted> Rodrigues</h1>
		{#key title}
			<h2 in:blur class="mt-4 text-4xl grid">
				{title}
			</h2>
		{/key}
	</div>
</article>

<article class="h-1/6 p-4">
	<h1 class="text-4xl font-bold">Full Stack is not Stack Developer</h1>
	<section class="text-lg p-4">
		<p>
			Full Stack Developer is a developer who works with both the front-end and back-end of a
			website or application. They are responsible for the entire web development process, from
			designing the user interface to writing the code that powers the site's functionality. Full
			Stack Developers are in high demand, as they are able to work on all aspects of a project and
			can take on a variety of roles within a development team.
		</p>
		<p>
			I'm a Full Stack Developer with a passion for creating beautiful and functional websites. I
			have experience working with a variety of technologies. I am always looking to learn new
			skills and stay up-to-date with the latest web development trends. I am excited to bring my
			expertise to your next project and help you create a website that stands out from the
			competition.
		</p>
	</section>
</article>
