<script lang="ts">
	import '../app.css';
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
	<meta property="og:image" content="thumbnail.webp" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="huijiro.com" />
	<meta property="twitter:url" content="https://www.huijiro.com/" />
	<meta name="twitter:title" content="Huijiro's Portifolio" />
	<meta name="twitter:description" content="Full stack developer for hire" />
	<meta name="twitter:image" content="thumbnail.webp" />
</svelte:head>

<div
	class="flex flex-col dark:bg-black dark:text-white bg-white text-black h-screen w-screen transition-all duration-300"
>
	<slot />
</div>
