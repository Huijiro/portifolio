<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<span class="bg-[var(--primary)] !text-[var(--paper)]">
	{@render children?.()}
</span>
