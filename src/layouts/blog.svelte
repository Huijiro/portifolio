<script lang="ts">
	interface Props {
		title: string;
		description: string;
		date: string;
		thumbnail: string;
		children?: import('svelte').Snippet;
	}

	let { title, description, date, thumbnail, children }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@huijirohankei" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta
		name="twitter:image"
		content={thumbnail
			? 'https://www.huijiro.com/' + thumbnail
			: 'https://www.huijiro.com/thumbnail.webp'}
	/>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta
		property="og:image"
		content={thumbnail
			? 'https://www.huijiro.com/' + thumbnail
			: 'https://www.huijiro.com/thumbnail.webp'}
	/>
</svelte:head>

<article class="p-4">
	<h1 class="text-4xl mb-2">{title}</h1>
	<h2 class="text-md mb-6">Published on: {date}</h2>
	<hr />
	<div class="flex justify-center">
		<section class="prose prose-black dark:prose-invert lg:prose-xl p-4 ml-4">
			{@render children?.()}
		</section>
	</div>
</article>
