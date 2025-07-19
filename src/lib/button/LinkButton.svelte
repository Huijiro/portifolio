<script lang="ts">
	interface Props {
		href?: string;
		children?: import('svelte').Snippet;
	}

	let { href = '', children }: Props = $props();
</script>

<a
	{href}
	class="p-2 cursor-pointer dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
>
	{@render children?.()}
</a>
