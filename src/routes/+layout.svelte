<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Huijiro's Portifolio</title>
</svelte:head>

<div
	class="flex flex-col dark:bg-black dark:text-white bg-white text-black h-screen w-screen transition-all duration-300"
>
	<slot />
</div>
