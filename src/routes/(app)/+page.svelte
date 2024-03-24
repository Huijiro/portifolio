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

	const technologies: {
		name: string;
		icon: string;
	}[] = [
		{
			name: 'Svelte',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/svelte.svg'
		},
		{
			name: 'Tailwind CSS',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg'
		},
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nodedotjs.svg'
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg"
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg"
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oracle.svg"
    }
	];
</script>

<article class="h-full flex items-center justify-center">
	<div class="text-center">
		<h1 class="text-4xl md:text-6xl leading-normal">Hello,<br class="md:hidden"/> I'm Gabriel <Inverted>Huijiro</Inverted> Rodrigues</h1>
		{#key title}
			<h2 in:blur class="mt-4 text-2xl md:text-4xl grid">
				{title}
			</h2>
		{/key}
	</div>
</article>

<article class="p-4">
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

<article class="p-4">
	<h1 class="text-4xl font-bold">Technologies are supposed to solve problems.</h1>
	<section class="text-lg p-4">
		<p>I have experience working with a variety of technologies, including:</p>
		<ul class="flex flex-wrap md:justify-evenly gap-3 p-4">
			{#each technologies as { name, icon }}
				<li class="flex items-center space-x-2">
					<img src={icon} alt={"Icon for " + name} class="w-8 h-8 dark:invert" />
					<span>{name}</span>
				</li>
				<li />
			{/each}
		</ul>
    <p>But if you work or need work done in another technology feel free to ask, I'm not against learning a new technology for work.</p>
	</section>
</article>
