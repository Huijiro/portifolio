<script lang="ts">
	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<data.content />
