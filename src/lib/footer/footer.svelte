<script lang="ts">
	import LinkButton from '$lib/button/LinkButton.svelte';

	const socials: { name: string; icon: string; link: string }[] = [
		{
			name: 'Github',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg',
			link: 'https://github.com/huijiro'
		},
		{
			name: 'Twitter',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg',
			link: 'https://twitter.com/huijirohankei'
		},
		{
			name: 'LinkedIn',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg',
			link: 'https://www.linkedin.com/in/huijirohankei/'
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t-2 gap-3 p-4 flex justify-between">
	<section>
		<ul class="flex gap-3">
			{#each socials as { name, icon, link }}
				<li>
					<a href={link}>
						<img src={icon} alt={name} class="w-8 h-8 dark:invert" />
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1 class="text-center">"Huijiro" all rights reserved 2007-{currentYear}</h1>
	</section>
	<section>
		<LinkButton href="mailto:huijirohankei@gmail.com">Contact</LinkButton>
	</section>
</footer>
