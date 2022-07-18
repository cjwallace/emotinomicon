<script lang="ts">
	import Emotinomicon from '$lib/components/Emotinomicon.svelte';
</script>

<svelte:head>
	<style>
		html {
			margin-left: calc(100vw - 100%);
		}
	</style>
</svelte:head>

<div>
	<Emotinomicon />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
