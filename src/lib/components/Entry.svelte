<script lang="ts">
	import type { Emotion } from '$lib/emotions';

	export let emotion: Emotion;
	export let handleClick: (e: MouseEvent, emotion: string) => void;
</script>

<div class="entry">
	<p>{emotion?.description ?? ''}</p>
</div>

<div class="entry">
	<p>
		Perhaps that is not exactly what you are feeling. My navigation systems detect the following
		nearby emotional states.
	</p>
	<ul>
		{#each emotion?.closeEmotions ?? [] as closeEmotion}
			<li>
				<button aria-controls="emotionomicon-input" on:click={(e) => handleClick(e, closeEmotion)}
					>{closeEmotion}</button
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.entry {
		width: 100%;
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 10px;
		font-size: 1rem;
		text-align: center;
		font-family: inherit;
		border: 2px solid var(--black);
		border-radius: 0px;
	}

	p {
		margin: 0;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	ul,
	li {
		list-style-type: none;
		text-align: center;
		margin: 0;
		padding: 0;
	}

	button {
		font-family: monospace;
		font-size: 1rem;
		border: 1px solid var(--grey);
		background-color: var(--light);
		width: 50%;
		padding: 2px;
		margin: 0.5rem;
	}

	button:focus,
	button:hover {
		outline-offset: 2px;
		outline: 2px solid var(--grey);
	}
</style>
