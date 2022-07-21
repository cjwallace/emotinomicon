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

<div class="wrapper">
	<div class="content	">
		<Emotinomicon />
	</div>
</div>

<style>
	.wrapper {
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.content {
		width: 100%;
		max-width: 448px;
	}
</style>
