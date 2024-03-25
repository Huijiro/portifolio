<script>
	export let title;
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<article class="p-2">
	<h1 class="text-2xl">{title}</h1>
	<h2 class="text-lg">Published on: {date}</h2>
	<hr />
	<section class="p-4">
		<slot />
	</section>
</article>
