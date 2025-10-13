<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex flex-col text-black h-screen w-screen transition-all duration-300">
	{@render children()}
</div>
