<script lang="ts">
	export let nStars;
	const stars = Array.from({ length: nStars }, () => ({
		top: 100 * Math.random(),
		left: 100 * Math.random(),
		fadeSeconds: Math.floor(10 * Math.random() + 3)
	}));
</script>

<div id="starfield">
	{#each stars as star}
		<span
			class="star"
			style:top="{star.top}%"
			style:left="{star.left}%"
			style:animation-duration="{star.fadeSeconds}s"
			style:animation-delay="{Math.random() * 10}s">.</span
		>
	{/each}
</div>

<style>
	.star {
		pointer-events: none;
		position: fixed;
		opacity: 0;
		z-index: -1;
		animation-name: fade;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		color: var(--highlight);
	}

	@keyframes -global-fade {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
</style>
