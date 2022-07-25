<script lang="ts">
	import Fuse from 'fuse.js';

	import emotions from '$lib/emotions';

	import Intro from './Intro.svelte';
	import ComboBox from './ComboBox.svelte';
	import Entry from './Entry.svelte';
	import Starfield from './Starfield.svelte';

	let selectedEmotionName: string;
	let comboboxActive: boolean;
	let pattern: string;

	const emotionNames = emotions.map((emotion) => emotion.name);

	function handleButtonClick(e: MouseEvent, closeEmotion: string) {
		pattern = closeEmotion;
		selectedEmotionName = closeEmotion;
	}

	$: selectedEmotion = emotions.filter((emotion) => emotion.name === selectedEmotionName)[0];
</script>

<svelte:head>
	<style>
		* {
			box-sizing: border-box;
		}
		body {
			background-color: #e9efec;
		}
	</style>
</svelte:head>

<div class="wrapper">
	<Starfield nStars={emotions.length} />
	<ComboBox
		ariaLabel="Emotions"
		list={emotionNames}
		bind:selectedItem={selectedEmotionName}
		bind:comboboxActive
		bind:pattern
		placeholder="What do you feel?"
	/>

	{#if !(selectedEmotionName === '' || comboboxActive)}
		<Entry emotion={selectedEmotion} handleClick={handleButtonClick} />
	{/if}

	{#if !comboboxActive && selectedEmotionName === ''}
		<Intro nEmotions={emotions.length} />
	{/if}
</div>

<style>
	:root {
		--black: #211e20;
		--grey: #555568;
		--highlight: #a0a08b;
		--light: #e9efec;
	}

	.wrapper {
		margin: auto;
		padding: 1rem;
		color: var(--black);
		background-color: var(--light);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		font-family: monospace;
	}
</style>
