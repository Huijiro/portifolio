<script lang="ts">
	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<ul class="p-4 h-full flex flex-col gap-3">
	{#if data.posts.length === 0}
		<h1 class="italic text-center">Really? No posts? :(</h1>
	{/if}
	{#each data.posts as post}
		<li class="p-4 border-2">
			<a href={`/blog/${post.slug}`}>
				<header class="flex justify-between">
					<h1 class="text-xl font-bold">{post.title}</h1>
					<h2>{post.date}</h2>
				</header>
				<p class="ml-4">{post.description}</p>
			</a>
		</li>
	{/each}
</ul>
