<script lang="ts">
	interface Props {
		href?: string;
		children?: import('svelte').Snippet;
	}

	let { href = '', children }: Props = $props();
</script>

<a {href} class="cursor-pointer border-b-2">
	{@render children?.()}
</a>
