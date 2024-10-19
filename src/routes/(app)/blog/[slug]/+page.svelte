<script lang="ts">
	import './code.css';
	interface Props {
		data: import('./$types').PageData;
	}

	let { data }: Props = $props();
</script>

<data.content />
