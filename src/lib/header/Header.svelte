<script lang="ts">
	import LinkButton from '$lib/button/LinkButton.svelte';
</script>

<header class="border-b-2 dark:border-white border-black">
	<nav class="flex justify-between">
		<span class="flex">
			<LinkButton href="/">Home</LinkButton>
			<LinkButton href="/blog">Blog</LinkButton>
		</span>
		<LinkButton href="/about">About</LinkButton>
	</nav>
</header>
