<script lang="ts">
	export let data: import('./$types').PageData;
</script>

<ul class="p-4 h-full flex flex-col gap-3">
	{#if data.posts.length === 0}
		<h1 class="italic text-center">Really? No posts? :(</h1>
	{/if}
	{#each data.posts as post}
		<li class="p-2 border-2">
			<a href={`/blog/${post.slug}`}>
				<header class="flex justify-between">
					<h1>{post.title}</h1>
					<h2>{post.date}</h2>
				</header>
				<p>{post.description}</p>
			</a>
		</li>
	{/each}
</ul>
