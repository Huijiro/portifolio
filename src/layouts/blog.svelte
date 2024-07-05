<script>
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-nocheck
	export let title;
  export let description;
	export let date;
	export let thumbnail;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@huijirohankei" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
	<meta property="og:image" content={thumbnail ? thumbnail : '/thumbnail.webp'} />
</svelte:head>

<article class="p-4">
	<h1 class="text-4xl mb-2">{title}</h1>
	<h2 class="text-md mb-6">Published on: {date}</h2>
	<hr />
	<div class="flex justify-center">
		<section class="prose prose-black dark:prose-invert lg:prose-xl p-4 ml-4">
			<slot />
		</section>
	</div>
</article>
