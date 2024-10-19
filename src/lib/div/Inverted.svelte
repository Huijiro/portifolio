<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<span class="dark:bg-white dark:text-black bg-black text-white p-2">
	{@render children?.()}
</span>
