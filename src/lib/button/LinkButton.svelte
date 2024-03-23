<script lang="ts">
	export let href = '';
</script>

<a {href} class="p-2 cursor-pointer hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
	<slot />
</a>
