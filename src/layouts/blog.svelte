<script>
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-nocheck
	export let title;
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<article class="p-4">
	<h1 class="text-4xl mb-2">{title}</h1>
	<h2 class="text-md mb-6">Published on: {date}</h2>
	<hr />
	<section class="prose prose-black dark:prose-invert lg:prose-xl p-4">
		<slot />
	</section>
</article>
