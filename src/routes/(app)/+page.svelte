<script lang="ts">
	import { browser } from '$app/environment';
	import Inverted from '$lib/div/Inverted.svelte';
	import { onDestroy } from 'svelte';

	const titles: string[] = [
		'Full Stack Programmer',
		'Svelte Enthusiast',
		'Tailwind CSS Fan',
		'SvelteKit Appreciatior',
		'AI Tolerant',
		'MMO Player',
		'Ex VTuber',
		'VR Lover'
	];
	let i: number = $state(0);

	if (browser) {
		setTimeout(() => {
			const interval = setInterval(() => {
				i = (i + 1) % titles.length;
			}, 3000);

			onDestroy(() => {
				clearInterval(interval);
			});
		}, 9000);
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
			name: 'React',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg'
		},
		{
			name: 'Next.js',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg'
		},
		{
			name: 'Java',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oracle.svg'
		},
		{
			name: 'PostgreSQL',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postgresql.svg'
		},
		{
			name: 'MySQL',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mysql.svg'
		},
		{
			name: 'Prisma',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/prisma.svg'
		},
		{
			name: 'Drizzle',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/drizzle.svg'
		},
		{
			name: 'Express',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/express.svg'
		},
		{
			name: 'NestJS',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nestjs.svg'
		},
		{
			name: 'Spring Boot',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/springboot.svg'
		},
		{
			name: 'Go',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/go.svg'
		},
		{
			name: 'Docker',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/docker.svg'
		},
		{
			name: 'OpenAPI',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openapiinitiative.svg'
		},
		{
			name: 'Swagger',
			icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/swagger.svg'
		}
	];
</script>

<svelte:head>
	<title>Huijiro's Portifolio</title>
	<meta name="application-name" content="Huijiro's Portifolio" />
	<meta name="generator" content="Svelte" />
	<meta name="color-scheme" content="dark light" />
	<meta name="description" content="Portifolio for WebDeveloper" />
	<meta
		name="keywords"
		content="Web Developer, Frontend Developer, Backend Developer, Fullstack Developer, Svelte, Sapper, SvelteKit, React, Next.js, JavaScript, TypeScript, HTML, CSS, TailwindCSS, SASS, SCSS, Node.js, Express, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Azure, Google Cloud, Netlify, Vercel, Heroku, GitHub, GitLab, Bitbucket, Jira, Trello, Asana, Slack, Discord, Zoom, Microsoft Teams, Google Meet, WebRTC, WebSockets, REST, GraphQL, Webhooks, OAuth, JWT, PWA, SPA, SSR, SSG, SEO, Accessibility, Performance, Security, Responsive Design, Mobile First, Dark Mode, Light Mode, Internationalization, Localization, A/B Testing, Analytics, Testing, CI/CD, Docker, Kubernetes, Serverless, Microservices, Monolith, Jamstack, MERN, MEAN, MEVN, LAMP, WAMP, JAMstack, PERN, PERNstack, SvelteKit, Sapper, SvelteKit, React, Next.js, JavaScript, TypeScript, HTML, CSS, TailwindCSS, SASS, SCSS, Node.js, Express, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Azure, Google Cloud, Netlify, Vercel, Heroku, GitHub, GitLab, Bitbucket, Jira, Trello, Asana, Slack, Discord, Zoom, Microsoft Teams, Google Meet, WebRTC, WebSockets, REST, GraphQL, Webhooks, OAuth, JWT, PWA, SPA, SSR, SSG, SEO, Accessibility, Performance, Security, Responsive Design, Mobile First, Dark Mode, Light Mode, Internationalization, Localization, A/B Testing, Analytics, Testing, CI/CD, Docker, Kubernetes, Serverless, Microservices, Monolith, Jamstack, MERN, MEAN, MEVN, LAMP, WAMP, JAMstack, PERN, PERNstack"
	/>
	<meta name="author" content="Huijiro" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://www.huijiro.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Huijiro's Portifolio" />
	<meta property="og:description" content="Full stack developer for hire" />
	<meta property="og:image" content="https://www.huijiro.com/thumbnail.webp" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="huijiro.com" />
	<meta property="twitter:url" content="https://www.huijiro.com/" />
	<meta name="twitter:title" content="Huijiro's Portifolio" />
	<meta name="twitter:description" content="Full stack developer for hire" />
	<meta name="twitter:image" content="https://www.huijiro.com/thumbnail.webp" />
</svelte:head>

<article class="h-full flex items-center justify-center">
	<div class="text-center">
		<h1 class="text-4xl md:text-6xl leading-normal">
			Hello,<br class="md:hidden" /> I'm Gabriel <Inverted>Huijiro</Inverted> Rodrigues
		</h1>
		{#key i}
			<h2 class="mt-12 text-2xl md:text-4xl grid">
				{titles[i]}
			</h2>
		{/key}
	</div>
</article>

<article class="p-4 mx-[8%]">
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

<article class="p-4 mx-[8%] mb-16">
	<h1 class="text-4xl font-bold">Technologies are supposed to solve problems.</h1>
	<section class="text-lg p-4">
		<p>I have experience working with a variety of technologies, including:</p>
		<ul class="flex flex-wrap md:justify-evenly gap-3 p-4">
			{#each technologies as { name, icon }}
				<li class="flex items-center space-x-2">
					<img src={icon} alt={'Icon for ' + name} class="w-8 h-8 dark:invert" />
					<span>{name}</span>
				</li>
				<li></li>
			{/each}
		</ul>
		<p>
			But if you work or need work done in another technology feel free to ask, I'm not against
			learning a new technology for work.
		</p>
	</section>
</article>
