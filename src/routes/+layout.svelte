<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class="flex flex-col dark:bg-black dark:text-white bg-white text-black h-screen w-screen transition-all duration-300"
>
	{@render children?.()}
</div>
